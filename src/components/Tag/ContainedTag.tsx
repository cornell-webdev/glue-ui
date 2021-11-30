import React from 'react'
import styled from 'styled-components'

interface ContainedTagProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: string
  color?: string
}

export const ContainedTag = ({ children, ...rest }: ContainedTagProps) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

interface IContainerProps {
  background: ContainedTagProps['background']
  color: ContainedTagProps['color']
}

const Container = styled.div<IContainerProps>`
  border-radius: 6px;
  font-size: 1rem;
  font-weight: medium;
  padding: 0.5rem 0.8rem;
  width: fit-content;
  height: fit-content;
  text-align: center;
  color: ${(props) => props.theme.brand[500]};
  border: none;
  background: ${(props) => props.theme.brand[100]};;

  /* background */
  background: ${(props) => props.background && props.background};
  /* color */
  color: ${(props) => props.color && props.color}; 
`

export default ContainedTag
