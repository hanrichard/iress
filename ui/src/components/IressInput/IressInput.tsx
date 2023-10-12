import React from 'react';
import { IressInputWrapper } from './IressInput.styles';

const IressInput = ({
    value,
    placeholder,
    onChange
}: {
    value: string;
    placeholder: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}) => {
    return (
        <IressInputWrapper>
            <input placeholder={placeholder} value={value} onChange={onChange} />
        </IressInputWrapper>
    );
};

export default IressInput;
