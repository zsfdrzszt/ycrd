<template>
	<view class="administration">
		<view class="status_bar"></view>
		<image src="../../static/liaison/liasons_common_rules_title.jpg" mode="widthFix" style="width: 100%;"></image>
		<view class="administration_title">
			<text :class="{textnavchange:1==isActive }" @click="changestate(1)">人大代表履职管理制度</text>
			<text :class="{textnavchange:2==isActive }" @click="changestate(2)">履职能力提升</text>
		</view>
		<scroll-view scroll-y="true" v-show="1 == isActive">
			<view>
				<system v-for="(value,index) in txt" :content="value.content" :url="'/pages/liaison/gkdet'"></system>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" v-show="2 == isActive">
			<view>
				<system v-for="(value,index) in txt1" :content="value.content" :time="value.time" :url="'/pages/liaison/gkdet'"></system>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import system  from "../../components/system/system.vue"      //履职管理制度组件
	export default {
		components:{
			system
		},
		data() {
			return {
				isActive:1,
				txt:[{content:"人大代表接待选民制度"},{content:"人大代表联系选民制度"},{content:"人大代表走访选民制度"},{content:"人大代表接待选民制度"}],
				txt1:[{content:"人大代表联系选民制度",time:"2021-3-5"},{content:"人大代表走访选民制度",time:"2020-3-5"},{content:"人大代表接待选民制度",time:"2020-2-1"}],
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
	page {
		height: 100%;
		width: 100%;
	}
	.administration{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
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
</style>
