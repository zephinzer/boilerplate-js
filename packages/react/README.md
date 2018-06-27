# React Boilerplate

## Included

### Frontend Libraries
- React
- React Router
- React Redux
- Material UI
- Webpack
- Webpack Serve

### Frontend Development Tools
- Redux DevTool Instrumentation
- Redux Logger Middleware
- 

### Backend
- Express
- Response compression
- Prometheus metrics
- Liveness + Readiness checks

## Using

### `npm run dev`
Starts the application for development using `webpack-serve`.

### `npm run build`
Builds the application and outputs it to `./dist`.

By default, the build process creates a production build. To build a development build, use `npm run build-dev`

### `npm start`
> Requires `npm run build` to have been run.
Starts the application in production using an Express server.

### `npm run lint`
Lints the application code.

### `npm test`
Starts the tests.

### `npm run test-watch`
Starts the tests in watch mode.

## Configuration

### Build
#### `NODE_ENV`
When in `"production"`, development tools are not included.

> Defaults to `"production"` for builds.

### Client-Side
#### `global.app.environment`
This returns the `NODE_ENV` which the application was built with.

> Defaults to `"production"` as in Build > NODE_ENV.

### Server-Side
#### `PORT`
This configures the port which the application will listen to.

> Defaults to `3000` for `npm run dev` and `8080` for `npm start`

