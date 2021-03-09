<template>
	<navigator url="" hover-class="none">
		<!-- 个人中心/联系常委/我的留言组件-->
		<view class="message">
			<view class="message_name">
				<text class="message_leftname">{{name}}</text>
				<text class="message_centname">{{time}}</text>
				<text class="message_rightname" v-if="type==true">({{status}})</text>
			</view>
			<view class="message_leave">
				{{leave}}
			</view>
			<view class="message_replyword" v-if="reply!=''">回复：</view>
			<view class="message_reply" v-if="reply!=''">
				{{reply}}
			</view>
		</view>
	</navigator>
</template>

<script>
	export default {
		props:{
			name:String,
			time:String,
			status:String,
			leave:String,
			reply:String,
			type:Boolean
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.message{box-shadow: 1px 1px 3px #ccc;border-radius: 5px;background: #fff;padding: 10px;font-size: 16px;margin-bottom: 10px;}
	.message_name{display: flex;justify-content: space-between;}
	.message_leftname,.message_centname,.message_rightname{font-weight: bold;font-size: 14px;}
	.message_leave,.message_reply{font-size: 14px;line-height: 20px;text-indent: 2em;padding-top: 5px;text-align: justify;}
	.message_replyword{font-size: 14px;padding-top: 5px;}
</style>
