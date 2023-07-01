import List from 'components/List';
import React, {useCallback} from 'react';
import {ListItem, UserData} from 'types';

interface TeamMembersListProps {
    teamMembersData: UserData[];
}

const TeamMembersList = ({teamMembersData}: TeamMembersListProps) => {
    const handleTeamMembersData = useCallback(
        (users: UserData[]): ListItem[] =>
            users.map(user => {
                const {id, firstName, lastName, displayName, location} = user;
                const columns = [
                    {key: 'Name', value: `${firstName} ${lastName}`},
                    {key: 'Display Name', value: displayName},
                    {key: 'Location', value: location},
                ];
                return {
                    id,
                    url: `/user/${id}`,
                    columns,
                    navigationProps: user,
                };
            }),
        []
    );

    const teamMembers = handleTeamMembersData(teamMembersData);
    return <List items={teamMembers} />;
};

export default TeamMembersList;
