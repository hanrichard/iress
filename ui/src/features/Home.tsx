import React from 'react';
import { getMovies } from '../apis/getMovies';
import { CardList, IressText, IressHeading } from '../components';

const Home = () => {
    const { data, isLoading } = getMovies()
    const displayMovies = () => data ? <CardList data={data?.movies?.populars} withLink /> : <IressText type="text">No result</IressText>
    return <>
        <IressHeading level="1">Home</IressHeading>
        <div>{isLoading && 'Loading...'}</div>
        {!isLoading && displayMovies()}
    </>
};

export default Home;