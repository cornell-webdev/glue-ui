import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>

export const Default = Template.bind({})
Default.args = {}

export const ContainedButton = Template.bind({})
ContainedButton.args = {
  variant: 'contained',
}

export const TextButton = Template.bind({})
TextButton.args = {
  variant: 'text',
}

export const OutlinedButton = Template.bind({})
OutlinedButton.args = {
  variant: 'outlined',
}
