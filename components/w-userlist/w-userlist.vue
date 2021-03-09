<template>
	<!-- 人员卡片 -->
	<view class="usermain" >
		<view class="userleft">
			<image :src="value.url" class="userimg" mode="widthFix" ></image>
		</view>
		<view class="userright">
			<view class="usercard">
				<view class="usercard_item">
					<text class="usercard_leftitem">姓名：</text>
					<text class="usercard_rightitem">{{value.name}}</text>
				</view>			<!-- 	<br> -->
				<view class="usercard_item">
					<text class="usercard_leftitem">代表级别：</text>
					<text class="usercard_rightitem">{{value.classspace}}</text>
				</view>
				<view class="usercard_item">
					<text class="usercard_leftitem">岗位：</text>
					<text class="usercard_rightitem">{{value.job}}</text>
				</view>		
				<view class="usercard_item" v-if="value.space">
					<text class="usercard_leftitem">联络站：</text>
					<text class="usercard_rightitem">{{value.space}}</text>
				</view>
                <view class="usercard_item buttons">
					<view class="userbutton" @click="message">留言</view>
					<view class="userbutton" @click="topage">查看详情</view>
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
		},
		methods:{
			topage(){
				uni.navigateTo({
					url:"/pages/general/liaison/liaison?id=1"
				})
			},
			message(){
				uni.navigateTo({
					url:"/pages/liaison/message?id=1"
				})
			}
		}
	}
</script>

<style scoped>
	.usermain{margin: 15px 10px;box-shadow: 1px 1px 10px #ccc;padding: 10px 10px;box-sizing: border-box;background-color: white;border-radius: 5px;width: 100%;display: flex;text-align: left;}
	/* .userimg{width: 100%;} */
	.userleft{width:80px;display: flex;justify-content: center;align-items: center;}
	.userleft .userimg{width: 100%;border-radius: 10px;}
	.userright{flex: 1;padding-left:20px;width: 0;}
	.usercard{font: 14px Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;display: flex;flex-direction: column;}
	.usercard_item{margin-top: 7px;display: flex;color: #000000;}
	.usercard_leftitem{min-width: 43px;}
	.usercard_rightitem{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
	/* .usercard text{line-height: 25px;} */
	.buttons{display: flex;}
	.userbutton{border-radius: 20px;background-color: red;/* padding: 5px 10px; */color: #FFFFFF;width: 75px;text-align: center;height: 25px;line-height: 25px;}
	.userbutton:nth-child(1){margin-right: 5px;}
</style>
