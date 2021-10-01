import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconButton } from './IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

export default {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: <DeleteIcon />,
}
