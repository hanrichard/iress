import React from 'react';
import Card from './Card';
import { CardListWrapper } from './CardList.styles';
import { CardProps } from './Card'

export interface CardListProps {
    isLink?: boolean;
    data: CardProps[];
}

const CardList = ({ data, isLink }: CardListProps) => {
    return data && <CardListWrapper>
        {data.map(i => <Card key={i.id} id={i.id} thumbnail={i.thumbnail} rating={i.rating} name={i.name} isLink={isLink} />)}
    </CardListWrapper>
}

export default CardList;