import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio sections', () => {
  render(<App />);
  expect(screen.getByText(/about me/i)).toBeInTheDocument();
  expect(screen.getByText(/early experiments/i)).toBeInTheDocument();
  expect(screen.getByText('Stadium Admin Dashboard')).toBeInTheDocument();
  expect(screen.getByText('Not live yet')).toBeInTheDocument();
  expect(screen.getByText('TypeScript (TSX)')).toBeInTheDocument();
  expect(screen.getAllByText('JavaScript (JSX)')).toHaveLength(4);
  expect(screen.getByText(/online shop for browsing products/i)).toBeInTheDocument();
  expect(screen.getByText(/connectivity, infrastructure, and managed technology services/i)).toBeInTheDocument();
  expect(screen.getByText(/software solutions that help african businesses/i)).toBeInTheDocument();
  expect(screen.getByText(/business management platform for accounting/i)).toBeInTheDocument();
  expect(screen.queryByText('Screenshot coming soon')).not.toBeInTheDocument();
  expect(screen.getByAltText(/stadium admin dashboard showing ticket sales/i)).toBeInTheDocument();
  expect(screen.getByAltText(/promall shop ecommerce homepage/i)).toBeInTheDocument();
  expect(screen.getByAltText(/proxynet communications homepage/i)).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'Visit live site' })).toHaveLength(4);
});
