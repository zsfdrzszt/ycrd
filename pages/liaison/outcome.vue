<template>
	<view class="all">
		<view class="status_bar"></view>
		<view>
			<u-image src="../../static/liaison/common_outcome_title.jpg" :lazy-load="true" mode="widthFix">
				<u-loading slot="loading"></u-loading>
			</u-image>
		</view>
		<view class="dropdown"><wdropdown :list= "droplist" @searchdrop="searchdrop"></wdropdown></view>
		<view class="title"><text>{{year}}年{{liason}}人大代表</text><text>“一季一星”公告栏</text></view>
		<personal v-for="(item,index) in list" :key="index" :image = 'item.image' :quater='item.quater' :name = 'item.name' :step='item.step' :id="item.id" @nextpage="nextpage"></personal>
		<wnavall></wnavall>
	</view>
</template>

<script> 
	import wdropdown from "../../components/w-dropdown/w-dropdown.vue"
	import personal from "../../components/personal/personal.vue"
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default {
		data() {
			return {
				liason:'郭家堡乡',
				year:'2020',
				droplist:{name:"全部",list:[{content:"2019"},{content:"2020"}]},
				list:[
					{id:1,image:'http://qiniu.jza2c.com/uploads/20200317/Fj12TX6qQ9mbTMzR4J86BdfiGZjm.png',quater:'第一季度',name:'霍志明',step:'区代表'},
					{id:2,image:'http://qiniu.jza2c.com/uploads/20200528/Fu8uZww62SH4vTST90vNMhrUhmF9.jpg',quater:'第二季度',name:'王绍泰',step:'市、区、乡代表'},
					{id:3,image:'http://qiniu.jza2c.com/uploads/20190727/FoWsvVaFBtXhv-_KgBIrGL9wAi40.jpg',quater:'第二季度',name:'何翠萍',step:'区代表'},
					{id:4,image:'http://qiniu.jza2c.com/uploads/20190727/FubYPlg0fnOh086BGBuZYQN2ibK8.jpg',quater:'第二季度',name:'柴永昌',step:'区、乡代表'}
				]
			}
		},
		methods: {
			// 下拉
			searchdrop(arg){
				console.log(arg.content)
				this.year = arg.content
			},
			nextpage(id){
				uni.navigateTo({
					url:"/pages/liaison/gkdet?id="+id,
				})
			}
		},
		components:{
			wdropdown,
			personal,
			wnavall
		}
	}
</script>

<style>
	.all{padding-bottom: 30rpx;}
	.dropdown{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 160rpx;
	}
	.title{
		text-align: center;
		margin: 20rpx 60rpx;
		font-weight: bold;
		font-size: 36rpx;
		display: flex;
		flex-direction: column;
	}
</style>
