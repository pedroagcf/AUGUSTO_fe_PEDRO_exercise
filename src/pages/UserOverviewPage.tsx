import UserCard from 'components/UserCard';
import * as React from 'react';
import {useLocation} from 'react-router-dom';
import {Container} from '../components/GlobalComponents';
import Header from '../components/Header';

const UserOverviewPage = () => {
    const location = useLocation();
    return (
        <Container>
            <Header title={`User ${location.state.firstName} ${location.state.lastName}`} />
            <UserCard user={location.state} />
        </Container>
    );
};

export default UserOverviewPage;
