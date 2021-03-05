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
			<view class="index_item" v-for="(item,index) in multiple" :key="item.id" @click="btnitem(index)">
				<u-image :src="item.image" :lazy-load="true" width="100rpx" height="100rpx">
					<u-loading slot="loading"></u-loading>
				</u-image>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="index_bottom">
			<view class="index_btn"><u-icon name="chat" color="#fff" size="38" style="padding-right: 30rpx;"></u-icon><text>站长留言</text></view>
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
				multiple:[
					{id:1,name:'概况',image:'../../static/liaison/common_index_gk.png'},
					{id:2,name:'代表阵地',image:'../../static/liaison/common_index_dbzd.png'},
					{id:3,name:'活动纪实',image:'../../static/liaison/common_index_hdjs.png'},
					{id:4,name:'一季一星',image:'../../static/liaison/common_index_yjyx.png'},
					{id:5,name:'选民接待',image:'../../static/liaison/common_index_xmjd.png'},
					{id:6,name:'意见建议',image:'../../static/liaison/common_index_yjjy.png'},
					{id:7,name:'履职管理',image:'../../static/liaison/common_index_lzgl.png'},
					{id:8,name:'履职活动',image:'../../static/liaison/common_index_lzhd.png'},
					{id:9,name:'地图导航',image:'../../static/liaison/common_index_dtdh.png'}
				]
				
			}
		},
		onLoad(options) {
			this.id = options.id
			if(this.id==2){
				// 西南
				this.bgimg = this.bgimgarr[1]
			}else if(this.id==5){
				// 张庆
				this.bgimg = this.bgimgarr[2]
			}else{
				// 通用
				this.bgimg = this.bgimgarr[0]
			}
		},
		methods: {
			btnitem(index){
				console.log(index)
			}
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
		justify-content: center;
		padding-top: 20rpx;
	}
	.index_item{
		width: 200rpx;
		height: 200rpx;
		margin: 0 20rpx;
		display: flex;
		flex-direction: column;
		padding: 30rpx 6rpx;
		border-radius: 10rpx;
		box-shadow: 1px 1px 2px #555;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		margin-top: 40rpx;
		background-color: rgba(255,255,255,0.8);
		color: #000;
	}
	.index_bottom{
		display: flex;
		justify-content: center;
		padding-top: 80rpx;
	}
	.index_btn{
		width: 40%;
		height: 80rpx;
		background: #e40404;
		color: #fff;
		border-radius: 14rpx;
		padding: 0 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32rpx;
		box-shadow: 1px 1px 2px #999;
		font-family: 黑体;
	}
</style>
