<template>
	<view class="message">
		<view class="meet_row">
			<text>序号</text>
			<text>{{num+1}}</text>
		</view>
		<view class="meet_row">
			<text>提出时间</text>
			<text>{{list.txt}}</text>
		</view>
	</view>
</template>

<script>
	export default {
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
.meet_row{
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
.meet_row>text:first-child{
	width: 64px;
	text-align: justify;
	text-align-last: justify;
	font-weight: bold;
}
.meet_row>text:last-child {
    margin-left: 10px;
    text-align: right;
    color: #777777;
}
</style>
