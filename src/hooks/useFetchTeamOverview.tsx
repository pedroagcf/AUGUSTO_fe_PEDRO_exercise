import {useEffect, useReducer} from 'react';
import {teamsOverviewReducer} from 'reducers/TeamsOverviewReducer';
import {TeamOverviewData, TeamOverviewState} from 'types';
import {getTeamOverview, getUserData} from '../api';

const useFetchTeamOverview = (teamId: string) => {
    const initialState: TeamOverviewState = {
        teamOverviewData: {},
        loading: true,
        error: false,
    };

    const [state, dispatch] = useReducer(teamsOverviewReducer, initialState);

    useEffect(() => {
        const fetchTeamData = async (): Promise<void> => {
            dispatch({type: 'FETCH_TEAM_START'});

            try {
                const {teamLeadId, teamMemberIds = []} = await getTeamOverview(teamId);

                const teamLead = await getUserData(teamLeadId);

                const teamMembers = await Promise.all(teamMemberIds.map(getUserData));

                const teamOverviewData: TeamOverviewData = {
                    teamLead,
                    teamMembers,
                };

                dispatch({type: 'FETCH_TEAM_SUCCESS', payload: teamOverviewData});
            } catch (err) {
                dispatch({type: 'FETCH_TEAM_ERROR'});
            }
        };

        fetchTeamData();
    }, [teamId]);

    return {state, dispatch};
};

export default useFetchTeamOverview;
