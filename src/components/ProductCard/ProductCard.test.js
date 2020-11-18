// Button.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Discover } from './ProductCard.stories';

it('renders the ProductCard in the discover state', () => {
  render(<Discover {...Discover.args} />);
  expect(screen.getByText('SHOP')).toHaveTextContent('SHOP');
});