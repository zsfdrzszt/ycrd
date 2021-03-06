<template>
	<view class="representative" @click="nextpage">
		<image :src="list.url" mode="widthFix" style="width: 150px;margin-right: 10rpx;"></image>
		<view class="tative_right">
			<view class="tative_title">
				{{list.title}}
			</view>
			<view class="tative_content">
				{{list.content}}
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
		},
		methods:{
			nextpage(){
				uni.navigateTo({
					url:'/pages/text4/text4son'
				})
			}
		}
	}
</script>

<style>
.representative{
	background-color: #f6f8fa;
	padding: 10px ;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	box-shadow: 1px 1px 10px #ccc;
	width: 95%;
	margin: 0 auto;
	margin-top: 20px;
}
.tative_right{
	flex: 1;
}
.tative_title{
	border-bottom: 1px solid #ccc;
	font-size: 18px;
	font-weight: bold;
	line-height: 35px;
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.tative_content{
	position: relative;
	    line-height: 1.5em;
	    /* height: 3em; */
	    overflow: hidden;
	    text-align: justify;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 3;
}
</style>
