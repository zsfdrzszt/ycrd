<template>
	<view class="newcon">
		<text class="newtext">{{list.titel}}</text>
		<view style="text-align: right;">{{list.time}}</view>
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

<style scoped>
.newcon{
	width: 90%;
	margin: 10px auto;
	padding: 10px;
	box-sizing: border-box;
	border-bottom: 1px solid #ccc;
	font-size: 15px;
	text-align: left;
	line-height: 26px;
	background-color: white;
	border-radius: 5px;
	box-shadow: 1px 1px 10px #ccc;
	font: 14px Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;
}
.newtext{
	display: block;
	min-height: 54px;
	text-indent: 10px;
	line-height: 20px;
}
</style>
