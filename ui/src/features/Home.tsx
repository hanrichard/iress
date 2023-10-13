import React from 'react';
import { getMovies } from '../apis/getMovies';
import CardList from '../components/cardList/CardList';

const Home = () => {
    const { data } = getMovies()
    const displayMovies = () => data ? <CardList data={data?.movies?.populars} withLink /> : <>No result</>
    return displayMovies()
};

export default Home;