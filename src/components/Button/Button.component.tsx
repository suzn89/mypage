// src/components/Button.tsx
import React from 'react';
import styled from 'styled-components';

// 버튼 스타일 정의
const StyledButton = styled.button<{
  variant?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) =>
    size === 'small'
      ? '4px 8px'
      : size === 'large'
      ? '12px 24px'
      : '8px 16px'};
  font-size: ${({ size }) =>
    size === 'small' ? '12px' : size === 'large' ? '16px' : '14px'};
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  background-color: ${({ variant, backgroundColor }) =>
    backgroundColor || (variant ? '#007bff' : '#6c757d')};
  color: ${({ variant }) => (variant ? '#fff' : '#000')};

  &:hover {
    background-color: ${({ variant }) => (variant ? '#0056b3' : '#5a6268')};
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

// 버튼 컴포넌트
export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  variant?: string;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  disabled?: boolean;
  children?: string;
}

const Button = ({
  variant = 'primary',
  backgroundColor,
  size = 'medium',  
  onClick,
  disabled = false,
  children
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      backgroundColor={backgroundColor}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
