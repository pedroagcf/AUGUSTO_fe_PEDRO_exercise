import React from 'react';
import List from 'components/List';
import {ListItem, Teams} from 'types';

interface TeamListProps {
    teams: Teams[];
}

const TeamList = ({teams}: TeamListProps) => {
    const mapTeamsToListItems = (teamsData: Teams[]): ListItem[] => {
        return teamsData.map(team => ({
            id: team.id,
            url: `/team/${team.id}`,
            columns: [
                {
                    key: 'Name',
                    value: team.name,
                },
            ],
            navigationProps: team,
        }));
    };

    const items = mapTeamsToListItems(teams);

    return <List items={items} />;
};

export default TeamList;
