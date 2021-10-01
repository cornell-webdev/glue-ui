import React from 'react';
import { GlueProvider } from './../src/components/GlueProvider/GlueProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <GlueProvider>
      <Story />
    </GlueProvider>
  ),
];
