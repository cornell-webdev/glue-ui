import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'
import DeleteIcon from '@mui/icons-material/Delete'
import styled from 'styled-components'
import { Text } from '../..'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Container>
    <Text>Size: small</Text>
    <div>
      <Button {...args} size='small'>
        Button
      </Button>
    </div>
    <div>
      <Button {...args} startIcon={<DeleteIcon />} size='small'>
        Button
      </Button>
    </div>
    <div>
      <Button {...args} endIcon={<DeleteIcon />} size='small'>
        Button
      </Button>
    </div>
    <Text>Size: default</Text>
    <div>
      <Button {...args}>Button</Button>
    </div>
    <div>
      <Button {...args} startIcon={<DeleteIcon />}>
        Button
      </Button>
    </div>
    <div>
      <Button {...args} endIcon={<DeleteIcon />}>
        Button
      </Button>
    </div>
    <Text>Disabled: true</Text>
    <div>
      <Button {...args} disabled>
        Button
      </Button>
    </div>
    <div>
      <Button {...args} disabled startIcon={<DeleteIcon />}>
        Button
      </Button>
    </div>
    <div>
      <Button {...args} disabled endIcon={<DeleteIcon />}>
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
  & > * {
    margin-bottom: 1rem;
  }
`
