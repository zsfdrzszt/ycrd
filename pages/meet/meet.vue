<template>
	<view class="meet">
		<view class="status_bar"></view>
		<view class="meet_title">
			<text :class="{textnavchange:1==isActive }" @click="changestate(1)">参会情况</text>
			<text :class="{textnavchange:2==isActive }" @click="changestate(2)">人代会建议</text>
		</view>
		<view class="scroll-view " v-show="isActive == 1">
			<scroll-view scroll-y="true" height="100%">
				<meets v-for="(item,index) in list" :list="item" :num="index" ></meets>
			</scroll-view>
		</view>
		<view class="scroll-view" v-show="isActive == 2">
			<scroll-view scroll-y="true" >
				<message v-for="(item,index) in list1" :list="item" :num="index"></message>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import meets from "../../components/meets/meets.vue"
	import message from "../../components/message/message.vue"
	export default {
		components: {
			meets,
			message
		},
		data() {
			return {
				isActive: 1,
				list: [{
					txt: '2020年5月27日郭家堡乡第十七届人民代表大会第七次会议',
					time: '2020-5-27',
					int: '提出建议0件',
					com: '全勤'
				},{
					txt: '2020年5月27日郭家堡乡第十七届人民代表大会第七次会议',
					time: '2020-5-27',
					int: '提出建议0件',
					com: '全勤'
				}],
				list1: [{
					txt: '关于撤村转居之后农民独生子女家庭补助金的遗留问题',
					time: '2020-04-25',
					con: '区人代会',
					jie:'办理中'
				},{
					txt: '2020年5月27日郭家堡乡第十七届人民代表大会第七次会议',
					time: '2020-04-25',
					com: '区人代会',
					jie:'办理中'
				}]
			}
		},
		methods: {
			changestate(n) {
				this.isActive = n
			},
		}
	}
</script>

<style>
	page {
		width: 100%;
	}

	.meet {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-image: url(../../static/create/common_bg.jpg);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		display: flex;
		flex-direction: column;
	}

	.meet_title {
		width: 100%;
		height: 41px;
		display: flex;
		flex-wrap: wrap;
		border-bottom: 1px solid #ff0000;
	}

	.meet_title text {
		width: 50%;
		height: 41px;
		line-height: 41px;
		padding: 0 !important;
		text-align: center;
		font-weight: bold;
	}

	.textnavchange {
		color: #d71f07;
		border-bottom: #d71f07 solid 2px;
	}

	.meet_con {
		width: 100%;
		height: auto;
	}

	.scroll-view {
		height: 90%;
		overflow: auto;
	}

	.meet_list {
		margin: 15px 10px;
		border-radius: 8px;
		border: 1px solid red;
	}
</style>
