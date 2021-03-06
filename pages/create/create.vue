<template>
	<view class="create">
		<view class="create_title">
			<text :class="{textnavchange:1==isActive }" @click="changestate(1)">代表履职</text>
			<text :class="{textnavchange:2==isActive }" @click="changestate(2)">最新要闻</text>
		</view>
		<scroll-view class="scroll-view" scroll-y="true" >
			<view v-show="isActive ==1">
				<perform :list="item" v-for="(item,index) in list8" :state="1" ></perform>
			</view>
			<view class='center_list' v-show="isActive ==2">
				<activecard v-for="(item,index) in list_all"  :state="state":key=item.id :list="item" url="/pages/text4/text4son"></activecard>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import perform from "../../components/perform/perform.vue"
	export default {
		data() {
			return {
				isActive:1,
				list8:[{statio:'北关街道',name:"张爱变",time:'2020.2.2',space:"北关街道",way:"为民服务",content:'今天我村委给全体村民发福利，大米，白面，油，村民十分高兴。',effect:"好",img:["http://qiniu.jza2c.com/onadvise/20210221/fbccac6012192161fbd34a1ce12a4138","http://qiniu.jza2c.com/onadvise/20210221/9ad3c10de9e35f985752fae663ebc3e8","http://qiniu.jza2c.com/onadvise/20210221/f9e055f2be0cc224c1d2153844897005"]},{statio:'北关街道',name:"张爱变",time:'2020.2.2',space:"北关街道",way:"为民服务",content:'今天我村委给全体村民发福利，大米，白面，油，村民十分高兴。',effect:"好",img:["http://qiniu.jza2c.com/onadvise/20210221/fbccac6012192161fbd34a1ce12a4138",]}],
				state:false,
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
				}
				,
				{
					id:3,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				}
				,
				{
					id:3,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				}
				,
				{
					id:3,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				}
				,
				{
					id:3,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				},
				{
					id:3,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				},
				{
					id:3,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				},
				
				{
					id:3,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				},
				{
					id:3,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				}
				]
			}
		},
		methods: {
			changestate(n){
				this.isActive = n
			},
		}
	}
</script>

<style>
page{
	width: 100%;
	height: 100%;
}
.create{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: url(../../static/create/common_bg.jpg);
	background-size: 100% 100%;
}
.create_title{
	height:41px;
	display: flex;
	flex-wrap: wrap;
	border-bottom: 1px solid #ff0000;
}
.create_title text{
	width: 50%;
	height: 41px;
	line-height: 41px;
	padding: 0!important;
	text-align: center;
	font-weight: bold;
}
.textnavchange{
	color: #d71f07;
	border-bottom: #d71f07 solid 2px;
}
.scroll-view{
height: 90%;
overflow: hidden;
}
/* 	.list_title{
		text-align: center;
		font-size: 32px;
		font-weight: bold;
		letter-spacing: 3px;
		text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;
		color: #fc3a3b;
		margin-bottom: 20px;
	} */
</style>
