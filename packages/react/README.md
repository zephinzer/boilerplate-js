# React Boilerplate

## Usage Overview

1. Clone this repository.
2. Bootstrap the project - `lerna bootstrap`.
3. Extract the `~/packages/react` directory.
4. Run `npm run dev` from `~/packages/react` to try it out.
5. Checkout and remove the demo code at `~/src/__demo`.
6. Clear the errors that resulted from step 5.
7. **Write your code**
8. Run `npm run build` to build the application.
9. Run `npm run static` to test out your application.
10. All generated code will be in `~/dist`.

## Included

### Frontend UI
- React (v16)
- React Router (v4)
- React Redux
- Redux Thunk
- Material UI

### Frontend Tooling Libraries
- Source code bundling (`webpack`)
- Favicon generation (`favicons-webpack-plugin`)
- HTML entrypoint (`html-webpack-plugin`)
- Build hash generation (`webpack-plugin-hash`)
- Buildtime environment definition (`DefinePlugin`)

### Frontend Development Tools
- Redux DevTools Instrumentation
- Redux Logger Middleware
- Hot Module Replacement (via `webpack-serve`)

### Backend
- Express
- Basic HTTP header security
- Content Security Policy (CSP)
- Response compression
- Prometheus metrics
- Liveness + readiness checks

### Quality Assurance
- Karma (front-end only)
- Mocha
- Chai
- Sinon

## Using

### Development
#### Testing


#### Styling
##### JSS
CSS in JS is the designed way to use styling. An example:

```js
import ... from '...';
import {withStyles} from '@material-ui/core/styles';
// ... other imports ...
const styles = (theme) => ({
  root: {
    color: theme.palette.primary
  },
});
// ... component code ...
export default withStyles(styles)(ThisComponent);
```

### Operating

#### `npm run dev`
Starts the application for development using `webpack-serve`.

To run the application using `webpack-serve` in production mode, use `npm run prod`.

#### `npm run build`
Builds the application and outputs it to `./dist`.

By default, the build process creates a **production** build. To build a development build, use `npm run build-dev`

#### `npm run static`
> Requires `npm run build` to have been run.

Starts the application in production using an Express server.

If you're modifying the server code and are looking for server live-reloading, run `npm run staticx` which uses `nodemon` to restart the server on code changes.

#### `npm run lint`
Lints the application code using ESLint

#### `npm test`
Starts the tests.

To start the tests in watch mode, run `npm run test-watch`.

### Configuring

#### Karma
The Karma configuration can be found at `~/config/karma.config.js`.

#### Webpack
The Webpack configuration cane be found at `~/config/webpack.config.js`.

#### Build Process/Client-Side Execution
##### `NODE_ENV`
> Defaults to `"production"` for builds.

When in `"production"`, development tools are not included.

The `NODE_ENV` for the build is made available via the `global.app.environment` variable from the client-side.

#### Server-Side Execution
##### `PORT`
This configures the port which the application will listen to.

> Defaults to `3000` for `npm run dev` and `8080` for `npm run static`.

# Cheers
