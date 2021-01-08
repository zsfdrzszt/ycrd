<template>
	<!-- 人员卡片 -->
	<view class="usermain">
		<view class="userleft">
			<image :src="value.url" class="userimg" mode="widthFix" ></image>
		</view>
		<view class="userright">
			<view class="usercard">
				<text >姓名：{{value.name}}</text>				<br>
				<text>代表级别：{{value.classspace}}</text>				<br>
				<text>岗位：{{value.job}}</text>				<br>
				<text>联络站：{{value.space}}</text>				<br>
                <view class="buttons">
					<view class="userbutton">留言</view>
					<view class="userbutton">查看详情</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			value:Object
		},
		data() {
			return {
			};
		}
	}
</script>

<style scoped>
.usermain{
	margin: 15px 10px;
	box-shadow: 1px 1px 10px #ccc;
	padding: 10px 0;
	box-sizing: border-box;
	background-color: white;
	border-radius: 4px;
	width: 95%;
	display: flex;
	text-align: left;
}
.userimg{
	width: 100%;
}
.userleft{
	display: flex;
	flex: 0.8;
	border-radius: 10px;
	overflow: hidden;
	margin: 5% 5%;
}
.userright{
	width: 60%;
}
.usercard{
	font: 14px Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;
}
.usercard text{
	line-height: 25px;
}
.buttons{
	display: flex;
}
.userbutton{
	border-radius: 10px;
	background-color: red;
	padding: 5px 10px;
	margin:  10px;
	color: #FFFFFF;
}
</style>
