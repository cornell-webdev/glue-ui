import React from 'react'
import styled, { GlueProvider as StyledGlueProvider } from 'styled-components'
import { theme as defaultTheme } from '../../theme'
import { Normalize } from 'styled-normalize'

interface GlueProviderProps {
  theme?: any
  children?: React.ReactNode
}

export const GlueProvider = ({ theme, children }: GlueProviderProps) => {
  return (
    <Container>
      <Normalize />
      <StyledGlueProvider theme={theme || defaultTheme}>{children}</StyledGlueProvider>
    </Container>
  )
}

const Container = styled.div`
  font-family: sans-serif !important;

  & * {
    box-sizing: border-box !important;
  }
`

export default GlueProvider
