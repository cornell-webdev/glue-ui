import React from 'react'
import ContainedTag from './ContainedTag'
import OutlinedTag from './OutlinedTag'

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: string
  color?: string
  variant?: 'contained' | 'outlined'
  disabled?: boolean
}

export const Tag = ({ children, variant = 'contained', ...rest }: TagProps) => {
  switch (variant) {
    case 'contained':
      return <ContainedTag {...rest}>{children}</ContainedTag>

    case 'outlined':
      return <OutlinedTag {...rest}>{children}</OutlinedTag>
  }
}

export default Tag
