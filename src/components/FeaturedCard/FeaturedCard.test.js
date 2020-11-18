// Button.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default } from './FeaturedCard.stories';

it('renders the FeaturedCard in the default state', () => {
  render(<Default {...Default.args} />);
  expect(screen.getByText('Mens Casual Slim Fit')).toHaveTextContent('Mens Casual Slim Fit');
});