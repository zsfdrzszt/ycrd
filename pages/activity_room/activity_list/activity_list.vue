<template>
	<view>
		<view class='list_title'>
			{{list_title}}
		</view>
		<view class='center_list'>
			<activecard v-for="(item,index) in list_all"  :state="state":key=item.id :list="item"></activecard>
		</view>
	</view>
</template>

<script>
	import activecard  from "../../../components/activecard/activecard.vue"
	export default {
		components:{
			activecard
		},
		data(){
			return{
				state:true,
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
					title:'柴永昌代表在活动室给选民',
					time:'[2020年03月31日]'
				},
				{
					id:2,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲柴永昌代表在活动室给选民进行宣讲柴永昌代表在活动室给选民进行宣讲柴永昌代表在活动室给选民进行宣讲柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				},
				{
					id:3,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				}]
			}
		},
		onLoad() {
			this.list_title = this.$route.query.name
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
</style>
