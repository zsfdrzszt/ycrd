<template>
	<view class="index_all" :style="{backgroundImage:bgimg}">
		<!-- common 张庆 -->
		<view class="index_top" v-show="lid!=2">
			<view class="index_topimg">
				<u-image src="../../static/liaison/common_index_topimg.png" :lazy-load="true" width="150rpx" height="160rpx">
					<u-loading slot="loading"></u-loading>
				</u-image>
			</view>
			<view class="index_title">{{lianame}}</view>
		</view>
		<view class="index_center">
			<view class="index_item">
				<u-image src="../../static/liaison/common_index_topimg.png" :lazy-load="true" width="150rpx" height="160rpx">
					<u-loading slot="loading"></u-loading>
				</u-image>
				<text>概况</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lianame:'郭家堡乡人大代表联络站',//联络站名称
				lid:'',	//联络站id
				bgimg:"url(../../static/liaison/common_index_bgimg.jpg)",	//联络站背景图
				bgimgarr:["url(../../static/liaison/common_index_bgimg.jpg)","url(../../static/liaison/xnjd_index_bgimg.png)","url(../../static/liaison/zq_index_bgimg.jpg)"],
				
			}
		},
		onLoad(options) {
			this.id = options.id
			if(this.id==2){
				// 西南
				this.bgimg = arr[1]
			}else if(this.id==5){
				// 张庆
				this.bgimg = arr[2]
			}else{
				// 通用
				this.bgimg = arr[0]
			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		height: 100%;
		width: 100%;
	}
	.index_all{
		height: 100%;
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.index_topimg {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 60rpx 0 20rpx;
	}


	.index_title {
		font-size: 52rpx;
		color: #c90707;
		font-weight: bold;
		text-align: center;
		font-family: 思源黑体;
		text-shadow: #fff 1px -1px 0, #fff -1px -1px 0, #fff -1px 1px 0, #fff 1px 1px 0, #fff 1px 0 0, #fff -1px 0 0, #fff 0 1px 0, #fff 0 -1px 0, 0 2px 4px #111;
	}
	.index_center{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.index_item{
		width: 200rpx;
		height: 200rpx;
		display: flex;
		flex-direction: column;
		padding: 30rpx 6rpx;
		border-radius: 10rpx;
		box-shadow: 1px 1px 2px #555;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		margin-top: 20rpx;
		background-color: rgba(255,255,255,0.8);
		color: #000;
	}
</style>
