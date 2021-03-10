<template>
	<view>
		<view class='user_personal_top'>
			<image src="/static/user/user_personal.jpg" mode="widthFix"></image>
			<image src="/static/user/user_tx.jpg" mode="widthFix"></image>
		</view>
		<view class='user_personal_content'>
			<view>
				<text>姓名</text>
				<text>姓名X</text>
			</view>
			<view>
				<text>邮箱地址</text>
				<text>u7868@hxrd.jza2c.com</text>
			</view>
			<view>
				<text>二维码名片</text>
				<image src="/static/user/user_ewm.png" mode="widthFix"></image>
				
			</view>
			<view>
				<text>手机号</text>
				<text>18834408338</text>
			</view>
			<button type="default" class="user_seave_btn">保存修改</button>
		</view>
		
	</view>
</template>

<script>
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		background: #f5f5f5;
	}
	.user_personal_top{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.user_personal_top>image:nth-child(1){
		width: 100%;
	}
	.user_personal_top>image:nth-child(2){
		width: 100px;
		border-radius: 50%;
		transform: translateY(-50px);
		
	}
	.user_personal_content{
		transform: translateY(-50px);
		padding:15px 10px;
	}
	.user_personal_content>view{
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #dfdfdf;
		font-size: 14px;
		padding: 10px 0;
	}
	.user_personal_content>view>image{
		width: 20px;
	}
	.user_seave_btn{
		margin-top: 35px;
		background: #ff0000;
		color: #fff;
		width: 50%;
		font-size: 14px;
	}
</style>
