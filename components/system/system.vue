<template>
	<navigator class="system" :url="url">
		<view class="">{{content}}</view>
		 <view class="system_time" v-if="time">{{time}}</view>
	</navigator>
</template>

<script>
	export default {
		props:{
			content:String,
			time:String,
			url:String
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.system{
	width: 90%;
	margin: 15px 10px;
	box-shadow: 1px 1px 10px #ccc;
	display: block;
	padding: 10px 5px;
	line-height: 30px;
}
.system_time{
	width: 100%;
	text-align: right;
}
</style>
