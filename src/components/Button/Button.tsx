import React from 'react'
import ContainedButton from './ContainedButton'
import OutlinedButton from './OutlinedButton'
import TextButton from './TextButton'
import styled from 'styled-components'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'text' | 'outlined'
  size?: 'default' | 'small'
  background?: string
  hoverBackground?: string
  color?: string
  disabled?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const Button = ({ children, variant = 'contained', ...rest }: IButtonProps) => {
  switch (variant) {
    case 'contained':
      return (
        <ContainedButton variant={variant} {...rest}>
          {children}
        </ContainedButton>
      )

    case 'text':
      return (
        <TextButton variant={variant} {...rest}>
          {children}
        </TextButton>
      )

    case 'outlined':
      return (
        <OutlinedButton variant={variant} {...rest}>
          {children}
        </OutlinedButton>
      )
  }
}

export interface IButtonCoreProps {
  variant: IButtonProps['variant']
  size: IButtonProps['size']
  background: IButtonProps['background']
  hoverBackground: IButtonProps['hoverBackground']
  color: IButtonProps['color']
  startIcon: IButtonProps['startIcon']
  endIcon: IButtonProps['endIcon']
}

export const CoreButton = styled.button<IButtonCoreProps>`
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0.3rem 0.8rem;
  font-size: 1rem;

  /* border */
  border: 2px solid transparent;
  border-color: ${(props) => props.variant === 'contained' && props.background};
  border-color: ${(props) => props.variant === 'outlined' && props.color};
  border-color: ${(props) => props.variant === 'text' && props.background};

  /* size === 'small' */
  font-size: ${(props) => props.size === 'small' && '0.875rem'};
  padding: ${(props) => props.size === 'small' && '0.2rem 0.6rem'};
  padding: ${(props) => props.size === 'small' && props.variant === 'text' && '0.2rem 0.3rem'};

  /* color */
  color: ${(props) => props.color && props.color};

  /* background */
  background: ${(props) => props.background && props.background};

  /* startIcon */
  padding-left: ${(props) => props.startIcon && '.6rem;'};
  padding-left: ${(props) => props.startIcon && props.size === 'small' && '.4rem;'};
  padding-left: ${(props) =>
    props.startIcon && props.size === 'small' && props.variant === 'text' && '.25rem;'};

  /* endIcon */
  padding-right: ${(props) => props.endIcon && '.6rem;'};
  padding-right: ${(props) => props.endIcon && props.size === 'small' && '.4rem;'};
  padding-right: ${(props) =>
    props.endIcon && props.size === 'small' && props.variant === 'text' && '.25rem;'};

  & svg {
    height: 20px;
    width: 20px;

    /* size === 'small' */
    height: ${(props) => props.size === 'small' && '18px'};
    width: ${(props) => props.size === 'small' && '18px'};

    /* color */
    fill: ${(props) => props.color && props.color};

    /* disabled */
    fill: ${(props) => props.disabled && props.theme.text.muted};

    /* startIcon */
    margin-right: ${(props) => props.startIcon && '.4rem;'};
    margin-right: ${(props) => props.startIcon && props.size === 'small' && '.25rem;'};

    /* endIcon */
    margin-left: ${(props) => props.endIcon && '.4rem;'};
    margin-left: ${(props) => props.endIcon && props.size === 'small' && '.25rem;'};
  }

  /* disabled */
  color: ${(props) => props.disabled && props.theme.text.muted};
  background: ${(props) => props.disabled && props.theme.grey[200]};
  border-color: ${(props) => props.disabled && props.theme.grey[200]};
  cursor: ${(props) => props.disabled && 'initial'};
  background: ${(props) =>
    props.disabled && props.variant === 'outlined' && props.theme.background.default};

  @media (min-width: ${(props) => props.theme.small}) {
    &:hover {
      /* hoverBackground */
      background-color: ${(props) => props.hoverBackground && props.hoverBackground};
      border-color: ${(props) =>
        !props.disabled && props.variant === 'contained' && props.hoverBackground};
      border-color: ${(props) =>
        !props.disabled && props.variant === 'text' && props.hoverBackground};

      /* disabled */
      background-color: ${(props) => props.disabled && props.theme.grey[200]};
      background: ${(props) =>
        props.disabled && props.variant === 'outlined' && props.theme.background.default};
    }
  }
`

export default Button
