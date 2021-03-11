<template>
	<view class="item">
		<view class="itemsort">
			<u-image src="@/static/user/user_usepa.png" :lazy-load="true" mode="widthFix" width="70rpx" v-if="index==0">
				<u-loading slot="loading"></u-loading>
			</u-image>
			<u-image src="@/static/user/user_usepp.png" :lazy-load="true" mode="widthFix" width="70rpx" v-else-if="index==1">
				<u-loading slot="loading"></u-loading>
			</u-image>
			<u-image src="@/static/user/user_usept.png" :lazy-load="true" mode="widthFix" width="70rpx" v-else-if="index==2">
				<u-loading slot="loading"></u-loading>
			</u-image>
			<view v-else>{{item.sort}}</view>
		</view>
		<view class="itemname name" @click="nextpage">
			<u-image :src="item.image" border-radius="10rpx" :lazy-load="true" mode="widthFix" width="110rpx" v-if="item.image">
				<u-loading slot="loading"></u-loading>
			</u-image>
			<text>{{item.name}}</text>
		</view>
		<view class="itemnum">{{item.num}}</view>
	</view>
</template>

<script>
	export default{
		props:['item','index'],
		methods:{
			nextpage(){
				this.$emit("click",this.item.id)
			}
		}
	}
</script>

<style>
	.name{
		flex: 1;
	}
	.item{
		font-size: 36rpx;
		margin: 20rpx auto;
		padding: 30rpx 30rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.itemsort{
		width: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.itemname{
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 0 14%;
		padding-right: 18%;
	}
	.itemnum{
		text-align: right;
		padding-right: 20rpx;
		color: orange;
	}
</style>
