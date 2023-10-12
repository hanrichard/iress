import React from 'react';
import { getMovies } from '../apis/getMovies';
import { useParams } from 'react-router-dom';
import Card, { CardProps } from '../components/card/Card';


const Details = () => {
    const { id } = useParams();
    const { data } = getMovies();

    const item = data?.movies?.populars?.find((i: CardProps) => {
        return i.id === id
    })

    return item ? <Card id={item.id} thumbnail={item.thumbnail} rating={item.rating} name={item.name} /> : <>No result</>
};

export default Details;