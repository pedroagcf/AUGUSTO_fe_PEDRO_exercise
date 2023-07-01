import React from 'react';

import TeamLeadCard from 'components/TeamLeadCard';
import TeamMembersList from 'components/TeamMembersList';
import useFetchTeamOverview from 'hooks/useFetchTeamOverview';
import {useLocation, useParams} from 'react-router-dom';
import {Spinner} from 'components/Spinner';
import SearchInput from 'components/SearchInput';
import Header from '../components/Header';
import {Container} from '../components/GlobalComponents';

const TeamOverviewPage = (): JSX.Element => {
    const location = useLocation();
    const {teamId} = useParams();
    const {state, dispatch} = useFetchTeamOverview(teamId);
    const {teamOverviewData, loading, error} = state;

    const onFilterUsersByName = textValue => {
        const {teamMembers} = teamOverviewData;
        const filterQuery = textValue.toLowerCase();
        const matchedUsers = teamMembers.filter(member =>
            member.displayName.toLowerCase().includes(filterQuery)
        );
        dispatch({type: 'FILTER_USERS', payload: matchedUsers});
    };

    if (loading) {
        return (
            <Container>
                <Spinner />
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <p>ERROR: Server unavailable</p>
            </Container>
        );
    }

    const {teamLead, teamMembers} = teamOverviewData;

    return (
        <Container>
            <Header title={`Team ${location.state.name}`} />
            <SearchInput label="Filter by name:" onChange={onFilterUsersByName} />
            <TeamLeadCard teamLead={teamLead} />
            <TeamMembersList teamMembersData={teamMembers} />
        </Container>
    );
};

export default TeamOverviewPage;
