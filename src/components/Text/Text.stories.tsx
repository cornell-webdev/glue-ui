import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from './Text'

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
)

export const Heading1 = Template.bind({})
Heading1.args = {
  variant: 'h1',
}

export const Heading2 = Template.bind({})
Heading2.args = {
  variant: 'h2',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  variant: 'h3',
}

export const Heading4 = Template.bind({})
Heading4.args = {
  variant: 'h4',
}

export const Heading5 = Template.bind({})
Heading5.args = {
  variant: 'h5',
}

export const Heading6 = Template.bind({})
Heading6.args = {
  variant: 'h6',
}

export const P = Template.bind({})
P.args = {
  variant: 'p',
}

export const Meta1 = Template.bind({})
Meta1.args = {
  variant: 'meta1',
}

export const Meta2 = Template.bind({})
Meta2.args = {
  variant: 'meta2',
}
