<template>
	<view class="message">
		<view class="message_row">
			<text>序号</text>
			<text>{{num+1}}</text>
		</view>
		<view class="message_row">
			<text>提出时间</text>
			<text>{{list.time}}</text>
		</view>
		<view class="message_row">
			<text>建议意见内容</text>
			<text></text>
		</view>
		<view class="message_rows">
			<text>{{list.txt}}</text>
		</view>
		<view class="message_row">
			<text>承办代会</text>
			<text>{{list.con}}</text>
		</view>
		<view class="message_row">
			<text>办理答复情况</text>
			<text></text>
		</view>
		<view class="message_rows">
			<text>{{list.jie}}</text>
		</view>
		<view class="message_row">
			<text>查看图片</text>
			<text></text>
		</view>
		<view class="message_image">
			<image src="http://qiniu.jza2c.com/uploads/20190729/FucxO7PfGJ-jA0VUxiocMHzrj780.jpg" style="width: 30%;"  mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:Object,
			num:Number
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
page{
	width: 100%;
	height: 100%;
}
.message{
	margin: 15px 10px;
	border-radius: 8px;
	border: 1px solid red;
}
.message_row{
	display: flex;
	justify-content: space-between;
	font-size: 16px;
	margin: 10px;
	border-bottom: 1px solid #ccc;
	line-height: 30px;
	padding-bottom: 5px;
	box-sizing: border-box;
	margin-top: 5px;
}
.message_row>text:first-child{
	width: 64px;
	text-align: justify;
	text-align-last: justify;
	font-weight: bold;
}
.message_row>text:last-child {
    margin-left: 10px;
    text-align: right;
    color: #777777;
}
.message_rows{
	padding: 10px 0;
	font-size: 14px;
	line-height: 28px;
	text-indent: 2em;
	border-bottom: 1px solid #ccc;
	margin: 0 10px;
	color: #777777;
	padding-top: 0;
}
.message_image{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.message_image image{
	margin: 0 1.5% 20px;
}
</style>
