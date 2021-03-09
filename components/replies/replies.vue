<template>
	<view class="reply_center">
		<view class="reply_item">
			<view class="reply_name">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</view>
			<view class="reply_spot">:</view>
			<view class="reply_names">{{list.name}}</view>
		</view>
		<view class="reply_item">
			<view class="reply_name">联系电话</view>
			<view class="reply_spot">:</view>
			<view class="reply_names">{{list.tel}}</view>
		</view>
		<view class="reply_item">
			<view class="reply_name">留言时间</view>
			<view class="reply_spot">:</view>
			<view class="reply_names">{{list.time}}</view>
		</view>
		<view class="reply_item">
			<view class="reply_name">留言标题</view>
			<view class="reply_spot">:</view>
			<view class="reply_names">{{list.title}}</view>
		</view>
		<view class="reply_item">
			<view class="reply_name">热&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点</view>
			<view class="reply_spot">:</view>
			<view class="reply_names">其它</view>
		</view>
		<view class="reply_item">
			<view class="reply_name">问&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;题</view>
			<view class="reply_spot">:</view>
			<view class="reply_names">{{list.que}}</view>
		</view>
		<view class="reply_item">
			<view class="reply_name">图&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;片</view>
			<view class="reply_spot">:</view>
		</view>
		<view class="reply_image">
			<view class="image_item">
				<image :src="list.imgUrl" style="width: 100%;"></image>
			</view>
		</view>
		<view class="reply_item">
			<view class="reply_name">回复代表</view>
			<view class="reply_spot">:</view>
			<view class="reply_names">{{list.dai}}</view>
		</view>
		<view class="reply_item">
			<view class="reply_name">回复</view>
			<view class="reply_spot">:</view>
			<view class="reply_text">
				<textarea class="textarea" disabled="disabled">。。。</textarea>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:Object,
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.reply_center{
	border: 1px solid #ee0000;
	border-radius: 8px;
	background-color: #fff;
}
.reply_item{
	margin: 10px;
	display: flex;
	align-items: center;
	line-height: 30px;
	border-bottom: 1px solid #ccc;
	font-size: 15px;
}
.reply_name{
	width: 64px;
	text-align: justify;
	text-align-last: justify;
	font-weight: bold;
}
.reply_names{
	flex: 1;
	padding: 0 10px;
}
.reply_spot{
	line-height: 30px;
	font-weight: bold;
}
.reply_image{
	clear: both;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding-bottom: 10px;
}
.reply_image image{
	position: absolute;
	top: 0;
	left: 0%;
	width: 100%;
	height: 100%;
}
.image_item{
	position: relative;
	width: 30%;
	margin-left: 2.5%;
	height: 0;
	padding-bottom: 30%;
}
.reply_text{
	width: 100%;
	padding: 0 10px;
	box-sizing: border-box;
	padding-right: 0;
	margin-bottom: 10px;
}
.textarea{
	width: 100%;
	resize: none;
	height: 100px;
	padding: 5px;
	box-sizing: border-box;
	background: #eee;
}
</style>
