import React from 'react';
import { getMovies } from '../apis/getMovies';
import CardList from '../components/cardList/CardList';

const Home = () => {
    const { data } = getMovies()
    const displayMovies = () => <CardList data={data?.movies?.populars} isLink />
    return displayMovies()
};

export default Home;