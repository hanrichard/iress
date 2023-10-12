import axios from 'axios';
import { useQuery } from 'react-query';

const fetch = async () => {
    const { data } = await axios.get(`https://77xmk0xq36.execute-api.ap-southeast-2.amazonaws.com/dev/api/movies`)
    return data;
}

export const getMovies = () => {
    return useQuery(['MOVIES'], fetch)
}
