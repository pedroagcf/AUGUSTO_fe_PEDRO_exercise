import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {Teams, UserData} from 'types';
import {Container} from './styles';

interface CardProps {
    id?: string;
    url?: string;
    columns: Array<{
        key: string;
        value: string;
    }>;
    hasNavigation?: boolean;
    navigationProps?: UserData | Teams | null;
}

const Card = ({id, columns, url, hasNavigation = true, navigationProps = null}: CardProps) => {
    const navigate = useNavigate();

    const handleNavigation = (event: Event) => {
        if (hasNavigation && url) {
            navigate(url, {
                state: navigationProps,
            });
        }
        event.preventDefault();
    };

    return (
        <Container
            data-testid={`cardContainer-${id}`}
            hasNavigation={hasNavigation}
            onClick={handleNavigation}
        >
            {columns.map(({key, value}) => (
                <p key={key}>
                    <strong>{key}</strong>&nbsp;{value}
                </p>
            ))}
        </Container>
    );
};

export default Card;
