import React from 'react';
import { render } from '../test/test-utils';
import '@testing-library/jest-dom';
import SearchResults from './SearchResults';
import { screen } from '@testing-library/react';
import { mswServer } from '../setupTests';
import { moviesHandlers } from '../apis/mocks';

test('renders SearchResults page', async () => {
 mswServer.use(...moviesHandlers);
 await render(<SearchResults />, {
  routing: {
   path: '/searchResult',
   route: '/searchResult?key=The'
  }
 });
 expect(await screen.findByText('9')).toBeInTheDocument();
 expect(await screen.findByRole('link', { name: 'The Dark Knight (2008)' })).toBeInTheDocument();
});

test('renders SearchResults page with no result', async () => {
 mswServer.use(...moviesHandlers);
 await render(<SearchResults />, {
  routing: {
   path: '/searchResult',
   route: '/searchResult?key=sdfsdfd'
  }
 });
 expect(await screen.findByText('No result')).toBeInTheDocument();
});
