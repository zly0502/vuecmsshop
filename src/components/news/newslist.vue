<template>
  <!--写组件的模板内容，必须要有根元素-->
  <div class="newslist-container">
    <!-- 新闻列表区 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsdetail/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h2>{{ item.title }}</h2>
            <p class='mui-ellipsis'>
              <span>发布时间：{{ item.add_time | dateFormat}}</span>
              <span class="click">点击：{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
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
        newslist:[]
      }
    },
    created(){
      //执行ajax请求
      this.getnewslist();
    },
    methods:{
      getnewslist(){
        //获取新闻列表的数据
        //url地址前面不要加/
        this.$http.get('api/getnewslist').then(function(res){
          if(res.body.status==0){
            this.newslist = res.body.message;
          }
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  /*写当前组件的样式*/
  .newslist-container {
    .mui-table-view{
      h2{
        font-size: 13px;
      }
      .mui-ellipsis{
        color:cornflowerblue;
        font-size:12px;
      }
      .click{
        float: right;
      }
    }
  }
</style>