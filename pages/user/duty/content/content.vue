<template>
	<view class="content">
		<view class="status_bar"></view>
		<image src="../../../../static/duty/download.jpg" mode="widthFix"  style="width: 100%;"></image>
		<view class="content_top">
			<input type="text" id="search" placeholder="请输入搜索内容">
			<wdropdown :list= "list7"  @searchdrop="searchdrop"></wdropdown>
		</view>
		<view class="content_txt">
			<view class="content_title">
				<text :class="{textnavchange:1==isActive }" @click="changestate(1)">全部</text>
				<text :class="{textnavchange:2==isActive }" @click="changestate(2)">已审核</text>
				<text :class="{textnavchange:3==isActive }" @click="changestate(3)">未审核</text>
			</view>
			
		</view>
		<scroll-view scroll-y="true" class="scroll-view">
			<wtextcard v-for="(item,index) in text4list" :list="item" :key="index" v-if="1 == isActive" @click="nextpage"></wtextcard>
			<view class="footer" v-if="this.text4list.length == 0 ">暂无数据</view>
		</scroll-view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wdropdown from "../../../../components/w-dropdown/w-dropdown.vue"
	import wtextcard from "@/components/w-text4card/w-text4card.vue"
	export default {
		components:{
			wdropdown,
			wtextcard
		},
		data() {
			return {
				isActive:1,
				list7:{name:"2020年",list:[{content:"2020年"},{content:"2019年"},{content:"2018年"},{content:"2017年"},{content:"2016年"}]},
				text4list:[{content:"电费滚滚根据客户",state:"回复",time:"2020.1.13"},
				{content:"建设计划覅发",state:"回复",time:"2021.1.13"},
				{content:"啊的方法让国人 ",state:"已回复",time:"2019.1.13"},
				{content:"阿基诺就黑",state:"回复",time:"2021.1.13"},
				{content:"计划管控热乎乎JFK零零会计分录开始和是设立了放谁是否是和身份火箭首发机会忽视了",state:"已受理",time:"2021.1.13"},
				{content:"啊划分方式沙发沙发是发挥好",state:"回复",time:"2019.1.13"},
				{content:"发发二夫人饥荒艰苦环境",state:"回复",time:"2020.1.13"},
				{content:"发发二夫人饥荒艰苦环境",state:"回复",time:"2021.1.13"},
				{content:"发发二夫人饥荒艰苦环境",state:"回复",time:"2021.1.13"},
				{content:"发发二夫人饥荒艰苦环境",state:"回复",time:"2021.1.13"},
				{content:"发发二夫人饥荒艰苦环境",state:"回复",time:"2021.1.13"},
				{content:"发发二夫人饥荒艰苦环境",state:"回复",time:"2021.1.13"},
				{content:"发发二夫人饥荒艰苦环境",state:"回复",time:"2021.1.13"}
				]
			}
		},
		methods: {
			changestate(n){
				this.isActive = n
			},
			searchdrop(){
				
			},
			nextpage(val){
				uni.navigateTo({
					url:"/pages/user/onadvise/onadvise"
				})
			}
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
.scroll-view{
	height: 70%;
}
</style>
