import React from 'react';
import { getMovies } from '../apis/getMovies';
import { useParams } from 'react-router-dom';
import { Card, CardProps, IressText, IressHeading } from '../components';

const Details = () => {
    const { id } = useParams();
    const { data, isLoading } = getMovies();

    const item = data?.movies?.populars?.find((i: CardProps) => {
        return i.id === id;
    });

    return (
        <>
            <IressHeading level="1" >Details</IressHeading>
            <div>{isLoading && 'Loading...'}</div>
            {!isLoading &&
                (item ? (
                    <Card id={item.id} thumbnail={item.thumbnail} rating={item.rating} name={item.name} />
                ) : (
                        <IressText type="text">No result</IressText>
                    ))}
        </>
    );
};
export default Details;
