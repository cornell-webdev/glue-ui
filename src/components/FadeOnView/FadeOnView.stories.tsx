import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FadeOnView } from './FadeOnView'
import { Text } from './../Text/Text'

export default {
  title: 'FadeOnView',
  component: FadeOnView,
} as ComponentMeta<typeof FadeOnView>

const Template: ComponentStory<typeof FadeOnView> = (args) => (
  <FadeOnView {...args}>
    <Text>Paragraph 1</Text>
    <Text>Paragraph 2</Text>
    <Text>Paragraph 3</Text>
    <Text>Paragraph 4</Text>
  </FadeOnView>
)

export const Default = Template.bind({})
Default.args = {}
