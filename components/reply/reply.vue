<template>
	<view class="reply">
		<view class="">
			{{list.content}}
		</view>
		<view class="reply_time">
			{{list.name}}发表于：{{list.time}}
		</view>
		<view class="">
			<view class="">
				{{list.reply.content}}
			</view>
			<view class="reply_time">
				{{list.reply.name}}代表回复时间：{{list.reply.time}}
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
	width: 90%;
	margin: 0 auto;
	
}
.reply_time{
	color: #5E76C3;
	    font-size: 15px;
}
</style>
