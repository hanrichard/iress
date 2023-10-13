import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

test('renders app', () => {
    const { getByText } = render(<App />);

    const logoElement = getByText(/IDMb/i);
    expect(logoElement).toBeInTheDocument();

    const searchElement = getByText(/search/i);
    expect(searchElement).toBeInTheDocument();

    const footerElement = getByText(/@1990-2023 by IMDb.com.au/i);
    expect(footerElement).toBeInTheDocument();
});
