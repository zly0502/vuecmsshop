//引入Vue框架
import Vue from 'vue';

//引入vue-resource模块，用来发送ajax请求
import vueResource from 'vue-resource';
//安装到vue身上
Vue.use(vueResource);
//全局设置ajax请求的根域名
Vue.http.options.root="http://127.0.0.1:3000/";


//引入vue-router路由
import VueRouter from 'vue-router';
//安装到vue身上
Vue.use(VueRouter);


//引入路由模块
import router from './router';

//导入根组件
import app from './app.vue';



//引入mintui组件(css一般可以按需引入，而js一般是全局引入)
import { Header } from 'mint-ui';
//引入样式(按需引入)
import 'mint-ui/lib/style.css';
Vue.component(Header.name,Header);
//按需导入轮播图所需的两个组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//引入mui的css样式
import './lib/mui/css/mui.min.css';
//引入mui扩展的字体图标
import './lib/mui/css/icons-extra.css';

//引入moment模块
import moment from 'moment';
//定义全局的时间过滤器
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dateStr).format(pattern);
});

//创建vue实例
new Vue({
  el:"#app",
  //当函数的参数只有一个时，可以省略掉小括号
  //但函数体内容只有一条语句时，可以省略花括号
  //且一条语句不用加return,因为默认会return返回
  // render:function(c){
  //   return c(app);
  // }
  render:c=>c(app),
  //把路由对象挂载到vm实例身上
  router,
});