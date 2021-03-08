<template>
	<view class="content">
		<image src="../../../static/duty/download.jpg" mode="widthFix"  style="width: 100%;"></image>
		<view class="content_top">
			<input type="text" id="search" placeholder="请输入搜索内容">
			<wdropdown :list= "list7"  @searchdrop="searchdrop1"></wdropdown>
		</view>
		<view class="content_txt">
			<view class="content_title">
				<text :class="{textnavchange:1==isActive }" @click="changestate(1)">全部</text>
				<text :class="{textnavchange:2==isActive }" @click="changestate(2)">已审核</text>
				<text :class="{textnavchange:3==isActive }" @click="changestate(3)">未审核</text>
			</view>
			<view class="footer">暂无数据</view>
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
				isActive:1,
				list7:{name:"2020年",list:[{content:"2020年"},{content:"2019年"},{content:"2018年"},{content:"2017年"},{content:"2016年"}]},
			}
		},
		methods: {
			changestate(n){
				this.isActive = n
			},
		}
	}
</script>

<style>
page{
	width: 100%;
	height: 100%;
	background-color:  #F5F5F5;
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
}
#search{
	border: 1px solid #ee0000;
	border-radius: 5px;
	background: #fff;
	padding: 0 10px;
	width: 40%;
	box-sizing: border-box;
	height: 30px;
}
.content_txt{
	padding: 10px 0;
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
	font-size: 15px;
	height: 40px;
	line-height: 40px;
	width: 33.333%;
	text-align: center;
}
.footer{
	text-align: center;
	padding-top: 20px;
	width: 100%;
	height: 100%;
}
.textnavchange{
	color: #ee0000;
	border-bottom:  #ee0000 solid 2px;
}
</style>
