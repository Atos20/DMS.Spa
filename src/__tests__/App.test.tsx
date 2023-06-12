/**
 * @jest-environment jsdom
 */

import { BrowserRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import App from '../App';

jest.mock('../routes/router', () => ({
  baseRouter: {
    baseURL: 'your-mock-base-url',
    responseType: 'json',
  },
}));

describe('<App />', () => {
  it('renders without errors', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
