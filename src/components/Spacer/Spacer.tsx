import styled from 'styled-components'

interface ISpacerProps {
  x?: number | string
  y?: number | string
}

export const Spacer = styled.div<ISpacerProps>`
  width: ${(props) => props.x && (typeof props.x === 'string' ? props.x : `${props.x / 2}rem`)};
  height: ${(props) => props.y && (typeof props.y === 'string' ? props.y : `${props.y / 2}rem`)};
`

export default Spacer
