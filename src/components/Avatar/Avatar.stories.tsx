import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from './Avatar'
import styled from 'styled-components'

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Container>
    <div>
      <Avatar {...args} />
    </div>
    <div>
      <Avatar {...args} underline='abc123@gmail.com' />
    </div>
    <div>
      <Avatar name='super long name that should formatsuper long name that should formatsuper long name that should formatsuper long name that should formatsuper long name that should format' />
    </div>
    <div>
      <Avatar
        name='super long name that should formatsuper long name that should formatsuper long name that should formatsuper long name that should formatsuper long name that should format'
        underline='abc123@gmail.com'
      />
    </div>
  </Container>
)

export const Default = Template.bind({})
Default.args = {
  name: 'Avatar',
}

const Container = styled.div`
  & > * {
    margin-bottom: 1rem;
  }
`
