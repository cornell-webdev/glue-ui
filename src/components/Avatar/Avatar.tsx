import React from 'react'
import styled from 'styled-components'
import './Avatar.css'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  avatarColor?: string
}

export const Avatar = ({ name, ...rest }: AvatarProps) => {
  return (
    <NameContainer {...rest}>
      <CircleContainer className='circle' {...rest} >{name[0]}</CircleContainer>
      {name}
    </NameContainer>
  )
}

interface IContainerProps {
  name: AvatarProps['name']
  avatarColor: AvatarProps['color']
}

const NameContainer = styled.div`
line-height: 25px;
font-size: 0.88rem;
border: none;
padding: 1.2rem 0.5rem;
`
const CircleContainer = styled.div<IContainerProps>`
background:${(props) => props.avatarColor}
`

export default Avatar
