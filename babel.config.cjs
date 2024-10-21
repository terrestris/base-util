module.exports = {
  presets: [
    '@babel/env'
  ],
  plugins: [
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-transform-modules-commonjs',
    ['@babel/plugin-transform-class-properties', { loose: false }],
  ]
};
