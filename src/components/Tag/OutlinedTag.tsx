import React from 'react'
import styled from 'styled-components'

interface OutlinedTagProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: string
  color?: string
}

export const OutlinedTag = ({ children, ...rest }: OutlinedTagProps) => {
  return <Container {...rest}><b>{children}</b></Container>
}

interface IContainerProps {
  background?: OutlinedTagProps['background']
  color?: OutlinedTagProps['color']
}

const Container = styled.button<IContainerProps>`
  border-radius: 20px;
  font-size: 12px;
  font-weight: medium;
  padding: 4px 11px;
  color: ${(props) => props.theme.brand[500]};
  border: 2px solid ${(props) => props.theme.brand[500]};
  background: inherit;

  /* color */
  color: ${(props) => props.color && props.color};
  border-color: ${(props) => props.color && props.color};
`

export default OutlinedTag
