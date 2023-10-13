import React from 'react';
import { getMovies } from '../apis/getMovies';
import { CardList } from '../components';

const Home = () => {
    const { data, isLoading } = getMovies()
    const displayMovies = () => data ? <CardList data={data?.movies?.populars} withLink /> : <>No result</>
    return <>
        <div>{isLoading && 'Loading...'}</div>
        {!isLoading && displayMovies()}
    </>
};

export default Home;