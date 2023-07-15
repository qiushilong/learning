import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// get 异常 test 直接判错
// query 异常，要自己判断

test('should show full name when type', () => {
  // given
  const name = 'John Doe'

  // when
  render(<App />)
  userEvent.type(screen.getByPlaceholderText('Type your name'), name)

  // then
  expect(screen.getByText(name)).toBeInTheDocument()
});
