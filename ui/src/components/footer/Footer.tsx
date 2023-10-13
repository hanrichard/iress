import React from 'react';
import { FooterWrapper } from './Footer.styles';
import { IressText } from '../iressText/IressText';

export const Footer = () => {
    return <FooterWrapper>
        <IressText type="text" >@1990-2023 by IMDb.com.au</IressText>
    </FooterWrapper>;
};

export default Footer;