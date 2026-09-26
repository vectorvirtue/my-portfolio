import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio sections', () => {
  render(<App />);
  expect(screen.getByText(/about me/i)).toBeInTheDocument();
  expect(screen.getByText(/selected projects/i)).toBeInTheDocument();
});
