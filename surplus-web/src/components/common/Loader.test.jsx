import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  test('renders loader component', () => {
    render(<Loader />);
    // You can test for the loader element using test-id
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });
}); 