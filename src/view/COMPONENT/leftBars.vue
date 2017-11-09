<template>
    <section>
        <el-menu class="el-menu-vertical-demo menu" theme="dark">
            <el-menu-item index="1" @click="$router.push({
                    name: '清洗管理'
                })">
                <i class="fa fa-home icon" aria-hidden="true"></i>清洗管理
            </el-menu-item>
            <el-menu-item index="2" @click="$router.push({
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
    </section>
</template>

<style type="text/css" scoped>
/*左边的导航条*/
.menu {
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
}
.menu a {
  color: #bfcbd9;
  text-decoration: none;
  color: #20a0ff;
  text-decoration: none;
}
.icon {
  padding-left: 15px;
  padding-right: 15px;
}
</style>
