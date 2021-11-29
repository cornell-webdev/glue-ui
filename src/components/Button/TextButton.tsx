import React from 'react'
import styled from 'styled-components'

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string
  defaultBackground?: string
  color?: string
}

export const TextButton = ({ children, ...rest }: TextButtonProps) => {
  return <Container {...rest}>{children}</Container>
}

interface IContainerProps {
  background: TextButtonProps['background']
  defaultBackground: TextButtonProps['defaultBackground']
  color: TextButtonProps['color']
}

const Container = styled.button<IContainerProps>`
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  color: ${(props) => props.theme.brand[500]};
  border: none;
  cursor: pointer;

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
