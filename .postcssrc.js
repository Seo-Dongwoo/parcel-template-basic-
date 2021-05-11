// ESM (js 의 표준)
// CommonJS (node js 방식)

// import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')

//export {
//  plugins: [
//      autoprefixer
//  ]
// }
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}