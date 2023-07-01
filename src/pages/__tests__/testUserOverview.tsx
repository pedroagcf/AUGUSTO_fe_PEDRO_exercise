import React from 'react';
import {render, screen} from '@testing-library/react';
import UserOverviewPage from '../UserOverviewPage';

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

describe('UserOverviewPage', () => {
    it('should render UserOverviewPage', () => {
        render(<UserOverviewPage />);

        expect(screen.getByText('Test User')).toBeInTheDocument();
        expect(screen.getByText('userName')).toBeInTheDocument();
        expect(screen.getByText('location')).toBeInTheDocument();
    });
});
