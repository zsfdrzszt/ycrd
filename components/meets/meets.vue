<template>
	<view class="meet_list">
		<view class="meet_row">
			<text>序号</text>
			<text>{{num+1}}</text>
		</view>
		<view class="meet_row">
			<text>会议名称</text>
			<text>{{list.txt}}</text>
		</view>
		<view class="meet_row">
			<text>会期</text>
			<text></text>
		</view>
		<view class="meet_rows">
			<text>开会日期</text>
			<text>{{list.time}}</text>
		</view>
		<view class="meet_rows">
			<text>闭会日期</text>
			<text>{{list.time}}</text>
		</view>
		<view class="meet_row">
			<text>履职情况</text>
			<text></text>
		</view>
		<view class="meet_rows">
			<text>参加全体会议情况</text>
			<text>按规定时间参会</text>
		</view>
		<view class="meet_rows">
			<text>分团审议发言情况</text>
			<text>发言0次</text>
		</view>
		<view class="meet_rows">
			<text>投票表决情况</text>
			<text>参加投票表决</text>
		</view>
		<view class="meet_rows">
			<text>提出意见建议情况</text>
			<text>{{list.int}}</text>
		</view>
		<view class="meet_row">
			<text>参会考勤情况</text>
			<text>{{list.con}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		// props:['list'],
		props:{
			list:Object,
			num:Number
		},
		data() {
			return {
				
			}
		},
		methods: {
		
		}
	}
</script>

<style>
page{
	width: 100%;
	height: 100%;
}
.meet_list{
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
.meet_rows{
	display: flex;
	font-size: 16px;
	margin: 10px;
	line-height: 30px;
	padding-bottom: 5px;
	box-sizing: border-box;
	margin-top: 5px;
	justify-content: space-between;
	text-align: right;
	color: #777777;
}
</style>
