import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../footer';
import Header from '../header';
import { LayoutWrapper } from './index.styles'

const Layout = () => {
    return <LayoutWrapper>
        <Header />
        <Outlet />
        <Footer />
    </LayoutWrapper>;
};

export default Layout;
