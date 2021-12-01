import React from 'react'
import styled from 'styled-components'

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string
  defaultBackground?: string
  color?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const TextButton = ({ children, startIcon, endIcon, ...rest }: TextButtonProps) => {
  return (
    <Container startIcon={startIcon} endIcon={endIcon} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </Container>
  )
}

interface IContainerProps {
  background: TextButtonProps['background']
  defaultBackground: TextButtonProps['defaultBackground']
  color: TextButtonProps['color']
  startIcon: TextButtonProps['startIcon']
  endIcon: TextButtonProps['endIcon']
}

const Container = styled.button<IContainerProps>`
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.brand[500]};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  /* startIcon */
  padding-left: ${(props) => props.startIcon && '.3rem;'};

  /* endIcon */
  padding-right: ${(props) => props.endIcon && '.3rem;'};

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

  /* defaultBackground */
  background-color: ${(props) => props.theme.brand[50]};
  background-color: ${(props) => props.defaultBackground && props.defaultBackground};

  /* color */
  color: ${(props) => props.color && props.color};

  &:hover {
    /* background */
    background-color: ${(props) => props.theme.brand[100]};
    background-color: ${(props) => props.background && props.background};
  }

  /* disabled */
  color: ${(props) => props.disabled && props.theme.grey[500]};
  background: ${(props) => props.disabled && 'none'};
  cursor: ${(props) => props.disabled && 'initial'};
`

export default TextButton
