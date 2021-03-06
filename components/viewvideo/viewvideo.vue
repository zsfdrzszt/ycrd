<template>
	<view class="viewvideo" >
		<image :src="list.url" mode="widthFix" @click="showviedo"></image>
		<view class="viewtitle">{{list.content}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:Object,
		},
		data() {
			return {
				videostate:false,
			};
		},
		methods:{
			showviedo(){
				this.videostate =!this.videostate
				this.$emit("click",this.list.video)
			}
		}
	}
</script>

<style>
.viewvideo{
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 10px;
	box-sizing: border-box;
}
.viewvideo image{
	width: 90%;
	border-radius: 5px;
}
.viewtitle{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-top: 10px;
	width: 100%;
	text-align: center;
}
.videopage{
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	background: rgba(0,0,0,0.5);
	z-index: 100;
	display: flex;
	flex-direction: column;
    justify-content: center;
	align-items: center;
}
.videopage video{
	width: 100%;
}
.videopage image{
	width: 30px;
}
.viedoclose{
	width: 100%;
	height: 30px;
	text-align: right;
	margin-bottom: 10rpx;
	padding-right: 10rpx;
}
</style>
