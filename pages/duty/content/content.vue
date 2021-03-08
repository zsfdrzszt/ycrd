<template>
	<view class="content">
		<image src="../../../static/duty/download.jpg" mode="widthFix"  style="width: 100%;"></image>
		<view class="content_top">
			<input type="text" name="" id="search" placeholder="请输入搜索内容">
			<wdropdown :list= "list7"  @searchdrop="searchdrop1"></wdropdown>
		</view>
		<view class="content_txt">
			<view class="content_title">
				<text>全部</text>
				<text>已审核</text>
				<text>未审核</text>
			</view>
		</view>
	</view>
</template>

<script>
	import wdropdown from "../../../components/w-dropdown/w-dropdown.vue"
	export default {
		components:{
			wdropdown
		},
		data() {
			return {
				list7:{name:"2020年",list:[{content:"2020年"},{content:"2019年"},{content:"2018年"},{content:"2017年"},{content:"2016年"}]},
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
	width: 100%;
}
.content{
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
}
.content_top{
	display: flex;
	padding-top: 15px;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	background-color:  #F5F5F5;
}
#search{
	border: 1px solid #ee0000;
	border-radius: 5px;
	background: #fff;
	padding: 10px;
	width: 40%;
	box-sizing: border-box;
	height: 30px;
}
.content_txt{
	padding: 10px 0;
	background-color:  #F5F5F5;
}
.content_title{
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 40px;
	border-top: 1px solid #ECECEC;
	border-bottom: 1px solid #ECECEC;
	background-color: #FFFFFF;
}
.content_title text{
	box-sizing: border-box;
	background: #fff;
	font-size: 16px;
	font-weight: bold;
}
</style>
