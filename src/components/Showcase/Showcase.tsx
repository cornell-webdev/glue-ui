import React from 'react'
import useIsDesktop from './../useIsDesktop/useIsDesktop'
import styled from 'styled-components'
import FlexContainer from './../FlexContainer/FlexContainer'
import Button from './../Button/Button'
import Text from './../Text/Text'
import FadeOnView from './../FadeOnView/FadeOnView'
import Spacer from './../Spacer/Spacer'
import theme from '../../theme'

export interface IShowcaseProps {
  overline?: string
  name: string
  svg: React.ReactNode
  paragraphs?: string[]
  link?: string
  buttonText?: string
}

export const Showcase = ({
  overline,
  name,
  paragraphs,
  link,
  svg,
  buttonText = 'View project',
}: IShowcaseProps) => {
  const isDesktop = useIsDesktop()

  return (
    <Section>
      <FlexContainer justifySpaceAround alignCenter>
        <FadeOnView>
          {overline && <Overline variant='h4'>{overline}</Overline>}
          <Text variant='h1' color={theme.brand[500]}>
            {name}
          </Text>
          <Spacer y={3} />
          {paragraphs?.map((paragraph) => (
            <>
              <LeftContainer>
                <Text fontWeight={500}>{paragraph}</Text>
              </LeftContainer>
              <Spacer y={1.5} />
            </>
          ))}
          <Spacer y={2.5} />
          {link && (
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <Button variant='outlined'>{buttonText}</Button>
            </a>
          )}
          <Spacer y={4} />
          {!isDesktop && <FlexContainer justifyCenter>{svg}</FlexContainer>}
        </FadeOnView>
        <InnerDivider />
        {isDesktop && (
          <FlexContainer justifyCenter>
            <FadeOnView>{svg}</FadeOnView>
          </FlexContainer>
        )}
      </FlexContainer>
    </Section>
  )
}

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 98vh;
  padding: 3rem 1rem;

  & svg {
    height: 80%;
    width: 80%;
  }

  @media (min-width: ${(props) => props.theme.large}) {
    & svg {
      height: 40vh;
      width: 40vh;
    }
  }
`

const InnerDivider = styled.div`
  width: 10vw;
`

const Overline = styled(Text)`
  font-weight: bold;
  color: ${(props) => props.theme.text.muted};
`

const LeftContainer = styled.div`
  @media (min-width: ${(props) => props.theme.large}) {
    width: 30vw;
  }
`

export default Showcase
