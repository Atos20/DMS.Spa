/**
 * @jest-environment jsdom
 */

import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { School } from '../App';
import { schoolsDumyData } from '../dummyData/schoolsData';
import { Home } from '../pages/Home';

jest.mock('../routes/router', () => ({
  baseRouter: {
    baseURL: 'your-mock-base-url',
    responseType: 'json',
  },
}));

describe('Test Home componetn', () => {
  let dummyData: School[];
  beforeAll(() => {
    dummyData = schoolsDumyData;
  });

  it('renders without errors', () => {
    // Arrange

    // Act
    render(
      <BrowserRouter>
        <Home schools={dummyData} handleSchoolChange={jest.fn()} />
      </BrowserRouter>
    );
    // Assert
    // should it only be one parent componetn
    const schoolContainers = screen.getAllByTestId('school-container');
    expect(schoolContainers).toHaveLength(1);

    // There should only be one card per object in the array
    const schoolCards = screen.getAllByTestId('school-card');
    expect(schoolCards).toHaveLength(dummyData.length);
  });
});
