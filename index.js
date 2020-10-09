/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
const {getLoader, removeLoaders, loaderByName} = require('@craco/craco');
const ESLintPlugin = require('eslint-webpack-plugin');

const ESLINT_LOADER_NAME = 'eslint-loader';

module.exports = {
  overrideCracoConfig: ({cracoConfig, pluginOptions = {skipPreflightCheck: false}}) => {
    process.env.SKIP_PREFLIGHT_CHECK = pluginOptions.skipPreflightCheck;
    console.log('SKIP_PREFLIGHT_CHECK ✅');
    return cracoConfig;
  },

  overrideWebpackConfig: ({webpackConfig, pluginOptions = {eslintOptions: {}}}) => {
    // Remove eslint-loader
    const {isFound} = getLoader(webpackConfig, loaderByName(ESLINT_LOADER_NAME));
    if (isFound) {
      removeLoaders(webpackConfig, loaderByName(ESLINT_LOADER_NAME));
    }

    // Add eslint-webpack-plugin
    webpackConfig.plugins.push(new ESLintPlugin(pluginOptions.eslintOptions));

    return webpackConfig;
  },
};
