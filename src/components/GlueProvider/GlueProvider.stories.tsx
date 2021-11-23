import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GlueProvider } from './GlueProvider'

export default {
  title: 'GlueProvider',
  component: GlueProvider,
} as ComponentMeta<typeof GlueProvider>

const Template: ComponentStory<typeof GlueProvider> = (args) => (
  <GlueProvider {...args}>Glue provider</GlueProvider>
)

export const Default = Template.bind({})
Default.args = {}
