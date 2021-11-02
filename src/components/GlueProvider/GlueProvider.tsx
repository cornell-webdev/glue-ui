import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme as defaultTheme } from '../../theme'
import './normalize.css'

interface GlueProviderProps {
  theme?: any
  children?: React.ReactNode
}

export const GlueProvider = ({ theme, children }: GlueProviderProps) => {
  return (
    <Container>
      <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>
    </Container>
  )
}

const Container = styled.div``

export default GlueProvider
