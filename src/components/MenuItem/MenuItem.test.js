// Button.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Detail, Selected, Unselected } from './MenuItem.stories';

it('renders the MenuItem in the selected state', () => {
  render(<Selected {...Selected.args} />);
    expect(screen.getByRole('button')).toHaveTextContent('Default');
});

it('renders the MenuItem in the unselected state', () => {
  render(<Unselected {...Unselected.args} />);
  expect(screen.getByRole('button')).toHaveTextContent('Default');
});

it('renders the MenuItem in the detail state', () => {
  render(<Detail {...Detail.args} />);
  expect(screen.getByRole('button')).toHaveTextContent('VOLTAR');
});