<template>
<view class="padding">
	<view class="qrservice-section">
	
		<view class="qrservice_img">
			<image class="title_img" :src="value.url" mode="widthFix"></image>
		</view>
		<text class="qrservice_title">{{value.name}}</text>
	
		<view class="qrservice_flex">
			<view>
				届别
			</view>
			<view>
				{{value.thedont}}
			</view>
		</view>
	
		<view class="qrservice_flex">
			<view>
				职务
			</view>
			<view>
				{{value.duty}}
			</view>
		</view>
	
		<view class="qrservice_flex">
			<view>
				邮箱
			</view>
			<view>
				{{value.mill}}
			</view>
		</view>
	
	
		<view class="qrservice_flex">
			<view>
				履职承诺
			</view>
			<view>
				{{value.promise}}
			</view>
		</view>
	
		<view class="qrservice_flex">
			<view>
				特色服务
			</view>
			<view>
	
			</view>
		</view>
	
		<navigator class="a" url="#">
			<image src="https://hxrd.jza2c.com//resource/m/images/liasons_common_qrservice_ly.png" mode="widthFix"></image>
		</navigator>
	
		<navigator class="a" url="/pages/meet/meet">
			<image src="https://hxrd.jza2c.com//resource/m/images/liasons_common_qrservice_rdhqj.png" mode="widthFix"></image>
		</navigator>
	
		<navigator class="a" url="/pages/general/close/close">
			<image src="https://hxrd.jza2c.com/resource/m/images/liasons_common_qrservice_bhqj.png" mode="widthFix"></image>
		</navigator>
	
	</view>
</view>
</template>

<script>
	export default {
		props: {
			value: Object
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.qrservice-section {
		position: relative;
		text-align: center;
		margin: 10px 20px;
		background-color: white;
		box-shadow: #666 0px 0px 10px;
		border-radius: 16px;
		padding-bottom: 30px;
		padding-top: 30px;
		margin-top: 30px;
		margin-bottom: 30px;
	}
	.padding {
		padding: 20px 0;
	}
	.qrservice_img {
		text-align: center;

	}

	.title_img {
		width: 40%;
	}

	.qrservice_flex>view:nth-child(1) {
		width: 64px;
		font-weight: bold;
		font-size: 16px;
		text-align: justify;
		text-align-last: justify;
		height: 30px;
	}

	.qrservice_flex>view:nth-child(2) {
		flex: 1;
		word-break: break-word;
		margin-left: 10px;
		text-align: justify;
		font-size: 16px;
	}

	.qrservice_title {
		text-align: center;
		font-weight: bold;
		font-size: 18px;
		margin-top: 10px;
		margin-bottom: 20px;
	}

	.qrservice_flex {
		margin: 10px 20px;
		border-bottom: 1px solid #ccc;
		display: flex;
		padding-bottom: 10px;
		box-sizing: border-box;
		line-height: 30px;
	}

	.a {
		color: #333;
		text-decoration: none;
	}

	* {
		margin: 0;
		padding: 0;
	}

	.a image {
		width: 70%;
		display: block;
		margin: 20px auto;
	}

	image {
		border: none;
	}
	view {
		display: block;
	}
	
	page {
		
	}
	
</style>
