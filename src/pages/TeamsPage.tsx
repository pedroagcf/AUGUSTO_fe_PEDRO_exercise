import React from 'react';
import {Spinner} from 'components/Spinner';
import TeamList from 'components/TeamsList';
import SearchInput from 'components/SearchInput';
import Header from '../components/Header';
import {Container} from '../components/GlobalComponents';
import useFetchTeams from '../hooks/useFetchTeams';

const TeamsPage = () => {
    const {state, dispatch} = useFetchTeams();
    const {teams, loading, error} = state;

    const onFilterTeamsByName = textValue => {
        const filterQuery = textValue.toLowerCase();
        const matchedTeams = state.teams.filter(team =>
            team.name.toLowerCase().includes(filterQuery)
        );
        dispatch({type: 'FILTER_TEAMS', payload: matchedTeams});
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

    return (
        <Container>
            <Header title="Teams" showBackButton={false} />
            <SearchInput label="Filter by name:" onChange={onFilterTeamsByName} />
            <TeamList teams={teams} />
        </Container>
    );
};

export default TeamsPage;
