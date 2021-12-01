import React from 'react'
import styled from 'styled-components'

interface OutlinedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string
  color?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const OutlinedButton = ({ children, startIcon, endIcon, ...rest }: OutlinedButtonProps) => {
  return (
    <Container startIcon={startIcon} endIcon={endIcon} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </Container>
  )
}

interface IContainerProps {
  background: OutlinedButtonProps['background']
  color: OutlinedButtonProps['color']
  startIcon: OutlinedButtonProps['startIcon']
  endIcon: OutlinedButtonProps['endIcon']
}

const Container = styled.button<IContainerProps>`
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.5rem 0.8rem;
  color: ${(props) => props.theme.brand[500]};
  border: 2px solid ${(props) => props.theme.brand[500]};
  background: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;

  /* startIcon */
  padding-left: ${(props) => props.startIcon && '.6rem;'};

  /* endIcon */
  padding-right: ${(props) => props.endIcon && '.6rem;'};

  & svg {
    height: 20px;
    width: 20px;

    /* color */
    fill: ${(props) => props.color && props.color};

    /* startIcon */
    margin-right: ${(props) => props.startIcon && '.3rem;'};

    /* endIcon */
    margin-left: ${(props) => props.endIcon && '.3rem;'};
  }

  /* color */
  color: ${(props) => props.color && props.color};
  border-color: ${(props) => props.color && props.color};

  &:hover {
    background-color: ${(props) => props.theme.brand[50]};
    background-color: ${(props) => props.background && props.background};
  }

  /* disabled */
  border-color: ${(props) => props.disabled && props.theme.grey[400]};
  color: ${(props) => props.disabled && props.theme.grey[400]};
  background-color: ${(props) => props.disabled && 'fff'};
  cursor: ${(props) => props.disabled && 'initial'};
`

export default OutlinedButton
