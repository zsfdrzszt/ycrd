<template>
	<view class="feedback">
		<view class="status_bar"></view>
		<!-- banner图 -->
		<image class="feedback_image" src="/static/user/user_feetback_back.jpg" mode="widthFix"></image>
		<!-- 文本框 -->
		<view class="feedback_word">
			  <textarea class="textarea" v-model="txt" placeholder="请输入反馈意见 "></textarea>
			  <button type="warn" size="mini" @click="goto('')" class="feedback_btn">提交</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				txt:''
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.feedback{width: 100%;height: 100%;}
	.feedback_image{width: 100%;}
	.feedback_word{padding: 10px;display: flex;flex-direction: column;justify-content: center;}
	.feedback_word .textarea{width: 100%;height: 150px;border-radius: 10px;padding: 10px;box-sizing: border-box;resize: none;border: none;box-shadow: 1px 1px 3px #ccc;font-size: 14px;}
	.feedback_btn{margin-top: 20px;width: 200px;padding: 5px 0px;}
</style>
