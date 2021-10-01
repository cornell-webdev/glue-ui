import React from 'react'
import styled from 'styled-components'

interface OutlinedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string
  color?: string
}

export const OutlinedButton = ({ children, ...rest }: OutlinedButtonProps) => {
  return <Container {...rest}>{children}</Container>
}

interface IContainerProps {
  background: OutlinedButtonProps['background']
  color: OutlinedButtonProps['color']
}

const Container = styled.button<IContainerProps>`
  border-radius: 8px;
  font-size: 1rem;
  font-weight: medium;
  padding: 0.5rem 0.8rem;
  color: ${(props) => props.theme.brand[500]};
  border: 2px solid ${(props) => props.theme.brand[500]};
  background: inherit;
  cursor: pointer;

  /* color */
  color: ${(props) => props.color && props.color};
  border-color: ${(props) => props.color && props.color};

  &:hover {
    background-color: ${(props) => props.theme.brand[50]};
    background-color: ${(props) => props.background && props.background};
  }
`

export default OutlinedButton
