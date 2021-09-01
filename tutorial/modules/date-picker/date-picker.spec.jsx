import React from 'react';
import { render } from '@testing-library/react';
import { BasicDatePicker } from './date-picker.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicDatePicker />);
  const rendered = getByText('hello from DatePicker');
  expect(rendered).toBeTruthy();
});

