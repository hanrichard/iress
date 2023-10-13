import React from 'react';
import { render } from '../test/test-utils';
import '@testing-library/jest-dom';
import Home from './Home';
import { screen } from '@testing-library/react';
import { mswServer } from '../setupTests';
import { moviesHandlers } from '../apis/mocks';

test('renders Home page', async () => {
 mswServer.use(...moviesHandlers)
 await render(<Home />);

 expect(await screen.findByText('9')).toBeInTheDocument()
 expect(await screen.findByRole('link', { name: 'The Dark Knight (2008)' })).toBeInTheDocument()
});
