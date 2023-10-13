import React from 'react';

type Type = 'text' | 'p'

export const IressText = ({ type, children }: { type: Type, children: React.ReactNode }) => {
 return type === 'text' ? <span>{children}</span> : <p>{children}</p>
};

export default IressText;
