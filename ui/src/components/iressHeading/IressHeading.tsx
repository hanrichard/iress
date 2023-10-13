import React from 'react';

type Type = '1' | '2';

export const IressHeading = ({ level, children }: { level: Type, children?: React.ReactNode }) => {
 return level === "1" ? <h1>{children}</h1> : <h2>{children}</h2>
};

export default IressHeading;
