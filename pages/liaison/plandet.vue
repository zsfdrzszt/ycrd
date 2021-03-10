<template>
	<view>
		<view v-if="type==1">
			<u-image src="../../static/liaison/common_plandet_title.jpg" :lazy-load="true" mode="widthFix">
				<u-loading slot="loading"></u-loading>
			</u-image>
		</view>
		<view v-else>
			<u-image src="../../static/liaison/common_detailedlistdet_title.jpg" :lazy-load="true" mode="widthFix">
				<u-loading slot="loading"></u-loading>
			</u-image>
		</view>
		<view class="arrange" v-if="type==1">
			<view class="arrange_list">
				<text class="arrange_left">标       题</text>
				<text class="arrange_center">:</text>
				<view class="arrange_right">{{title}}</view>
			</view>
			<view class="arrange_list">
				<text class="arrange_left">活动名称</text>
				<text class="arrange_center">:</text>
				<view class="arrange_right">{{activename}}</view>
			</view>
			<view class="arrange_list">
				<text class="arrange_left">召集人</text>
				<text class="arrange_center">:</text>
				<view class="arrange_right">{{persons}}</view>
			</view>
			<view class="arrange_list">
				<text class="arrange_left">活动地点</text>
				<text class="arrange_center">:</text>
				<view class="arrange_right">{{position}}</view>
			</view>
			<view class="arrange_list">
				<text class="arrange_left">开始时间</text>
				<text class="arrange_center">:</text>
				<view class="arrange_right">{{starttime}}</view>
			</view>
			<view class="arrange_list">
				<text class="arrange_left">结束时间</text>
				<text class="arrange_center">:</text>
				<view class="arrange_right">{{endtime}}</view>
			</view>
			<view class="arrange_list1">
				<text  class="arrange_top">活动内容及要求:</text>
				<view class="arrange_bottom">{{requirement}}</view>
			</view>
			<view class="arrange_list1">
				<text  class="arrange_top">办理内容:</text>
				<view class="arrange_con">
					<u-parse class="pages" :html="content" :tag-style="contentstyle"></u-parse>
				</view>
			</view>
		</view>
		<view class="arrange" v-else>
			<view class="arrange_list">
				<text class="arrange_left">标       题</text>
				<text class="arrange_center">:</text>
				<view class="arrange_right">{{title}}</view>
			</view>
			<view class="arrange_list">
				<text class="arrange_left">开始时间</text>
				<text class="arrange_center">:</text>
				<view class="arrange_right">{{starttime}}</view>
			</view>
			<view class="arrange_list">
				<text class="arrange_left">结束时间</text>
				<text class="arrange_center">:</text>
				<view class="arrange_right">{{endtime}}</view>
			</view>
			<view class="arrange_list1">
				<text  class="arrange_top">实事项目:</text>
				<view class="arrange_bottom">{{activename}}</view>
			</view>
			<view class="arrange_list1">
				<text  class="arrange_top">办理内容:</text>
				<view class="arrange_con">
					<u-parse class="pages" :html="content" :tag-style="contentstyle"></u-parse>
				</view>
			</view>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default {
		components:{
			wnavall
		},
		data() {
			return {
				type:'',
				contentstyle: {
					'.pages table': 'width:100% !important',
					'.pages td':'border-bottom:1px solid #f5f5f5',
					'.pages img':'display:block;width:80%;margin:0 auto;',
					'.pages div':'width:100% !important',
					'.pages p':'text-indent: 2em;font-size:16px!important;',
					'.pages span':'font-size:16px!important;',
				},
				content:'<p style="text-align: center; text-indent: 0px;"><img src="http://qiniu.jza2c.com/uploads/20200602/FmSIisAFityILL5hbccvEMylYAMr.jpg" alt=""></p><p style="text-indent:2em;"><span style="line-height:2;font-family:FangSong;font-size:24px;">清明节来临之前，郭家堡乡未雨绸缪，发布了禁火令，监督各文明出行、文明祭奠、文明就餐。将宣传手册逐村入户，并在各村交通要道岔路口悬挂临时宣传标语。</span></p>',
				title:'标题',
				activename:'活动名称',
				persons:'任光荣 任光荣',
				position:'地点',
				starttime:'开始时间',
				endtime:'结束时间',
				requirement:'活动内容及要求'
			}
		},
		onLoad(options) {
			this.type = options.tid
			if(this.type==1){
				// 集中活动计划安排
				
			}else{
				// 民生实事项目清单
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.arrange{
		width: 90%;
		margin: 30rpx auto ;
		border: 1px solid #d71f07;
		border-radius: 5px;
		box-shadow: 1px 1px 10px #ccc;
	}
	.arrange_list{
		display: flex;
		border-bottom: 1px solid #ccc;
		padding: 0 20rpx;
		box-sizing: border-box;
		margin-top: 5px;
	}
	.arrange_left{
		width: 150rpx;
		text-align: justify;
		text-align-last: justify;
		font-weight: bold;
		font-size: 36rpx;
		line-height: 60rpx;
	}
	.arrange_center{
		font-size: 36rpx;
		line-height: 60rpx;
		font-weight: bold;
		margin-right: 20rpx;
	}
	.arrange_right{
		flex: 1;
		line-height: 60rpx;
		font-size: 32rpx;
	}
	.arrange_list1{
		margin-top: 20rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	.arrange_top{
		font-weight: bold;
		font-size: 18px;
		line-height: 30px;
	}
	.arrange_bottom{
		border: 0.5px solid #ccc;
		background-color: #F5F5F5;
		line-height: 60rpx;
		padding: 0 20rpx;
		text-indent: 2em;
		border-radius: 2px;
	}
	.arrange_con{
		margin: 10px;
		font-size: 32rpx;
		line-height: 2;
	}
</style>
