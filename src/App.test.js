// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DataChain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DataChain/i);
    expect(titleElement).toBeInTheDocument();
});
