import React from 'react'
import styled from 'styled-components'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  color?: string
}

export const IconButton = ({ icon, color, ...rest }: IconButtonProps) => {
  return (
    <StyledIconButton {...rest} color={color}>
      {icon}
    </StyledIconButton>
  )
}

interface IStyledIconButtonProps {
  color: IconButtonProps['color']
}

const StyledIconButton = styled.button<IStyledIconButtonProps>`
  border: none;
  background: inherit;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.grey[50]};
  }

  & svg {
    fill: ${(props) => props.theme.grey[700]} !important;

    // color
    fill: ${(props) => props.color && `${props.color} !important`};
  }
`

export default IconButton
