<template>
  <!--写组件的模板内容，必须要有根元素-->
  <div class="app-container">
    <!-- header头部分(使用mint-ui,头部固定) -->
    <mt-header fixed title="vue-cmsshop"></mt-header>

    <!-- 对应tabbar匹配的主体内容 -->
    <router-view></router-view>

    <!-- tabbar选项卡 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
  //这里写业务逻辑
  //暴露数据
  export default {
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  .app-container{
    padding-top:40px;
  }
</style>