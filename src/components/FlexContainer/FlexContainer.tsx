import styled from 'styled-components'

interface FlexContainerProps {
  justifyStart?: boolean
  justifySpaceBetween?: boolean
  justifySpaceAround?: boolean
  justifyCenter?: boolean
  justifyEnd?: boolean
  alignStart?: boolean
  alignCenter?: boolean
  alignEnd?: boolean
  flexDirection?: 'column' | 'row'
  wrap?: boolean
  fullWidth?: boolean
  fullHeight?: boolean
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;

  // justifyStart
  justify-content: ${(props) => props.justifyStart && 'flex-start'};

  // justifySpaceBetween
  justify-content: ${(props) => props.justifySpaceBetween && 'space-between'};

  // justifySpaceAround
  justify-content: ${(props) => props.justifySpaceBetween && 'space-around'};

  // justifyCenter
  justify-content: ${(props) => props.justifyCenter && 'center'};

  // justifyEnd
  justify-content: ${(props) => props.justifyEnd && 'flex-end'};

  // alignStart
  align-items: ${(props) => props.alignStart && 'flex-start'};

  // alignCenter
  align-items: ${(props) => props.alignCenter && 'center'};

  // alignEnd
  align-items: ${(props) => props.alignEnd && 'flex-end'};

  // flexDirection
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};

  // wrap
  flex-wrap: ${(props) => props.wrap && 'wrap'};

  // fullWidth
  width: ${(props) => props.fullWidth && '100%'};

  // fullHeight
  height: ${(props) => props.fullHeight && '100%'};
`

export default FlexContainer
