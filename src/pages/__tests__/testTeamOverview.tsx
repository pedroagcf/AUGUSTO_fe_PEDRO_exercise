import * as React from 'react';
import {render, screen, waitFor, within} from '@testing-library/react';
import useFetchTeamOverview from 'hooks/useFetchTeamOverview';
import TeamOverviewPage from '../TeamOverviewPage';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({
        state: {
            teamName: 'Some Team',
        },
    }),
    useNavigate: () => ({}),
    useParams: () => ({
        teamId: '1',
    }),
}));

jest.mock('../../hooks/useFetchTeamOverview');

describe('TeamOverview', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should render team overview users', async () => {
        const teamLead = {
            id: '1',
            firstName: 'name',
            lastName: 'name',
            displayName: '',
            location: '',
            avatar: '',
        };
        const teamMembers = [
            {
                id: '2',
                firstName: 'firstname',
                lastName: 'lastname',
                displayName: 'firstnamelastname',
                location: '',
                avatar: '',
            },
        ];

        jest.mocked(useFetchTeamOverview).mockReturnValue({
            state: {
                teamOverviewData: {
                    teamLead,
                    teamMembers,
                },
                loading: false,
                error: false,
            },
            dispatch: jest.fn(),
        });

        render(<TeamOverviewPage />);

        expect(screen.getAllByText(/location/i)).toHaveLength(2);
    });
});
