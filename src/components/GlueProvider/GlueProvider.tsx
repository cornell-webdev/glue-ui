import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme as defaultTheme } from '../../theme'
import { Normalize } from 'styled-normalize'

interface GlueProviderProps {
  theme?: any
  children?: React.ReactNode
}

export const GlueProvider = ({ theme, children }: GlueProviderProps) => {
  return (
    <Container>
      {/* <Normalize /> */}
      <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>
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
