<template>
		<view class="textfour">
			<view class="status_bar">
			</view>
			<!-- 顶部图片 -->
			<image class="textfourimg" src="../../static/surveyimg/banner-rdgk.png" mode="widthFix"></image>
			<view class="textnavs">
				<text class="textnav" :class="{textnavchange:1==isActive }" @click="changestate(1)">人代会期间</text>
				<text class="textnav" :class="{textnavchange:2==isActive }" @click="changestate(2)">闭会期间</text>
			</view>
			<scroll-view class="textmaincon" scroll-y>
				<view class="textcontentone" v-show="1 == isActive">
					<wdropdown :list= "droplist" @searchdrop="searchdrop"></wdropdown>
				</view>
				<view class="textcontentone" v-show="2 == isActive">
					<view class="wdroplist">
						<wdropdown :list= "droplist1"  @searchdrop="searchdrop1"></wdropdown>
						<wdropdown :list= "droplist2" @searchdrop="searchdrop2"></wdropdown>
					</view>
					<text class="textfourbar">{{val1}}{{val2}}</text>
				</view>
				<view class="textmainlist">
					<text class="textmassage" v-show="text4list.length == 0">暂无数据</text>
					<wtextcard v-for="(item,index) in text4list" :list="item" :key="index" v-if="1 == isActive"></wtextcard>
					<wtextcards v-for="(item,index) in text4list" :list="item" :num="index" :key="index" v-if="2== isActive"></wtextcards>
				</view>
			</scroll-view>
			<wnavall></wnavall>
		</view>
</template>

<script>
	import wtextcard from "../../components/w-text4card/w-text4card.vue"
	import wtextcards from "../../components/w-text4cards/w-text4cards.vue"
	import wnavall from "../../components/w-navall/w-navall.vue"
	import wdropdown from "../../components/w-dropdown/w-dropdown.vue"
	export default {
		components: {
			wtextcards ,
			wtextcard ,
			wnavall,
			wdropdown,
		},
		data() {
			return {
				val:'',
				val1:'2021年',
				val2:'第一季度',
				isActive:1,
				droplist:{name:"全部",list:[{content:"2019"},{content:"2020"},{content:"2021"}]},
				droplist1:{name:"全部",list:[{content:"2019"},{content:"2020"}]},
				droplist2:{name:"全部",list:[{content:"第一季度"},{content:"第二季度"},{content:"第三季度"},{content:"第四季度"}]},
				text4list:[],
				text4lists:[{content:"电费滚滚根据客户",state:"回复",time:"2020.1.13"},
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
				],
				text4listss:[{suggest:"电费滚滚根据客户",name:"回复",time:"2020.1.13",condition:"打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"张三",time:"2019.1.13",condition:"打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"回复",time:"2019.1.13",condition:"打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"李四",time:"2020.1.13",condition:"打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"回复",time:"2020.1.13",condition:"打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"王五",time:"2019.1.13",condition:"打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"回复",time:"2020.1.13",condition:"打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"赵六",time:"2020.1.13",condition:"打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"回复",time:"2020.1.13",condition:"打广告的THX绕太阳"},]
			}
		},
		onLoad() {
			this.text4list= this.text4lists 
		},
		methods: {
			changestate(n){
				this.isActive = n
				this.text4list=[]
			},
			searchdrop(val){
				this.text4list=[]
				this.val = val.content
				this.text4lists.filter((item)=>{
					if(item.time.match(this.val)){
						this.text4list.push(item)
					}
				})
			},
			searchdrop1(val){
				this.val1 = val.content+'年'
				this.text4list=[]
				this.text4listss.filter((item)=>{
					if(item.time.match(val.content)){
						this.text4list.push(item)
					}
				})
			},
			searchdrop2(val){
				this.val2 = val.content
			}
		}
	}
</script>

<style>
	page{
		height: 100%;
	}
	.textfour{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #FFFFFF;
	}
	.textfourimg{
		width: 100%;
	}
	.textnavs{
		display: flex;
		justify-content: center;
		border-bottom: #e6e6e6 solid 1px;
	}
	.textnav{
		width: 45%;
		text-align: center;
		font-weight: bold;
		line-height: 40px
	}
	.textnavchange{
		color: #b50000;
		border-bottom: #b50000 solid 2px;
	}
	.textcontentone{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10px 0;
	}
	.wdroplist{
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}
	.textfourbar{
		font-weight: bold;
		font-size: 18px;
		margin: 10px 0;
	}
	.textmaincon{
		height:70%;
		flex: 1;
	}
	.textmassage{
		display: block;
		margin-top: 50px;
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		font-family: 黑体;
		color: red;
	}
	.textmainlist{
		padding-bottom: 10px;
	}
</style>
