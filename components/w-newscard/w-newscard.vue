<template>
	<view class="newcon" @click="nextpage">
		<navigator url="#" class="important_row">
			<view class="important_rowleft">{{list.titel}}</view>
			<view class="important_rowright" >{{list.time}}</view>
		</navigator>
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
			nextpage(){
				uni.navigateTo({
					url:"/pages/proposal/proposalson"
				})
			}
		}
	}
</script>

<style scoped>
	/* .newcon{
	width: 90%;
	margin: 10px auto;
	padding: 10px;
	box-sizing: border-box;
	border-bottom: 1px solid #ccc;
	font-size: 15px;
	text-align: left;
	line-height: 26px;
	background-color: white;
	border-radius: 5px;
	box-shadow: 1px 1px 10px #ccc;
	font: 14px Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;
}
.newtext{
	display: block;
	min-height: 54px;
	text-indent: 10px;
	line-height: 20px;
} */
	.newcon view {
		height: 100%;
		overflow: auto;
		box-sizing: border-box;
		background-color: white;
	}

	.important_row {
		display: block;
		padding: 10px;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		font-size: 15px;
		line-height: 26px;
		margin: 15px 10px;
		background-color: white;
		border-radius: 5px;
		box-shadow: 1px 1px 10px #ccc;
	}
	.important_rowleft {
		min-height: 54px;
		text-align: left;
	}
	.important_rowright {
		text-align: right;
	}
</style>
