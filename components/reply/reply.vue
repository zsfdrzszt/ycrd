<template>
	<view class="reply">
		<view class="reply_star">
			<image style="width: 15px;" src="./static/county_common_index_hot.png" mode="widthFix" v-if="list.state"></image>
		</view>
		<view class="reply_main">
			<view class="">
				{{list.content}}
			</view>
			<view class="reply_time">
				{{list.name}}发表于：{{list.time}}
			</view>
			<view class="reply_gray">
				<view class="">
					{{list.reply.content}}
				</view>
				<view class="reply_time">
					{{list.reply.name}}代表回复时间：{{list.reply.time}}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			list:Object
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.reply{
	width: 100%;
	margin: 0 auto;
	line-height: 20px;
	display: flex;
}
.reply_main{
	width: 90%;
}
.reply_star{
	display: flex;
	justify-content: center;
}
.reply_time{
	color: #5E76C3;
	font-size: 15px;
}
.reply_gray{
	width: 95%;
	border-radius: 10px;
	background-color: #e3e3e3;
	padding: 20rpx 0 20rpx 20rpx;
	margin: 10rpx;
}
.reply_star{
	width: 10%;
}
</style>
