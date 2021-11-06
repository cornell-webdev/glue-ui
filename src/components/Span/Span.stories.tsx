import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Span } from './Span'
import { Text } from './../Text/Text'
import theme from './../../theme'

export default {
  title: 'Span',
  component: Span,
} as ComponentMeta<typeof Span>

const Template: ComponentStory<typeof Span> = (args) => (
  <Text>
    This text is <Span color={theme.brand[500]}>colored</Span> and{' '}
    <Span fontWeight={500}>bold</Span>.
  </Text>
)

export const Default = Template.bind({})
Default.args = {}
