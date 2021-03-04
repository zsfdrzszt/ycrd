<template>
	<view>
		<view class='list_title'>
			{{list_title}}
		</view>
		<view class='center_list'>
			<view class='list_item' v-for="(item,index) in list_all" :key=item.id>
				<navigator url='/pages/activity_room/activity_det/activity_det' class="list_item_a">
					<view class='list_left'>
						<img :src='item.img' alt="">
					</view>
					<view class='list_right'>
						<view>{{item.title}}</view>
						<view>{{item.time}}</view>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				list_title:'宣讲',
				list_all:[{
					id:0,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				},
				{
					id:1,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				},
				{
					id:2,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				},
				{
					id:3,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				}]
			}
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	page{
		padding-top:20px;
		height: 100%;
		background: url(@/static/text5/common_bg.jpg);
		background-size:100% 100%;
		background-repeat:no-repeat ;
		font:14px Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;
	}
	.list_title{
		text-align: center;
		font-size: 32px;
		font-weight: bold;
		letter-spacing: 3px;
		text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;
		color: #fc3a3b;
		margin-bottom: 20px;
	}
	
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
