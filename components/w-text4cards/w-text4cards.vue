<template>
	<view class="text4card2">
		<view class="text4row">
			<view class="card2title" style="font-weight: bold;">代表姓名：</view>
			<view class="">{{list.name}}</view>
			<view style="font-weight: bold;" class="card2title">序号：</view>
			<view>{{num+1}}</view>
		</view>
		<view class="text4row" style="font-size: 15px;">
			<view class="card2title">代表建议：</view>
			<view class="card2row">{{list.suggest}}</view>
		</view>
		<hr>
		<view class="text4row" style="font-size: 15px;">
			<view class="card2title">意见处理情况：</view>
			<view class="card2row">{{list.condition}}</view>
		</view>
			<hr>
		<view class="text4row" style="font-size: 15px;">
			<view class="card2title">提出时间：</view>
			<view class="card2row">{{list.time}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: Object,
			num: Number
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.text4card2 {
		margin: 20px 10px;
		box-shadow: 1px 1px 10px #ccc;
		border-radius: 4px;
		display: block;
		padding: 10px;
		box-sizing: border-box;
		font-size: 17px;
	}

	.card2title {
		width: 35%;
		display: inline-block;
		text-align: right;
		padding-right: 5px;
	}

	.text4row {
		display: flex;
		margin: 5px 0;
	}

	.card2row {
		flex: 1;
	}
</style>
