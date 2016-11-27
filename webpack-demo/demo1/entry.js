document.write('It works.')

// 添加模块
document.write(require('./module.js'))

// require('!style!css!./style.css')

require('./style.css')
// 若不写 loader 前缀, webpack 编译时需使用:
// webpack entry.js bundle.js --module-bind 'css=style!css'
