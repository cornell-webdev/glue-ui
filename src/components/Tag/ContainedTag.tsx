import React from 'react'
import styled from 'styled-components'

interface ContainedTagProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: string
  color?: string
}

export const ContainedTag = ({ children, ...rest }: ContainedTagProps) => {
  return (
    <Container {...rest}>
      <b>{children}</b>
    </Container>
  )
}

interface IContainerProps {
  background?: ContainedTagProps['background']
  color?: ContainedTagProps['color']
}

const Container = styled.button<IContainerProps>`
  border-radius: 20px;
  font-size: 12px;
  font-weight: medium;
  padding: 4px 11px;
  text-align: center;
  color: ${(props) => props.theme.brand[500]};
  border: 2px solid ${(props) => props.theme.brand[100]};
  background: ${(props) => props.theme.brand[100]};

  /* background */
  background: ${(props) => props.background && props.background};
  border-color: ${(props) => props.background && props.background};

  /* color */
  color: ${(props) => props.color && props.color};
`

export default ContainedTag
