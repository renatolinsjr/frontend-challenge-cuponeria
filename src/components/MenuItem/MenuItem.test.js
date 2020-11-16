// Button.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Selected, Unselected } from './MenuItem.stories';

it('renders the MenuItem in the selected state', () => {
  render(<Selected {...Selected.args} />);
    expect(screen.getByRole('button')).toHaveTextContent('Hello');
});

it('renders the MenuItem in the unselected state', () => {
  render(<Unselected {...Unselected.args} />);
  expect(screen.getByRole('button')).toHaveTextContent('Hello');
});