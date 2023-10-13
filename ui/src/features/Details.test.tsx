import React from 'react';
import { render } from '../test/test-utils';
import '@testing-library/jest-dom';
import Details from './Details';
import { screen } from '@testing-library/react';
import { mswServer } from '../setupTests';
import { moviesHandlers } from '../apis/mocks';

test('renders Detail page', async () => {
 mswServer.use(...moviesHandlers)
 await render(<Details />, {
  routing: {
   path: '/movie/:id',
   route: '/movie/ec34a58c-32dc-4988-86e6-0ed1b2f7bdb1'
  }
 });

 expect(await screen.findByText('Rating: 9')).toBeInTheDocument();
});

test('renders Detail page with no result', async () => {
 mswServer.use(...moviesHandlers)
 await render(<Details />, {
  routing: {
   path: '/movie/:id',
   route: '/movie/ec34a58c-32dc-4988-86e6-0ed1b2f7bdb3'
  }
 });

 expect(await screen.findByText('No result')).toBeInTheDocument();
});
