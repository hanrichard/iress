import React from 'react';
import { getMovies } from '../apis/getMovies';
import { useSearchParams } from 'react-router-dom';
import CardList from '../components/cardList/CardList';
import { CardProps } from '../components/card/Card';

const SearchResult = () => {
    const { data } = getMovies()
    const [searchParams] = useSearchParams();
    const key = searchParams.get('key');

    const items = data?.movies?.populars?.filter((i: CardProps) => {
        return i?.name?.toLocaleLowerCase().includes(key?.toLocaleLowerCase() || '')
    })

    const displayMovies = () => <CardList data={items} isLink />

    return items.length !== 0 ? displayMovies() : <>No result</>
};

export default SearchResult;