import React from 'react'
import { Button } from './../Button/Button'
import { showToast } from './Toast'

export default {
  title: 'Toast',
}

const Template = (args) => <Button {...args}>Button</Button>

export const Default = Template.bind({})
Default.args = {
  onClick: () =>
    showToast({
      id: 'test-toast',
      variant: 'info',
      msg: 'This is a test toast',
    }),
}
