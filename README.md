# faucet-pipeline-react-example
An example npm project that shows how to build React applications with faucet

## Getting started

If you just want to build the project, run:

```
$ npm install
$ npm run build
```

This will create a `dist` folder containing these files:

```
dist/
├── index.html
├── index.js
├── react-dom.js
└── react.js
```

The `index.html` is copied verbatim from the `src` folder.
The React JS files are copied from the `react` and `react-dom` packages; depending on the `NODE_ENV` environment variable, the production (minified) or development builds are selected.
Finally, `index.js` is transpiled from `src/index.jsx`.

You can also see the page directly in the browser:

```
$ npm run serve
```

Open your browser, and you should see "It works!".
This command will automatically rebuild if you change something in the `src` folder and refresh the browser.

## Production build

To obtain a production build, you can set the `NODE_ENV` environment variable.
By default, faucet uses a development build.

```
$ NODE_ENV=production npm run build
```

## Configuration

The faucet configuration can be found in `faucet.config.js`.

There is an alternative configuration in `faucet.essugar-config.js`.
It can be selected as follows:

```
$ npm run serve -- -c faucet.essugar-config.js
```

It differs from the default configuration in the following ways:

1. It uses the (experimental) `faucet-pipeline-essugar` instead of `faucet-pipeline-js`.
2. JSX is transpiled using [Sucrase](https://github.com/alangpierce/sucrase) instead of Babel.
3. The entire React/ReactDOM dependency is bundled into `dist/index.js`.

```
dist/
├── index.html
└── index.js
```

For now, we recommend choosing the default configuration over the alternative one.
However, `faucet-pipeline-js` does not understand the `process.env.NODE_ENV` convention in JS source code, which means that code using that variable will fail in the browser.
`faucet-pipeline-essugar` can replace this code based on the environment variable that is set during build time.
