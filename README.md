# Glue UI

Glue UI is Cornell WebDev's centralized UI component library. It implements Cornell WebDev's Glue Design System and serves as a single source of truth for React components in our web applications.

Glue UI was built using:

- [Rollup](https://github.com/rollup/rollup)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)

## Development


### Building

```
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run install
npm run storybook
```

To export your Storybook as static files:

```
npm run storybook:export
```


### Generating New Components

```
npm run generate InsertComponentName
```

## Publishing

### Hosting via NPM

```
npm login
npm publish
```

The `"prepublishOnly": "npm run build"` script in `package.json` will execute before publish occurs, ensuring that the changes have compiled into the build directory before being published.


## Usage

```
npm install cornell-glue-ui
```

```TSX
import React from "react";
import { ExampleComponent } from "cornell-glue-ui";

const App = () => (
  <div>
    <h1>Hello I'm consuming the component library</h1>
    <ExampleComponent />
  </div>
);

export default App;
```

