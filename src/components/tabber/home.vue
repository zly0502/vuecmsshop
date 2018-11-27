<template>
  <!--写组件的模板内容，必须要有根元素-->
  <div class="home-container">
    <!-- 首页的轮播图 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in lunbo" :key="item.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  <!-- 首页的九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
         <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  //这里写业务逻辑
  //暴露数据
  export default {
    data(){
      return{
        lunbo:[]
      }
    },
    //利用生命周期created
    //会在当前组件实例中等待data和method属性准备好之后，才会执行
    //不可以在beforeCreated中去调用getLunbo，因为此函数中methods没有准备好
    created(){
      //此函数有点类似jquery的页面加载完毕后执行$(function(){})
      this.getLunbo();
    },
    methods:{
      getLunbo(){
        this.$http.get('api/getlunbo').then(function(res){
          if(res.body.status==0){
            this.lunbo = res.body.message;
          }
        });
      }
    }
  }
</script>

<style scoped>
  /*写当前组件的样式*/
  .home-container .mint-swipe{
      height:200px;
  }
  .home-container .mint-swipe-item img{
    width: 100%;
  }

  /* 九宫格样式 */
  .home-container .mui-grid-9{
    background-color: #fff;
  }
  .home-container .mui-grid-9 .mui-table-view-cell {
    border:none;
  }
  .home-container .mui-grid-9 .mui-table-view-cell .mui-media-body{
    font-size: 13px;
  }
  .home-container .mui-grid-9 .mui-table-view-cell img{
    width: 50%;
  }
  
</style>