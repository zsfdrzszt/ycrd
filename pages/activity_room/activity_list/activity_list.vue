<template>
	<view>
		<view class="status_bar"></view>
		<view class='list_title'>
			{{list_title}}
		</view>
		<view class='center_list'>
			<activecard v-for="(item,index) in list_all"  :state="state":key=item.id :list="item" url="/pages/activity_room/activity_det/activity_det"></activecard>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wnavall from "@/components/w-navall/w-navall.vue"
	import activecard  from "../../../components/activecard/activecard.vue"
	export default {
		components:{
			activecard,
			wnavall
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
					img:'http://qiniu.jza2c.com/uploads/20200331/FuQvUryBkCYI8ZQFFBeZr1QAUXwi.JPG',
					title:'人大主任任光荣同安宁活动室部分党员宣讲活动',
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
					img:'http://qiniu.jza2c.com/uploads/20200331/Fsai8qu0EVS6f6Bixvv5LFQo86kD.JPG',
					title:'人大代表第一活动小组宣讲活动',
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
