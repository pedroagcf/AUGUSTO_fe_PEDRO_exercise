import {Teams, TeamsState} from 'types';

type TeamsAction =
    | {type: 'FETCH_TEAMS_REQUEST'}
    | {type: 'FETCH_TEAMS_SUCCESS'; payload: Teams[]}
    | {type: 'FETCH_TEAMS_FAILURE'}
    | {type: 'FILTER_TEAMS'; payload: Teams[]};

export const teamsReducer = (state: TeamsState, action: TeamsAction): TeamsState => {
    switch (action.type) {
        case 'FETCH_TEAMS_REQUEST':
            return {...state, loading: true, error: false};
        case 'FETCH_TEAMS_SUCCESS':
            return {...state, teams: action.payload, loading: false, error: false};
        case 'FETCH_TEAMS_FAILURE':
            return {...state, loading: false, error: true};
        case 'FILTER_TEAMS':
            return {...state, teams: action.payload, loading: false, error: false};
        default:
            return state;
    }
};
