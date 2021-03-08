<template>
	<view class="newthreemain" @click="topage">
		    <view class="newthreeclass">【{{list.class}}】</view>
			<view class="newthreetitle"><text v-if="list.state" class="newthreered">【置顶】</text> {{list.title}}</view>
			<view class="newthreetime"><text> {{list.time}}</text><text class="newthreespace">{{list.space}}</text></view>
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
			topage(){
				uni.navigateTo({
					url:"/pages/text4/text4son"
				})({
					
				})
			}
		}
	}
</script>

<style scoped>
	.newthreemain{
		display: flex;
		flex-direction: column;
		font-size: 15px;
		width: 100%;
		height: 100px;
		padding: 10px 20px;
		border-bottom: 1px solid #ccc
	}
	.newthreeclass{
		line-height: 20px;
		font-weight: bold;
	}
	.newthreetitle{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 25px;
		font-weight: bold;
	}
	.newthreered{
		color: red
	}
	.newthreetime{
		display: flex;
		font-size: 14px;
		color: #333;
		text-indent: 0;
	}
	.newthreespace{
		display: block;
		flex: 1;
		text-align: right;
	}
</style>
