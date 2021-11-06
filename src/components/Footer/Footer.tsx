import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FlexContainer } from './../FlexContainer/FlexContainer'
import { Spacer } from './../Spacer/Spacer'
import { Text } from './../Text/Text'

interface IRoute {
  label: string
  url: string
}

interface INav {
  heading?: string
  routes: IRoute[]
}

interface IFooterProps {
  logo?: React.ReactNode
  navs?: INav[]
}

export const Footer = ({ logo, navs }: IFooterProps) => {
  return (
    <Container>
      <TopRow>
        {logo}
        <Spacer y={4} />
        <NavSection>
          {navs?.map(({ heading, routes }) => (
            <NavContainer key={heading}>
              {heading && (
                <Heading variant='h6' fontWeight={500}>
                  {heading}
                </Heading>
              )}
              <Spacer y={2} />
              {routes?.map(({ label, url }) => (
                <LinkContainer key={`${label}${url}`}>
                  <Link to={url}>
                    <LinkText>{label}</LinkText>
                  </Link>
                </LinkContainer>
              ))}
            </NavContainer>
          ))}
        </NavSection>
      </TopRow>
      <Spacer y={2} />
      <BottomRow>
        <LightText variant='meta1'>© 2021 webdev</LightText>
        <FlexContainer flexDirection='column' alignEnd>
          <LightText variant='meta1'>
            Built with 🖤 by{' '}
            <StyledA href='https://cornellwebdev.com' target='_blank'>
              webdev
            </StyledA>
          </LightText>
          <Spacer y={1} />
          <LightText variant='meta1'>cornellwebdev@gmail.com</LightText>
        </FlexContainer>
      </BottomRow>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.grey[50]};
  padding: 4rem 2rem 2rem 2rem;

  @media (min-width: ${(props) => props.theme.large}) {
    padding: 4rem 4rem 2rem 4rem;
  }
`

const NavSection = styled.div`
  @media (min-width: ${(props) => props.theme.large}) {
    display: flex;
    align-items: flex-start;
  }
`

const NavContainer = styled.div`
  padding: 0.5rem 0 1.5rem 0;

  @media (min-width: ${(props) => props.theme.large}) {
    margin-left: 4rem;
  }
`

const TopRow = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.large}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const LightText = styled(Text)`
  color: ${(props) => props.theme.text.muted};
  font-weight: 500;
  text-align: right;
`

const LinkContainer = styled.div`
  margin-bottom: 0.75rem;
`

const LinkText = styled(Text)`
  display: inline-block;
  color: ${(props) => props.theme.text.light};
`

const Heading = styled(Text)`
  color: ${(props) => props.theme.text.light};
`

const StyledA = styled.a`
  color: ${(props) => props.theme.brand[500]};
  text-decoration: underline;
`

export default Footer
