<template>
	<view class="all">
		<view class="status_bar"></view>
		<view>
			<u-image src="@/static/user/user_duties_lvzhis.png" :lazy-load="true" mode="widthFix">
				<u-loading slot="loading"></u-loading>
			</u-image>
		</view>
		<view class="content">
			<navigator class="link" :url="item.link" v-for="(item,index) in imgarr" :key="index">
				<u-image :src="item.image" :lazy-load="true" mode="widthFix">
					<u-loading slot="loading"></u-loading>
				</u-image>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgarr:[
					{image:'../../../static/user/user_duties_rdhch.png',link:'/pages/user/dutiesdet/dutiesdet?type='+0},
					{image:'../../../static/user/user_duties_rdhyj.png',link:'/pages/user/dutiesdet/dutiesdet?type='+1},
					{image:'../../../static/user/user_duties_bglz.png',link:'/pages/user/dutiesdet/dutiesdet?type='+2},
					{image:'../../../static/user/user_duties_bihuiyj.png',link:'/pages/user/dutiesdet/dutiesdet?type='+3}
				]
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
		background-image: url(../../../static/create/common_bg.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.all{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.content{
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 50rpx;
	}
	.link{
		width: 85%;
		padding-top: 30rpx;
	}
</style>
