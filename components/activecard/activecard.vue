<template>
	<view class='list_item' >
		<navigator url='/pages/activity_room/activity_det/activity_det' class="list_item_a">
			<view class='list_left'>
				<img :src='list.img' alt="">
			</view>
			<view class='list_right'>
				<view class="list_righttop" :class="{linecorlor:true == state}">{{list.title}}</view>
				<view>{{list.time}}</view>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		props:{
			list:Object,
			state:Boolean
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.list_item{
		margin: 15px 10px;
		background-color: white;
		box-shadow: 1px 1px 10px #ccc;
		padding: 10px 0;
		display: flex;
		box-sizing: border-box;
	}
	.list_item_a{
		display: flex;
		width: 100%;
	}
	.list_left{
		width: 120px;
		display: flex;
		justify-content: center;
		align-items: center
	}
	.list_left img{
		width: 80%;
		border-radius: 6px;
	}
	.list_right{
		display: block;
		padding: 0 10px;
		/* flex:1; */
		width: 60%;
	}
	.list_right>view:nth-child(1){
		width: 100%;
		position: relative;
		line-height: 1.5em;
		height: 3em;
		overflow: hidden;
		text-align: justify;
		font-weight: bold;
	}
	.linecorlor{
		border-bottom: 1px solid black;
	}
	
</style>
