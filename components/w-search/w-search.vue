<template>
	<view class="search">
		<input type="text" @focus="changeurl" @blur="changeback" placeholder="请输入代表姓名""/><view class="inputsearch"><image :src="imgurl" class="searchimg"></image></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgurl:"../../static/contact/liasons_common_listpage_search.png",
			};
		},
		methods:{
			changeurl(){
				this.imgurl = "../../static/contact/liasons_common_connection_search.png",
				this.$emit("changenav")
			},
			changeback(){
				this.imgurl ="../../static/contact/liasons_common_listpage_search.png"
				this.$emit("changenav")
			}
		}
	}
</script>

<style scoped>
     .search{
		 display: flex;
		 height: 45px;
		 justify-content: center;
	 }
	 input{
	 	width: 60%;
		height: 100%;
		border-radius: 3px;
		border: 1px solid #971818;
		line-height: 43px;
		padding-left: 4px;
		box-sizing: border-box;
		border-right: none;
		font-size: 16px;
		letter-spacing: 1px;
		background-color: #FFFFFF;
	 }
	 .inputsearch{ 
		width: 45px;
		height: 45px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #971818;
		position: relative;
		left: -2px;
		 
	 }
	 .searchimg{
		 display: block;
		 width: 70%;
		 height: 70%;
	 }
</style>
