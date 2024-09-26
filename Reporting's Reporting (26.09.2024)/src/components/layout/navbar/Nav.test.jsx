import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For the extended matchers
import Nav from './Nav'; // Adjust the import path as needed

describe('Nav Component', () => {
  test('renders Nav component with correct elements', () => {
    render(<Nav />);
    
    // Check if the header is in the document
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    
    // Check if the sustainability program text is in the document
    const textElement = screen.getByText(/SUSTAINABILITY PROGRAM/i);
    expect(textElement).toBeInTheDocument();
    
    // Check if the button with UserOutlined icon is in the document
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    
    // Check if the button has correct classes and content
    expect(buttonElement).toHaveClass('flex-end');
    expect(buttonElement).toHaveClass('h-[48px]');
    expect(buttonElement).toHaveClass('w-[48px]');
    expect(buttonElement).toHaveClass('rounded-full');
    expect(buttonElement).toHaveClass('text-[25px]');
    expect(buttonElement).toHaveClass('bg-[white]');
    expect(buttonElement).toHaveClass('text-[black]');
    
    // Check if the UserOutlined icon is inside the button
    const iconElement = screen.getByRole('img');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('text-black');
  });
});
