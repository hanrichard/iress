import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, LogoWrapper } from './index.styles';
import IressLink from '../IressLink/IressLink'
import IressInput from '../IressInput/IressInput';

const Header = () => {
    const [value, setValue] = useState('')
    return <HeaderWrapper>
        <LogoWrapper>
            <Link to='/'>IDMb</Link>
        </LogoWrapper>

        <IressInput placeholder='Search IMDb' value={value} onChange={(e) => setValue(e.target.value)} />
        <IressLink name='Search' url={'/searchResult?key=' + value} />
    </HeaderWrapper>
};

export default Header;
