module.exports = (componentName) => ({
  content: `import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ${componentName} } from './${componentName}'

export default {
  title: '${componentName}',
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>

const Template: ComponentStory<typeof ${componentName}> = (args) => (
  <${componentName} {...args}>Button</${componentName}>
)

export const Default = Template.bind({})
Default.args = {
}
`,
  extension: `.stories.tsx`
});
