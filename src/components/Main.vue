<template>
	<div>
		<router-view />
		<van-tabbar v-model="active">
		  <van-tabbar-item replace to="/home" icon="home-o">标签</van-tabbar-item>
		  <van-tabbar-item replace to="/project" icon="search">标签</van-tabbar-item>
		  <van-tabbar-item replace to="/find" icon="friends-o">标签</van-tabbar-item>
		  <van-tabbar-item replace to="/mine" icon="setting-o">标签</van-tabbar-item>
		</van-tabbar>
	</div>

</template>

<script>
	 export default {
		 name: 'TabBar',
	   data() {
	     return {
	       active: 0,
	     };
	   },
	 };
</script>

<style>
</style>
