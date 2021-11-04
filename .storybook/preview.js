import { createBrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
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

const history = createBrowserHistory()

export const decorators = [
  (Story) => (
    <Router history={history}>
      <GlueProvider>
        <Story />
      </GlueProvider>
    </Router>
  ),
];
