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
    <StyledTextButton startIcon={startIcon} endIcon={endIcon} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </StyledTextButton>
  )
}

interface StyledTextButtonProps {
  background: TextButtonProps['background']
  defaultBackground: TextButtonProps['defaultBackground']
  color: TextButtonProps['color']
  startIcon: TextButtonProps['startIcon']
  endIcon: TextButtonProps['endIcon']
}

const StyledTextButton = styled.button<StyledTextButtonProps>`
  border-radius: 8px;
  font-size: 0.875rem;
  padding: 0.4rem 0.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.brand[500]};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.brand[50]};

  /* startIcon */
  padding-left: ${(props) => props.startIcon && '.3rem;'};
  padding-right: ${(props) => props.startIcon && '.45rem;'};

  /* endIcon */
  padding-right: ${(props) => props.endIcon && '.3rem;'};
  padding-left: ${(props) => props.endIcon && '.45rem;'};

  & svg {
    height: 18px;
    width: 18px;

    /* color */
    fill: ${(props) => props.color && props.color};

    /* startIcon */
    margin-right: ${(props) => props.startIcon && '.3rem;'};

    /* endIcon */
    margin-left: ${(props) => props.endIcon && '.3rem;'};
  }

  /* defaultBackground */
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
