// Button.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default } from './ProductCard.stories';

it('renders the ProductCard in the default state', () => {
  render(<Default {...Default.args} />);
//   expect(screen.getByRole('button')).toHaveTextContent('Primary');
});