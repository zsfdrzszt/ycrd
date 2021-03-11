<template>
	<view class="organization ">
		<navigator class="organtop" url="/pages/upcontactDown/upcontactDown" >
			<image :src="list.url" mode="widthFix" ></image>
			<view class="organname">{{list.name}}</view>
			<view class="details" style="width: 80px;">详情</view>
		</navigator>
		<!-- 横线 -->
		<view class="organline"></view>
		<!-- 竖线 -->
		<view class="organcows">
			<view class="organcow"></view>
			<view class="organcow"></view>
			<view class="organcow"></view>
		</view>
		<!-- 原点 -->
		<view class="organcows">
			<view class="organcir"></view>
			<view class="organcir"></view>
			<view class="organcir"></view>
		</view>
		<view class="organbuttom">
			<view class="button_main" v-for="(item,index) in list.next" @click="message">
				<image :src="item.url" mode="widthFix"></image>
				<view class="organname">{{item.name}}</view>
				<view class="details" style="width: 65px;">详情</view>
			</view>
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
		},
		methods:{
			message(){
				uni.navigateTo({
					url:"/pages/upcontactDown/upcontactDown"
				})
			}
		}
	}
</script>

<style>
.organization{
	width: 90%;
	margin: 0 auto;
	margin-top: 30px;
	border: 1px dashed red;
	box-shadow: 0 0 10px #848484;
	border-radius: 15px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 25rpx 0;
}
.organtop{
	width: 100%;
	display: flex;
	flex-direction: column;
    justify-content: center;
	align-items: center;
}
.organtop image{
	width: 80px;
	    border-radius: 15px;
}
.organbuttom{
	width: 100%;
	margin-top: 10rpx;
	display: flex;
	justify-content: space-evenly;
}
.button_main{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.button_main image{
	width: 65px;
	    border-radius: 15px;
}
.organname{
 font-weight: bold;
 text-align: center;
 margin: 10rpx 0;
/* 	 font-size: 18px; */
}
.details{
	background-color: #bf0604;
	color: #fff;
	border-radius: 18px;
	height: 22px;
	line-height: 22px;
	text-align: center;
}

.organline{
	height: 1px;
	background-color: #333;
	width: 60%;
	margin-top: 10rpx;
}
.organcows{
	width: 90%;
	display: flex;
	justify-content: space-around;
}
.organcow{
	width: 1px;
	background-color: #333;
	height: 30px;
}
.organcir{
	    width: 3px;
	    height: 3px;
	    background-color: #333;
	    border-radius: 50%;
}
</style>
