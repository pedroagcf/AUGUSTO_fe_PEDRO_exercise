import {useEffect, useReducer} from 'react';
import {teamsReducer} from 'reducers/TeamsReducer';
import {TeamsState} from 'types';
import {getTeams as fetchTeams} from '../api';

const useFetchTeams = () => {
    const initialState: TeamsState = {
        teams: [],
        loading: true,
        error: false,
    };
    const [state, dispatch] = useReducer(teamsReducer, initialState);

    useEffect(() => {
        const getTeams = async () => {
            try {
                dispatch({type: 'FETCH_TEAMS_REQUEST'});
                const response = await fetchTeams();
                dispatch({type: 'FETCH_TEAMS_SUCCESS', payload: response});
            } catch (err) {
                dispatch({type: 'FETCH_TEAMS_FAILURE'});
            }
        };

        getTeams();
    }, []);

    return {state, dispatch};
};

export default useFetchTeams;
