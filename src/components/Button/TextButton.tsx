import React from 'react'
import { theme } from '../..'
import { CoreButton, IButtonProps } from './Button'

export const TextButton = ({
  children,
  background = theme.brand[50],
  hoverBackground = theme.brand[100],
  color = theme.brand[500],
  startIcon,
  endIcon,
  ...rest
}: IButtonProps) => {
  return (
    <CoreButton
      background={background}
      hoverBackground={hoverBackground}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </CoreButton>
  )
}

export default TextButton
