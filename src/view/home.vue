<template>
  <!-- 整个页面的 两条导航条 + 内容容器 -->
  <div class ="template">


    <!-- 左侧导航条 -->
    <el-menu class="el-menu-vertical-demo menu" theme="dark">
      <el-menu-item index="1" @click="$router.push({
        name: '清洗管理'
      })">
        <i class="fa fa-home icon" aria-hidden="true"></i>清洗管理				 
      </el-menu-item>
      <el-menu-item index="2"  @click="$router.push({
        name: '配包管理'
      })">
        <i class="fa fa-calendar icon" aria-hidden="true"></i>配包管理
      </el-menu-item>
      <el-menu-item index="3" @click="$router.push({
        name: '消毒管理'
      })">  
            <i class="fa fa-clock-o icon" aria-hidden="true"></i>消毒管理
      </el-menu-item>
      <el-menu-item index="4" @click="$router.push({
        name: '发放管理'
      })">
            <i class="fa fa-plus-square icon" aria-hidden="true"></i>发放管理	
      </el-menu-item>
      <el-menu-item index="5" @click="$router.push({
        name: '使用管理'
      })">
            <i class="fa fa-folder-open-o icon" aria-hidden="true"></i>使用管理
      </el-menu-item>
      <el-menu-item index="6" @click="$router.push({
        name: '回收管理'
      })">
        <i class="fa fa-user-circle icon" aria-hidden="true"></i>回收管理
      </el-menu-item>
    </el-menu>



    <!-- 顶部导航条 -->
    <topBars class="topbar"></topBars>



    <!-- 内容容器 -->
    <router-view class="content"></router-view>	



  </div>
</template>

<script>
import TopBars from "@/view/COMPONENT/topBars";
export default {
  components: {
    topBars: TopBars
  }
};
</script>

<style type="text/css" scoped>
/*左边的导航条*/
.template .menu {
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
}
.template .menu a {
  color: #bfcbd9;
  text-decoration: none;
  color: #20a0ff;
  text-decoration: none;
}
.template .icon {
  padding-left: 15px;
  padding-right: 15px;
}

/*头顶的导航*/
.template .topbar {
  z-index: 99;
  position: fixed;
  top: 0;
  clear: both;
  padding: 0;
  margin-top: 0;
  margin-left: 200px;
  margin-bottom: 1em;
  overflow: hidden;
}

/*路由内容容器*/
.template .content {
  margin-top: 70px;
  margin-left: 200px;
}
</style>


