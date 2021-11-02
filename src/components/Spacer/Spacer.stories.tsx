import React from 'react'
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Spacer } from './Spacer'
import { Text } from './../Text/Text'

export default {
  title: 'Spacer',
  component: Spacer,
} as ComponentMeta<typeof Spacer>

const Template: ComponentStory<typeof Spacer> = (args) => (
  <>
    <StyledSpacer y={1}>
      <Text>1 space</Text>
    </StyledSpacer>
    <StyledSpacer y={2}>
      <Text>2 space</Text>
    </StyledSpacer>
    <StyledSpacer y={3}>
      <Text>3 space</Text>
    </StyledSpacer>
    <StyledSpacer y={4}>
      <Text>4 space</Text>
    </StyledSpacer>
  </>
)

export const Default = Template.bind({})
Default.args = {}

const StyledSpacer = styled(Spacer)`
  background: ${(props) => props.theme.brand[50]};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  border-radius: 8px;

  & > p {
    margin: 0;
  }
`
