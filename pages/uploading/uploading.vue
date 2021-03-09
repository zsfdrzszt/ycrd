<template>
	<view class="page_body">
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wnavall from "../../components/w-navall/w-navall.vue"
	export default {
		components:{
			wnavall
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page {
		background: url('~@/static/pro1img/download.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		height: 100vh;
		margin: 0px;
		padding: 0px;
	}
</style>
