import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tag } from './Tag'

export default {
  title: 'Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => (
  <Tag {...args}>Tag</Tag>
)

export const Default = Template.bind({})
Default.args = {
}
