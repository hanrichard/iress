import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';

import '@testing-library/jest-dom';

export interface RoutingOptions {
 viewId?: string;
 path?: string;
 route?: string;
}

export interface Props {
 routing?: RoutingOptions | false;
}

const queryClient = new QueryClient({
 defaultOptions: {
  queries: {
   retry: false
  }
 }
});

window.HTMLElement.prototype.scrollIntoView = function () {
 () => undefined;
};

const customRender: any = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'> & Props) => {
 const { path, route } = options?.routing || {};

 const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
 );

 const router = createMemoryRouter(
  [
   { path: path ?? route?.split('?')[0] ?? '/', element: ui },
   { path: '*', element: '' }
  ],
  { initialEntries: [route ?? '/'], initialIndex: 0 }
 );

 return {
  router,
  queryClient,
  ...render(options?.routing === false ? ui : <RouterProvider router={router} />, { wrapper, ...options })
 };
};

export { customRender as render };
