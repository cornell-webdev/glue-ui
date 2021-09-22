import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContainedButton } from './ContainedButton'

export default {
  title: 'ContainedButton',
  component: ContainedButton,
} as ComponentMeta<typeof ContainedButton>

const Template: ComponentStory<typeof ContainedButton> = (args) => (
  <ContainedButton {...args}>Button</ContainedButton>
)

export const Default = Template.bind({})
Default.args = {
  user: {},
}
