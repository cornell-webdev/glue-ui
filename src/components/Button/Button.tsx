import React from 'react'
import ContainedButton from './ContainedButton'
import OutlinedButton from './OutlinedButton'
import TextButton from './TextButton'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string
  color?: string
  variant?: 'contained' | 'text' | 'outlined'
  disabled?: boolean
}

export const Button = ({ children, variant = 'contained', ...rest }: ButtonProps) => {
  switch (variant) {
    case 'contained':
      return <ContainedButton {...rest}>{children}</ContainedButton>

    case 'text':
      return <TextButton {...rest}>{children}</TextButton>

    case 'outlined':
      return <OutlinedButton {...rest}>{children}</OutlinedButton>
  }
}

export default Button
