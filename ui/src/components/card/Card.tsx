import React from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper, NameWrapper } from './Card.styles';
import { IressText } from '../iressText/IressText';

export interface CardProps {
    id: string;
    name: string;
    thumbnail: string;
    withLink?: boolean;
    rating: number;
}

export const Card = ({ id, name, thumbnail, rating, withLink }: CardProps) => {
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
            <IressText type="text">Rating: {rating}</IressText>
        </CardWrapper>
    );
};

export default Card;
