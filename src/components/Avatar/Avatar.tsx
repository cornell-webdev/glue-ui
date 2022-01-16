import React from 'react'
import styled from 'styled-components'
import { Text, theme } from '../..'

interface IAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  underline?: string
  avatarColor?: string
}

export const Avatar = ({ name, underline, ...rest }: IAvatarProps) => {
  if (name?.length === 0) return null

  return (
    <NameContainer {...rest} underline={underline}>
      <CircleContainer {...rest}>{name[0]}</CircleContainer>
      <TextContainer>
        <StyledText underline={underline} variant='meta1' maxLines={1}>
          {name}
        </StyledText>
        {underline && (
          <StyledText underline={underline} variant='meta1' color={theme.text.muted}>
            {underline}
          </StyledText>
        )}
      </TextContainer>
    </NameContainer>
  )
}

const NameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 300px;

  /* underline */
  align-items: ${(props) => props.underline && `center`};
`

interface ITextContainerProps {
  name: IAvatarProps['name']
}

const TextContainer = styled.div<ITextContainerProps>`
  padding-top: 0.15rem;

  /* underline */
  padding-top: ${(props) => props.underline && `0`};
`

const StyledText = styled(Text)`
  /* underline */
  line-height: ${(props) => props.underline && `1.1`};
`

interface ICircleContainerProps {
  name: IAvatarProps['name']
  avatarColor: IAvatarProps['color']
}

const CircleContainer = styled.div<ICircleContainerProps>`
  width: 25px;
  height: 25px;
  line-height: 25px;
  color: #424242;
  border-radius: 50%;
  background: #ffe092;
  background: ${(props) => props.avatarCozlor};
  margin-right: 8px;
  text-align: center;
  font-size: 0.88rem;
  font-weight: medium;
  flex-shrink: 0;
`

export default Avatar
