module.exports = (config) => {
  config.set({
    autoWatchBatchDelay: 500,
    basePath: '../',
    browsers: ['ChromiumHeadless'],
    browserConsoleLogOptions: {
      terminal: true,
      level: '',
    },
    files: [
      './src/_test/setup.js',
    ],
    frameworks: ['mocha'],
    preprocessors: {
      './src/_test/setup.js': ['webpack', 'sourcemap'],
    },
    webpack: require('./webpack.config.js'),
    webpackServer: {
      noInfo: true,
    },
  });
};
