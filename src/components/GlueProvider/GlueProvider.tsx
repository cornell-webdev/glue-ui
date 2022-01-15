import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme as defaultTheme } from '../../theme'
import './sf-pro.css'
import './normalize.css'
import ScrollToTop from './ScrollToTop'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

interface GlueProviderProps {
  overrideTheme?: any
  children?: React.ReactNode
}

export const GlueProvider = ({ overrideTheme, children }: GlueProviderProps) => {
  return (
    <>
      <ThemeProvider theme={{ ...defaultTheme, ...overrideTheme }}>
        <Container>
          <PerfectScrollbar>{children}</PerfectScrollbar>
          <ScrollToTop />
        </Container>
      </ThemeProvider>
    </>
  )
}

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.background.default};

  @media (min-width: ${(props) => props.theme.tablet}) {
    width: initial;
  }
`

export default GlueProvider
