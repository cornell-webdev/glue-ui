import React from 'react'
import styled from 'styled-components'

interface OutlinedTagProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: string
  color?: string
}

export const OutlinedTag = ({ children, ...rest }: OutlinedTagProps) => {
  return <Container {...rest}>{children}</Container>
}

interface IContainerProps {
  background: OutlinedTagProps['background']
  color: OutlinedTagProps['color']
}

const Container = styled.button<IContainerProps>`
  border-radius: 6px;
  font-size: 1rem;
  font-weight: medium;
  padding: 0.5rem 0.8rem;
  color: ${(props) => props.theme.brand[500]};
  border: 2px solid ${(props) => props.theme.brand[500]};
  background: inherit;

  /* color */
  color: ${(props) => props.color && props.color};
  border-color: ${(props) => props.color && props.color};
`

export default OutlinedTag
