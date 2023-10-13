import React from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper, NameWrapper } from './Card.styles';

export interface CardProps {
    id: string;
    name: string;
    thumbnail: string;
    withLink?: boolean;
    rating: number;
}

const Card = ({ id, name, thumbnail, rating, withLink }: CardProps) => {
    return (
        <CardWrapper key={id}>
            {withLink ? (
                <Link to={'/movie/' + id}>
                    <img src={thumbnail} />
                </Link>
            ) : (
                    <img src={thumbnail} />
                )}
            <NameWrapper>{withLink ? <Link to={'/movie/' + id}>{name}</Link> : name}</NameWrapper>
            <div>Rating: {rating}</div>
        </CardWrapper>
    );
};

export default Card;
