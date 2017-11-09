<template>
	<!-- 整个页面的 两条导航条 + 内容容器 -->
	<div class="template">
		<!-- 左侧导航条 -->
		<leftBars></leftBars>
		<!-- 顶部导航条 -->
		<topBars class="topbar"></topBars>
		<!-- 内容容器 -->
		<router-view class="content"></router-view>
	</div>
</template>

<script>
	import TopBars from "@/view/COMPONENT/topBars";
	import LeftBars from "@/view/COMPONENT/leftBars";
	export default {
		components: {
			topBars: TopBars,
			leftBars: LeftBars
		},
		methods:{
			
		}
	};
</script>

<style type="text/css" scoped>
	/*头顶的导航条*/
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


