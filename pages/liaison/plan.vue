<template>
	<view>
		<view>
			<u-image src="../../static/liaison/common_plan_title.jpg" :lazy-load="true" mode="widthFix">
				<u-loading slot="loading"></u-loading>
			</u-image>
		</view>
		<view class="administration_title">
			<text :class="{textnavchange:1==isActive }" @click="changestate(1)">人大代表履职管理制度</text>
			<text :class="{textnavchange:2==isActive }" @click="changestate(2)">履职能力提升</text>
		</view>
		<scroll-view scroll-y="true" v-show="1 == isActive">
			<view>
				<arrange :list="item" v-for="(item,index) in list"></arrange>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" v-show="2 == isActive">
			<view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import arrange from "../../components/arrange/arrange.vue"
	export default {
		data() {
			return {
				isActive:1,
			}
		},
		methods: {
			changestate(n){
				this.isActive = n
			},
		},
		components:{
			arrange
		}
	}
</script>

<style>
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
