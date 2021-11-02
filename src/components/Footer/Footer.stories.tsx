import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Footer } from './Footer'
import styled from 'styled-components'
import { Text } from '../..'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <Footer {...args} />
    </Router>
  )
}

export const Default = Template.bind({})
Default.args = {
  logo: (
    <Text variant='h5' fontWeight={500}>
      Logo
    </Text>
  ),
  navs: [
    {
      heading: 'Organization',
      routes: [
        {
          label: 'Apply',
          url: '/apply',
        },
      ],
    },
    {
      heading: 'Products',
      routes: [
        {
          label: 'Glue',
          url: '/products/glue',
        },
        {
          label: 'RSVP',
          url: '/products/rsvp',
        },
      ],
    },
  ],
}

const MobileContainer = styled.div`
  width: 375px;
`
