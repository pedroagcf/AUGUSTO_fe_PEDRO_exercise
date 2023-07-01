import * as React from 'react';
import {render, screen} from '@testing-library/react';
// import * as API from '../../api';
import TeamsPage from '../TeamsPage';
import useFetchTeams from '../../hooks/useFetchTeams';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        state: {
            firstName: 'Test',
            lastName: 'User',
            displayName: 'userName',
            location: 'location',
        },
    }),
    useNavigate: () => ({}),
}));

jest.mock('../../hooks/useFetchTeams');

describe('Teams', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should render spinner while loading', async () => {
        jest.mocked(useFetchTeams).mockReturnValue({
            state: {
                teams: [],
                loading: true,
                error: false,
            },
            dispatch: jest.fn(),
        });

        render(<TeamsPage />);

        expect(screen.getByTestId('spinner')).toBeInTheDocument();
        expect(screen.queryByTestId('cardContainer')).not.toBeInTheDocument();
    });

    it('should render teams list', async () => {
        jest.mocked(useFetchTeams).mockReturnValue({
            state: {
                teams: [
                    {id: '1', name: 'Team1'},
                    {id: '2', name: 'Team2'},
                ],
                loading: false,
                error: false,
            },
            dispatch: jest.fn(),
        });

        render(<TeamsPage />);

        expect(screen.getByText('Team1')).toBeInTheDocument();
        expect(screen.getByText('Team2')).toBeInTheDocument();
    });

    it('should display an error message', async () => {
        jest.mocked(useFetchTeams).mockReturnValue({
            state: {
                teams: [],
                loading: false,
                error: true,
            },
            dispatch: jest.fn(),
        });

        render(<TeamsPage />);

        expect(await screen.findByText(/ERROR: Server unavailable/i)).toBeInTheDocument();
        expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    });
});
