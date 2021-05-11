const { plugins } = require("./.postcssrc");

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}
// 작성하게 되는 모든 js는 babel을 통해 es5의 문법으로 변경이 되어 브라우저에서 동작.
