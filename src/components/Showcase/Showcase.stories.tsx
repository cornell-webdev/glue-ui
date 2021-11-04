import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Showcase } from './Showcase'
import CornletIllust from './illust-cornlet.svg'

export default {
  title: 'Showcase',
  component: Showcase,
} as ComponentMeta<typeof Showcase>

const Template: ComponentStory<typeof Showcase> = () => (
  <Showcase
    overline='Subteam 01'
    name='Cornlet'
    paragraphs={[
      'Cornlet is a sublet marketplace for the Cornell community. Think Airbnb, but for sublets.',
      "We're looking to expand into the housing market in general. New features will include year-lease listings, landlord reviews, and more!",
    ]}
    link='https://www.cornlet.com'
    svg={<img src={CornletIllust} />}
  />
)

export const Default = Template.bind({})
Default.args = {}
