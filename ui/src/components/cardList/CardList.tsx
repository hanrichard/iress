import React from 'react';
import Card from '../card/Card';
import { CardListWrapper } from './CardList.styles';
import { CardProps } from '../card/Card'

export interface CardListProps {
    withLink?: boolean;
    data: CardProps[];
}

const CardList = ({ data, withLink }: CardListProps) => {
    return data && <CardListWrapper>
        {data.map(i => <Card key={i.id} id={i.id} thumbnail={i.thumbnail} rating={i.rating} name={i.name} withLink={withLink} />)}
    </CardListWrapper>
}

export default CardList;