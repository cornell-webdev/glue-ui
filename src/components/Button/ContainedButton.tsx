import React from 'react'
import styled from 'styled-components'

interface ContainedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string
  color?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const ContainedButton = ({
  children,
  startIcon,
  endIcon,
  ...rest
}: ContainedButtonProps) => {
  return (
    <Container startIcon={startIcon} endIcon={endIcon} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </Container>
  )
}

interface IContainerProps {
  background: ContainedButtonProps['background']
  color: ContainedButtonProps['color']
  startIcon: ContainedButtonProps['startIcon']
  endIcon: ContainedButtonProps['endIcon']
}

const Container = styled.button<IContainerProps>`
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.5rem 0.8rem;
  background-color: ${(props) => props.theme.brand[500]};
  color: #fff;
  border: none;
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

  /* background */
  background: ${(props) => props.background && props.background};

  /* color */
  color: ${(props) => props.color && props.color};

  /* disabled */
  background: ${(props) => props.disabled && props.theme.grey[400]};
  cursor: ${(props) => props.disabled && 'initial'};
`

export default ContainedButton
