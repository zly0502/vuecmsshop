<template>
  <!--写组件的模板内容，必须要有根元素-->
  <div>
    <h1>这是{{ id }}的组件</h1>
  </div>
</template>

<script>
  //这里写业务逻辑
  //暴露数据
  export default {
    data(){
      return{
        id:this.$route.params.id
      }
    },
    created(){
      this.getnewsdetail();
    },
    methods:{
      getnewsdetail(){
        this.$http.get('api/getnew/'+this.id).then(function(res){
          console.log(res.body);
        });
      }
    }
  }
</script>

<style>
  /*写当前组件的样式*/
</style>