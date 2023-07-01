import Card from 'components/Card';
import React from 'react';
import {UserData} from 'types';

interface UserCardProps {
    user: UserData;
}

const UserCard = ({user}: UserCardProps) => {
    const {firstName, lastName, displayName, location} = user;

    const columns = [
        {
            key: 'Name',
            value: `${firstName} ${lastName}`,
        },
        {
            key: 'Display Name',
            value: displayName,
        },
        {
            key: 'Location',
            value: location,
        },
    ];

    return <Card columns={columns} hasNavigation={false} navigationProps={user} />;
};

export default UserCard;
