// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// eslint-disable-next-line
import '@testing-library/jest-dom';
import { configure as configureRtl } from '@testing-library/react';
import 'jest-styled-components';
import { setLogger } from 'react-query';
import Schema from 'async-validator';


configureRtl({ defaultHidden: true });

// eslint-disable-next-line
(Schema as any).warning = () => void {};

// eslint-disable-next-line
beforeAll(() => {});

setLogger({
  log: () => void {},
  warn: () => void {},
  error: () => void {}
});

jest.setTimeout(20000);