<template>
	<view class='list_item' >
		<navigator url='/pages/activity_room/activity_det/activity_det' class="list_item_a">
			<view class='list_left'>
				<img :src='list.img' alt="">
			</view>
			<view class='list_right'>
				<view>{{list.title}}</view>
				<view>{{list.time}}</view>
			</view>
		</navigator>
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
		padding: 0 10px;
		flex:1;
	}
	.list_right>view:nth-child(1){
		border-bottom: 1px solid black;
		position: relative;
		line-height: 1.5em;
		height: 3em;
		overflow: hidden;
		text-align: justify;
		font-weight: bold;
	}
</style>
