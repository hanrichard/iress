import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import { LayoutWrapper } from './Layout.styles'

const Layout = () => {
    return <LayoutWrapper>
        <Header />
        <Outlet />
        <Footer />
    </LayoutWrapper>;
};

export default Layout;
