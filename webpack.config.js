var path = require('path');
var VueLoaderPlugin = require('vue-loader/lib/plugin.js'); // webpack4.X版本需要这么写
module.exports = {
  mode: "development", //开发模式
  //指定打包的入口文件
  entry: "./src/main.js",
  //指定打包的出口文件（一般命名为bundle.js）
  output:{
    path:path.join(__dirname,'dist'),//指定打包后的文件目录
    filename: 'bundle.js'//指定打包后的文件
  },
  // 用来配置第三方loader模块的
  module:{
     //rules是匹配文件的规则，在这里可以指定哪些文件格式，交给哪些loader进行处理
     rules:[
        //通过test正则匹配的css文件，通过use指定对应的loader来处理
        //注意use顺序（从右到左）
        {test:/\.css$/,use:['style-loader','css-loader']},

        //匹配图片交给url-loader来处理
        //使用[name]可以获取文件的原名，[ext]可以获取文件的后缀,
        // 使用[hash:8],可以实现对文件名称实现重命名,8代表只8位hash
        // {test:/\.(png|jpg|bmp|jepg|gif)$/,use:['url-loader?limit=10000&name=[hash:8]-[name].[ext]']},

        //上面配置等价于
        // {
        //   test:/\.(png|jpg|bmp|jepg|gif)$/,
        //   use:[{
        //     loader:'url-loader',
        //     options:{
        //       limit:10000,
        //       name:'[hash:8]-[name].[ext]'
        //     },{}          
        //   }]
        // },
        //如果图片的大小字节数小于limit设定的值，会进行base64进行编码处理,
        //否则会把图片的文件名称 ，使用一串随机的字符串进行重命名
        //上面的配置如果只有一个loader,配置可以如下
        {
          test:/\.(jpg|png|gif|bmp|jpeg)$/,
          loader:'url-loader',
        },

        //匹配字体文件,交给url-loader进行处理 
        {
          test:/\.(ttf|svg|woff|woff2|eot)$/,
          use:['url-loader']
        },
        //匹配js的结尾的文件，交给babel-loader来处理（专门处理高级es6语法）
        {
          test:/\.js$/,
          use:['babel-loader'],
          exclude:/node_modules/  //此目录中的js文件不进行loader转化,将其排除了
        },
        //匹配.vue规则
        {
          test:/\.vue$/,
          use:['vue-loader']
        },
        //匹配scss规则
        {
          test:/\.less$/,
          use:['style-loader', 'css-loader', 'less-loader']
        }
     ]
  },
  //重定义
  resolve:{
    //修正导入vue路径时候的问题
    alias:{
      "vue$":"vue/dist/vue.js"
    }
  },
  plugins:[
    new VueLoaderPlugin()  //实例vue-loader的实例对象，为了加载.vue组件
  ]
}