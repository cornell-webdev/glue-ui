import React from 'react'
import styled from 'styled-components'

interface ContainedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string
  color?: string
}

export const ContainedButton = ({ children, ...rest }: ContainedButtonProps) => {
  return <Container {...rest}>{children}</Container>
}

interface IContainerProps {
  background: ContainedButtonProps['background']
  color: ContainedButtonProps['color']
}

const Container = styled.button<IContainerProps>`
  border-radius: 8px;
  font-size: 1rem;
  font-weight: medium;
  padding: 0.5rem 0.8rem;
  background-color: ${(props) => props.theme.brand[500]};
  color: #fff;
  border: none;

  /* background */
  background: ${(props) => props.background && props.background};

  /* color */
  color: ${(props) => props.color && props.color};
`

export default ContainedButton
