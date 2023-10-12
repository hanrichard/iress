import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputWrapper, HeaderWrapper, LogoWrapper, SearchWrapper } from './index.styles';

const Header = () => {
    const [value, setValue] = useState('')
    return <HeaderWrapper>
        <LogoWrapper>
            <Link to='/'>IDMb</Link>
        </LogoWrapper>

        <InputWrapper><input placeholder='Search IMDb' value={value} onChange={(e) => setValue(e.target.value)} /></InputWrapper>
        <SearchWrapper><Link to={'/searchResult?key=' + value}>Search</Link></SearchWrapper>

    </HeaderWrapper>
};

export default Header;
