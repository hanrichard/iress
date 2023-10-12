import React from 'react';
import axios from "axios";

import Layout from '../components/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../features/Home'
import SearchResult from '../features/SearchResults';
import { QueryClient, QueryClientProvider } from 'react-query';
import Details from '../features/Details';

const queryClient = new QueryClient({})

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/searchResult' element={<SearchResult />} />
                        <Route path='/movie/:id' element={<Details />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
