import React from 'react'
import styled from 'styled-components'

interface ISpanProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  color?: string
  fontWeight?: string
}

export const Span = styled.span<ISpanProps>`
  /* color */
  color: ${(props) => props.color && props.color};

  /* fontWeight */
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
`

export default Span
