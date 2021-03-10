<template>
	<view id="user_del_all">
		<view class="user_del">
			<text>{{user_title_top}}</text>
		</view>
		<view class="user_del_content">
			<view class="user_del_item" v-for="(item,index) in user_list" :key=item.id>
				<image :src="item.img" mode="widthFix"></image>
				<view class="item_content">
					<text>{{item.name}}</text>
					<text>{{item.job}}</text>
				</view>
				<a :href='item.tel'>联系</a>
			</view>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				user_title_top:'郭家堡乡联络站名录',
				user_list:[{
					id:1,
					name:'王绍泰',
					tel:'1363485238',
					job:'榆次区安宁实业有限公司董事长',
					img:'/static/user/user_tx.jpg'
				},
				{
					id:2,
					name:'王绍泰',
					tel:'1363485238',
					job:'榆次区安宁实业有限公司董事长',
					img:'/static/user/user_tx.jpg'
				}]
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
		padding: 15px 10px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		overflow-y: auto;
	}
	.user_del_item{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ccc;
		padding: 10px 0;
	}
	.user_del_item>image{
		width: 20%;
	}
	.user_del_item>a{
		text-decoration: none;
		text-align: center;
		width: 10%;
		color: #d63d6a;
	}
	.user_del_item .item_content{
		flex: 1;
		padding: 10px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		
	}
	.user_del_item .item_content>text:nth-child(2){
		color: #b0afaf;
	}
</style>
