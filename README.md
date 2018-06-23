# AngularJS TypeScript Starter

A starter repo for building a modern AngularJS app with TypeScript.

## Features

- Author your app with TypeScript
- Component-based design and directory structure
- HTML templates live inside their own `.html` files
- Uses CSS modules to keep styles scoped to local component
- Unit testable controllers with Jest
- Dev server with hot reload support
- Production build with all assets minified and vendor files split into different bundle

## Usage

Firstly, clone or fork this repo and use it as your base.

The repo is controlled with npm run scripts. The available commands are:

- `npm start`: spins up a local dev server with hot module replacement support.
- `npm test`: runs all unit tests.
- `npm run test:watch`: watches unit tests for changes and automatically re-runs tests on save.
- `npm run build`: builds production versions of the assets and places them in the `dist/` folder.

## Component structure

Build each UI element as a component. The component should live in its own folder inside `src/components`.

Each component should have:

- A module file - this registers the component with Angular.
- A template - this is a simple HTML file that will be imported for use.
- A controller - this is where the logic for the component will live. The controller should be easily unit testable.
- A component definition: the place where the template and controller are connected together.
- A set of styles - to style the component, define a `.css` file and place all styles in there. These styles will be locally scoped to the component in question.
- A controller spec: to unit test the controller, which should not contain any imports to angular or files that in turn import angular (this restriction makes the controllers very easy to unit test via node.js).

## License

ISC