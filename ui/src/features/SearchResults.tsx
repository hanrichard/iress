; import React from 'react';
import { getMovies } from '../apis/getMovies';
import { useSearchParams } from 'react-router-dom';
import { CardList, CardProps, IressText, IressHeading } from '../components';

const SearchResult = () => {
    const { data, isLoading } = getMovies();

    const [searchParams] = useSearchParams();
    const key = searchParams.get('key');

    const items = data?.movies?.populars?.filter((i: CardProps) => {
        return i?.name?.toLocaleLowerCase().includes(key?.toLocaleLowerCase() || '');
    }) ?? [];

    const displayMovies = () => <CardList data={items} withLink />;

    return <>
        <IressHeading level="1">Search results</IressHeading>
        <div>{isLoading && 'Loading...'}</div>
        { !isLoading && (items.length !== 0 ? displayMovies() : <IressText type="text">No result</IressText>)}</>;
};

export default SearchResult;
