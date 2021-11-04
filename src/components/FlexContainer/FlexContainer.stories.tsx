import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FlexContainer } from './FlexContainer'

export default {
  title: 'FlexContainer',
  component: FlexContainer,
} as ComponentMeta<typeof FlexContainer>

const Template: ComponentStory<typeof FlexContainer> = (args) => (
  <FlexContainer {...args}>Button</FlexContainer>
)

export const Default = Template.bind({})
Default.args = {
}
