# Homework: ES6 Classes

### Learning Objectives
- Be able to understand Class syntax
- Be able to use `import` and `export` syntax
- Be able to use object destructuring
- Understand what a transpiler, such as Babel, is useful for

## Brief

### ES6 Language Features

There are a some language features that were introduced with ECMAScript 2015 (ES6) that we haven't looked at that. These features are used to when writing React idiomatically. Your task is to read the MDN documentation for these features (Classes, Import and Export, and Destructuring).

And then you're going to refactor a React app [react_es6_start](./react_es6_start) following the instructions below.

If you get stuck there's an endpoint [react_es6_end](./end)

Also, to help you understand what the React app is doing, there's the same app implemented in Vue (the data displayed is very slightly different) [vue_es6_comparison](./vue_es6_comparison)

#### Getting started:

To run the React application:

- Install dependencies: `npm install`
- Start the dev server, and load in Chrome `npm start`

#### Keep reading...

#### Classes

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- Read and try and understand the `class` and `extends` syntax used in the React App - `App.js`

#### Import & Export

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

- Replace the `module.exports` and `require`s with the default exports and imports.

Relevent files: `App.js`, `FeaturesList.js`

#### Object Destructuring

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)

- Refactor the `FeaturesList.js` Functional Component to destructure the `features` passed into the `FeaturesList` function. 

- Refactor the `props.features` to the destructured `features`.

- Refactor the function body passed to `map` to destructure `feature` into local variables `name, description, MDNLink, isImplemented, implementations`

- Use these local variables in the HTML returned from the `FeaturesList` function (so for example `feature.name` becomes `name`)

### Transpilers

At the bottom of each of the above MDN pages there is a section called 'Browser Compatibility' that shows which browsers support these language features.

When using newer language features that are not supported by all browsers, we can use a transpiler to convert our code into a backwards compatible version JavaScript that we know is more widely supported. A JavaScript transpiler will take the source code that we write, and transpile it into the version of JavaScript that we specify in the configuration settings. We can use the configuration settings to specific exactly which browsers we want to target. This allows us to use all the latest language features, while still being sure our application will run for our users.

Babel is a JavaScript transpiler that does just this.

1. Read the Babel page, 'What is Babel?': [https://babeljs.io/docs/en/](https://babeljs.io/docs/en/)
2. Babel has a REPL that we can use to see how it transpiles our code: [https://babeljs.io/en/repl.html](https://babeljs.io/en/repl.html).
Experiment with it by typing in some es6 JavaScript (for example, an arrow function) and seeing what it transpiles to.

We will be using Babel when develop our React apps to transpile both the newer language features and other framework specific syntax into a widely supported version of JavaScript.