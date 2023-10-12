import React from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper, NameWrapper } from './Card.styles';

export interface CardProps {
    id: string;
    name: string;
    thumbnail: string;
    isLink?: boolean;
    rating: number;
}

const Card = ({ id, name, thumbnail, rating, isLink }: CardProps) => {
    return (
        <CardWrapper key={id}>
            {isLink ? (
                <Link to={'/movie/' + id}>
                    <img src={thumbnail} />
                </Link>
            ) : (
                    <img src={thumbnail} />
                )}
            <NameWrapper>{isLink ? <Link to={'/movie/' + id}>{name}</Link> : name}</NameWrapper>
            <div>{rating}</div>
        </CardWrapper>
    );
};

export default Card;
