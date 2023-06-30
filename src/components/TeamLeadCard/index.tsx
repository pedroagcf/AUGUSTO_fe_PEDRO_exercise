import Card from 'components/Card';
import React from 'react';
import {UserData} from 'types';

interface TeamLeadCardProps {
    teamLead: UserData;
}

const TeamLeadCard = ({teamLead}: TeamLeadCardProps) => {
    const {id, firstName, lastName, displayName, location} = teamLead;
    const columns = [
        {key: 'Team Lead', value: ''},
        {key: 'Name', value: `${firstName} ${lastName}`},
        {key: 'Display Name', value: displayName},
        {key: 'Location', value: location},
    ];

    return <Card columns={columns} url={`/user/${id}`} navigationProps={teamLead} />;
};

export default TeamLeadCard;
