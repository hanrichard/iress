import React from 'react';
import { Link } from 'react-router-dom';
import { IressLinkWrapper } from './IressLink.styles';

export const IressLink = ({ url, name }: { url: string; name: string }) => {
    return (
        <IressLinkWrapper>
            <Link to={url}>{name}</Link>
        </IressLinkWrapper>
    );
};

export default IressLink;
