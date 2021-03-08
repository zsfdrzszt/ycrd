<template>
	<view id="user_del_all">
		<view class="user_del">
			<text>{{user_title_top}}</text>
		</view>
		<view class="user_del_content">
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				user_title_top:'郭家堡乡联络站名录'
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
	}
	#user_del_all{
		display: flex;
		flex-direction: column;
	}
	.user_del{
		padding: 5% 0;
		color: #d63d31;
		font-size: 17px;
		font-weight: bold;
		letter-spacing: 1px;
		display: flex;
		justify-content: center;
		border-bottom: 1px solid #d63d31;
	}
	.user_del_content{
		flex: 1;
		padding: 15px 30px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		overflow-y: auto;
	}
</style>
