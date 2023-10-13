; import React from 'react';
import { getMovies } from '../apis/getMovies';
import { useSearchParams } from 'react-router-dom';
import { CardList, CardProps } from '../components';

const SearchResult = () => {
    const { data, isLoading } = getMovies();

    const [searchParams] = useSearchParams();
    const key = searchParams.get('key');

    const items = data?.movies?.populars?.filter((i: CardProps) => {
        return i?.name?.toLocaleLowerCase().includes(key?.toLocaleLowerCase() || '');
    }) ?? [];

    const displayMovies = () => <CardList data={items} withLink />;

    return <>

        <div>{isLoading && 'Loading...'}</div>
        { !isLoading && (items.length !== 0 ? displayMovies() : <>No result</>)}</>;
};

export default SearchResult;
