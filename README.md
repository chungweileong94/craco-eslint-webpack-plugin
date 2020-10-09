# craco-eslint-webpack-plugin

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A [craco](https://github.com/gsoft-inc/craco) plugin for replacing eslint-loader with [eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin)

## Installation

1. Install [craco](https://github.com/gsoft-inc/craco)

2. Install `craco-eslint-webpack-plugin` :

   NPM

   ```
   npm install craco-eslint-webpack-plugin --save-dev
   ```

   Yarn

   ```
   yarn add craco-eslint-webpack-plugin -D
   ```

3. Install `eslint-webpack-plugin` & `eslint` :

   NPM

   ```
   npm install eslint-webpack-plugin eslint --save-dev
   ```

   Yarn

   ```
   yarn add eslint-webpack-plugin eslint -D
   ```

4. Edit `craco.config.js` :

   ```js
   const CracoEslintWebpackPlugin = require('craco-eslint-webpack-plugin');

   module.exports = {
     plugins: [
       {
         plugin: CracoEslintWebpackPlugin,
         options: {
           // See the options description below
           skipPreflightCheck: true,
           eslintOptions: {
             files: 'src/**/*.{js,jsx,ts,tsx}',
             lintDirtyModulesOnly: true,
             // ...
           },
         },
       },
     ],
   };
   ```

## Options

- `skipPreflightCheck`

  - `eslint-webpack-plugin` required `eslint` with version `^7.5.0`, which doesn't match the version that came with the CRA, and stop you from running the app. Set this option to `true`, will set the `SKIP_PREFLIGHT_CHECK=true`, which basically to tell CRA to skip the dependencies version checking. If not, you can always add into your `.env` file.

- `eslintOptions`
  - https://github.com/webpack-contrib/eslint-webpack-plugin#options
