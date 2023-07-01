import React from 'react';
import {ListItem} from 'types';
import Card from '../Card';
import {Container} from './styles';

interface ListProps {
    items: ListItem[];
    hasNavigation?: boolean;
}

const List = ({items, hasNavigation = true}: ListProps) => (
    <Container>
        {items.map(({url, id, columns, navigationProps}, index) => (
            <Card
                key={`${id}-${index}`}
                id={id}
                columns={columns}
                navigationProps={navigationProps}
                hasNavigation={hasNavigation}
                url={url}
            />
        ))}
    </Container>
);

export default List;
