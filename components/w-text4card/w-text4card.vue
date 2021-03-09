<template>
	<view class="text4card" @click="topage(list.content)">
		<view class="listconup" >
			<view class="listcon">{{list.content}}</view>
		</view>
		<view class="listcondown">
			<text style="{align-items: center;background: #ccc;color: #fff;border-radius: 3px;padding: 2px 5px;}">{{list.state}}</text>
			<text>{{list.time}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: Object
		},
		data() {
			return {

			};
		},
		methods:{
			topage(val){
				uni.navigateTo({
					url:"/pages/proposal/proposalson"+"?con="+val
				})
			}
		}
	}
</script>

<style scoped>
	.text4card {
		width: 95%;
		margin: 20px 10px;
		box-shadow: 1px 1px 10px #ccc;
	}
	.listconup{
		border-bottom: 1px solid #ccc; 
		min-height: 60px;
		font-size: 16px
	}
	.listcon{
		padding: 10px;
	}
	.listcondown{
		padding: 5px 10px;
		display: flex;
		justify-content: space-between;
	}
</style>
