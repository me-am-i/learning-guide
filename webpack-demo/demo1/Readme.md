Webpack中文指南

http://zhaoda.net/webpack-handbook/index.html https://github.com/ruanyf/webpack-demos

Step1: npm init

Step2: npm install webpack --save-dev

step3: npm install css-loader style-loader

Step4: create index.html, style.css, entry.js

Step5: webpack entry.js bundle.js OR webpack entry.js bundle.js --module-bind 'css='style!css'

Step6: create webpack.config.js

Step7: use 'webpack' to instead of 'webpack entry.js bundle.js'

Step8: npm install -g webpack-dev-server

Step9: webpack-dev-server

Webpack 会分析入口文件，解析包含依赖关系的各个文件。这些文件（模块）都打包到 bundle.js 。Webpack 会给每个模块分配一个唯一的 id 并通过这个 id 索引和访问模块。在页面启动时，会先执行 entry.js 中的代码，其它模块会在运行 require 的时候再执行。

Webpack 在执行的时候，除了在命令行传入参数，还可以通过指定的配置文件来执行。默认情况下，会搜索当前目录的 webpack.config.js 文件，这个文件是一个 node.js 模块，返回一个 json 格式的配置信息对象，或者通过 --config 选项来指定配置文件。

一般情况下，webpack 如果出问题，会打印一些简单的错误信息，比如模块没有找到。我们还可以通过参数 --display-error-details 来打印错误详情

webpack --display-error-details

webpack --progress --colors --watch
