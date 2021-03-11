<template>
	<view>
		<view class="status_bar"></view>
		<view>
			<u-image src="../../static/liaison/common_reception_title.jpg" :lazy-load="true" mode="widthFix">
				<u-loading slot="loading"></u-loading>
			</u-image>
		</view>
		<view class="title">
			<view class="item">2020年03月06日</view>
			<view class="item"><text>王殿胜</text><text>任光荣</text></view>
		</view>
		<view class="content">
			<u-parse class="pages" :html="content" :tag-style="contentstyle"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				contentstyle: {
					'.pages table': 'width:100% !important',
					'.pages td':'border-bottom:1px solid #f5f5f5',
					'.pages img':'display:block;width:80%;margin:0 auto;',
					'.pages div':'width:100% !important',
					'.pages p':'text-indent: 2em;font-size:16px!important;',
					'.pages span':'font-size:16px!important;',
				},
				content:'<p style="text-align: center; text-indent: 0px;"><img src="http://qiniu.jza2c.com/uploads/20200602/FmSIisAFityILL5hbccvEMylYAMr.jpg" alt=""></p><p style="text-indent:2em;"><span style="line-height:2;font-family:FangSong;font-size:24px;">清明节来临之前，郭家堡乡未雨绸缪，发布了禁火令，监督各文明出行、文明祭奠、文明就餐。将宣传手册逐村入户，并在各村交通要道岔路口悬挂临时宣传标语。</span></p>',
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.title{
		margin: 40rpx 0;
		display: flex;
	}
	.item{
		text-align: center;
		flex: 1;
		font-size: 32rpx;
	}
	.content{
		margin: 40rpx 20rpx;
	}
</style>
