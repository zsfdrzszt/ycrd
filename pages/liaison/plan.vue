<template>
	<view class="all">
		<view class="status_bar"></view>
		<view>
			<u-image src="../../static/liaison/common_plan_title.jpg" :lazy-load="true" mode="widthFix">
				<u-loading slot="loading"></u-loading>
			</u-image>
		</view>
		<view class="administration_title">
			<text :class="{textnavchange:1==isActive }" @click="changestate(1)">集中活动计划安排</text>
			<text :class="{textnavchange:2==isActive }" @click="changestate(2)">民生实事项目清单</text>
		</view>
		<view class="dropdown"><wdropdown :list= "droplist" @searchdrop="searchdrop"></wdropdown></view>
		<view class="content">
			<scroll-view  scroll-y="true" class="scroll-Y conscroll">
				<view class="list">
					<arrange :list="item" v-for="(item,index) in list" :type="type"></arrange>
				</view>
			</scroll-view>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wdropdown from "../../components/w-dropdown/w-dropdown.vue"
	import arrange from "../../components/arrange/arrange.vue"
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default {
		data() {
			return {
				type:1,	//type=1 集中活动计划安排  2--民生实事
				isActive:1,
				list:[],
				droplist:{name:"全部",list:[{content:"2019"},{content:"2020"}]},
			}
		},
		created() {
			this.type = 1
			this.list=[
					{time:'01月',title:'集中学习',space:'乡人大活动中心',name:'任光荣',content:'“向申纪兰学习，做人民好代表”工作交流会。',state:'1',attitude:'1'},
					{time:'01月',title:'集中学习',space:'乡人大活动中心',name:'任光荣',content:'人大代表“防疫抗疫”全面打响阻击战。',state:'1',attitude:'1'}
				]
		},
		methods: {
			// 下拉
			searchdrop(arg){
				console.log(arg.content)
			},
			// 切换选项卡
			changestate(n){
				this.isActive = n
				this.type = n
				if(n==1){
					// 集中计划安排
					this.list=[
						{time:'01月',title:'集中学习',space:'乡人大活动中心',name:'任光荣',content:'“向申纪兰学习，做人民好代表”工作交流会。',state:'1',attitude:'1'},
						{time:'01月',title:'集中学习',space:'乡人大活动中心',name:'任光荣',content:'“向申纪兰学习，做人民好代表”工作交流会。',state:'1',attitude:'1'}
					]
				}else {
					// 民生实事
					this.list=[
						{number:'01	',title:'回迁房安置',time:'2019-11-22',content:'“向申纪兰学习，做人民好代表”工作交流会。',state:'1',attitude:'1'},
					]
				}
			},
		},
		components:{
			arrange,
			wdropdown,
			wnavall
		}
	}
</script>

<style>
	page{
		height: 100%;
		width:100%;
	}
	.all{
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.administration_title{
		height: 41px;
		display: flex;
		flex-wrap: wrap;
		border-bottom: 1px solid #e6e6e6;
	}
	.administration_title text{
		width: 50%;
		height: 41px;
		line-height: 41px;
		padding: 0!important;
		text-align: center;
		font-weight: bold;
	}
	.textnavchange{
		color: #b50000;
		border-bottom: #b50000 solid 2px;
	}
	.content{
		flex: 1;
		height: 0;
	}
	.conscroll{
		height: 100%;
	}
	.list{
		padding-bottom: 30rpx;
	}
	.dropdown{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80rpx;
	}
</style>
