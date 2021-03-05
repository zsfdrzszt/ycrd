<template>
	<view class="arrange">
		<view class="arrange_list">
			时间
			<view>{{list.time}}</view>
		</view>
		<view class="arrange_list">
			活动名称
			<view>{{list.title}}</view>
		</view>
		<view class="arrange_list">
			{{list.space}}
		</view>
		<view class="arrange_list">
			{{list.name}}
		</view>
		<view class="arrange_list">
			{{list.content}}
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
.arrange{
	width: 90%;
	border: 1px solid #d71f07;
	border-radius: 5px;
	box-shadow: 1px 1px 10px #ccc;
}
.arrange_list{
	border: 1px solid #d71f07;
	height: 40px;
	margin: 10px;
	display: flex;
	box-shadow: 1px 1px 10px #ccc;
	border-radius: 4px;
}
</style>
