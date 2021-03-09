<template>
	<view class="person" @click="nextpage">
		<view class="pimage">
			<u-image :src="image" :lazy-load="true" width="180rpx" mode="widthFix">
				<u-loading slot="loading"></u-loading>
			</u-image>
		</view>
		<view class="right">
			<view class="quater">{{quater}}</view>
			<view >{{name}}</view>
			<view>{{step}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			nextpage(){
				this.$emit("nextpage",this.id)
			}
		},
		props:['image','quater','name','step','id']
	}
</script>

<style>
	.person{
		margin: 30rpx 20rpx;
		box-shadow: 1px 1px 10px #ccc;
		display: flex;
		padding: 20rpx 0;
		box-sizing: border-box;
	}
	.pimage{
		width: 240rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.right{
		flex: 1;
		padding:20rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		font-size: 36rpx;
		justify-content: space-between;
	}
	.quater{
		font-weight: bold;
		color: red;
		font-size: 40rpx;
	}
</style>
