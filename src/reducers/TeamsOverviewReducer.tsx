import {UserData} from 'types';

interface TeamOverviewData {
    teamLead?: UserData;
    teamMembers?: UserData[];
}

interface TeamOverviewState {
    teamOverviewData: TeamOverviewData;
    loading: boolean;
    error: boolean;
}

type Action =
    | {type: 'FETCH_TEAM_START'}
    | {type: 'FETCH_TEAM_SUCCESS'; payload: TeamOverviewData}
    | {type: 'FETCH_TEAM_ERROR'}
    | {type: 'FILTER_USERS'; payload: UserData[]};

export const teamsOverviewReducer = (
    state: TeamOverviewState,
    action: Action
): TeamOverviewState => {
    switch (action.type) {
        case 'FETCH_TEAM_START':
            return {...state, loading: true, error: false};
        case 'FETCH_TEAM_SUCCESS':
            return {...state, teamOverviewData: action.payload, loading: false, error: false};
        case 'FETCH_TEAM_ERROR':
            return {...state, loading: false, error: true};
        case 'FILTER_USERS':
            return {
                ...state,
                teamOverviewData: {
                    ...state.teamOverviewData,
                    teamMembers: action.payload,
                },
                loading: false,
                error: false,
            };
        default:
            return state;
    }
};
