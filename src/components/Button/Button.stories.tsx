import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'
import DeleteIcon from '@mui/icons-material/Delete'
import styled from 'styled-components'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Container>
    <div>
      <Button {...args}>Button</Button>
    </div>
    <div>
      <Button startIcon={<DeleteIcon />} {...args}>
        Button
      </Button>
    </div>
    <div>
      <Button endIcon={<DeleteIcon />} {...args}>
        Button
      </Button>
    </div>
  </Container>
)

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

const Container = styled.div`
  & > div {
    margin-bottom: 1rem;
  }
`
