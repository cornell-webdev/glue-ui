import React from 'react'
import styled from 'styled-components'

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string
  color?: string
}

export const TextButton = ({ children, ...rest }: TextButtonProps) => {
  return <Container {...rest}>{children}</Container>
}

interface IContainerProps {
  background: TextButtonProps['background']
  color: TextButtonProps['color']
}

const Container = styled.button<IContainerProps>`
  border-radius: 8px;
  font-size: 1rem;
  font-weight: medium;
  padding: 0.5rem 0.8rem;
  color: ${(props) => props.theme.brand[500]};
  border: none;
  background: inherit;
  cursor: pointer;

  /* color */
  color: ${(props) => props.color && props.color};

  &:hover {
    background-color: ${(props) => props.theme.brand[50]};
    background-color: ${(props) => props.background && props.background};
  }

  /* disabled */
  color: ${(props) => props.disabled && props.theme.grey[500]};
  background: ${(props) => props.disabled && 'none'};
  cursor: ${(props) => props.disabled && 'initial'};
`

export default TextButton
