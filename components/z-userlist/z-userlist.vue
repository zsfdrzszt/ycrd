<template>
	<!-- 人员卡片 -->
	<view class="usermain" @click="toppeg(value.liaison_id)">
		<view class="userleft">
			<image :src="value.url" class="userimg" mode="widthFix"></image>
		</view>
		<view class="userright">
			<view class="usercard">
				<text>姓名：{{value.name}}</text> <br>
				<text>岗位：{{value.job}}</text> <br>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			value: Object
		},
		data() {
			return {};
		},
		methods:{
			toppeg(id){
				uni.navigateTo({
					url:"/pages/general/liaison/liaison"+"?id=" + id
				})
			}
		}
	}
</script>

<style scoped>
	.usermain {
		display: flex;
		background-color: #FFFFFF;
		text-align: left;
		margin: 20px 10px;
		box-shadow: 1px 1px 7px #ccc;
		height: 130px;
		border-radius: 5px;
	}

	.userimg {
		width: 100%;
	}

	.userleft {
		display: flex;
		flex: 0.8;
		border-radius: 10px;
		overflow: hidden;
		margin: 5% 5%;
	}

	.userright {
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.usercard {
		align-items: center;
	}

	.usercard text {
		line-height: 25px;
	}
</style>
