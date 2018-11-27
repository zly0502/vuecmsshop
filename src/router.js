//引入vue-router路由
import VueRouter from 'vue-router';

//引入路由对应的组件
import home from './components/tabber/home.vue';
import member from './components/tabber/member.vue';
import shopcar from './components/tabber/shopcar.vue';
import search from './components/tabber/search.vue';
import newslist from './components/news/newslist.vue';
import newsdetail from './components/news/newsdetail.vue';


//定义路由匹配
var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},//重定向
    {path:'/home',component:home},
    {path:'/member',component:member},
    {path:'/shopcar',component:shopcar},
    {path:'/search',component:search},
    {path:'/home/newslist',component:newslist},
    {path:'/home/newsdetail/:id',component:newsdetail},

  ],
  //修改路由匹配到的默认类,修改为mui的类
  'linkActiveClass':'mui-active'
});

//暴露路由
export default router;