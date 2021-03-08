<template>
	<view id="user_del_list_all">
		<view class="user_del_list">
			<text>代表团名录</text>
		</view>
		<view class="user_del_list_content">
			<navigator url='/pages/user/user_delegation/user_delegation' class="del_list_item"  v-for="(item,index) in list_data" :key=index>
				<view class="">
					<text>{{item}}</text>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				list_data:['郭家堡乡','郭家堡乡','郭家堡乡','郭家堡乡']
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
	}
	#user_del_list_all{
		display: flex;
		flex-direction: column;
	}
	.user_del_list{
		padding: 5% 0;
		color: #d63d31;
		font-size: 17px;
		font-weight: bold;
		letter-spacing: 1px;
		display: flex;
		justify-content: center;
		border-bottom: 1px solid #d63d31;
	}
	.user_del_list_content{
		flex: 1;
		padding: 15px 30px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		overflow-y: auto;
	}
	.del_list_item{
		width: 45%;
		margin-bottom: 20px;
		text-align: center;
		color:#fff;
		background: #e40404;
		padding: 10px 0;
		border-radius: 10px;
		box-shadow: 1px 1px 4px #ccc;
	}
	
</style>
