import React from 'react'
import { theme } from '../..'
import { CoreButton, IButtonProps } from './Button'

export const OutlinedButton = ({
  children,
  background = theme.background.default,
  hoverBackground = theme.brand[50],
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

export default OutlinedButton
