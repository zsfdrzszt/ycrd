<template>
	<!-- 履职共享 -->
	<navigator url="navigate/navigate?title=navigate" hover-class="none">
		<view class="centershare">
			<view class="centershare_title">
				{{num}}、{{title}}
			</view>
			<view class="centershare_cont">
				<view class="centershare_leftcont">
					<text class="word" v-if="status=='正常'" :style="{background:word1}">{{status}}</text>
					<text class="word" v-if="status=='紧急'" :style="{background:word2}">{{status}}</text>
					<text class="word" v-if="status=='非常紧急'" :style="{background:word3}">{{status}}</text>
 					<text>{{time}}</text>
				</view>
				<view class="centershare_rightcont">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
	</navigator>
</template>

<script>
	export default {
		props:{
			num:Number,
			title:String,
			status:String,
			time:String
		},
		data() {
			return {
				word1:'#5cb85c',
				word2:'#f0ad41',
				word3:'#d9534f'
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.centershare{width: 100%;background-color: #FFFFFF;border-radius: 5px;padding: 8px;margin-bottom: 10px;}
	.centershare_title{font-size: 16px;color:#333333;}
	.centershare_cont{line-height: 50px;display: flex;justify-content: space-between;}
	.word{color: #FFFFFF;border-radius: 5px;padding: 2px 5px;margin-right: 10px;}
	.centershare_leftcont{font-size: 16px;color: #333333;}
	
</style>
