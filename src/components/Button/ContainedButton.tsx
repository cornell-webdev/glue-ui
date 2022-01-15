import React from 'react'
import { theme } from '../..'
import { CoreButton, IButtonProps } from './Button'

export const ContainedButton = ({
  children,
  background = theme.brand[500],
  hoverBackground = theme.brand[600],
  color = theme.background.default,
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
export default ContainedButton
