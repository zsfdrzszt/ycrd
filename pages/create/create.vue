<template>
	<view class="create">
		<view class="status_bar"></view>
		<view class="create_title">
			<text :class="{textnavchange:1==isActive }" @click="changestate(1)">代表履职</text>
			<text :class="{textnavchange:2==isActive }" @click="changestate(2)">最新要闻</text>
		</view>
		<scroll-view class="scroll-view" scroll-y="true" >
			<view v-show="isActive ==1">
				<perform :list="item" v-for="(item,index) in list8" :state="1" @magnify="magnify"></perform>
			</view>
			<view class='center_list' v-show="isActive ==2">
				<activecard v-for="(item,index) in list_all"  :state="state":key=item.id :list="item" url="/pages/proposal/proposalson"></activecard>
			</view>
		</scroll-view>
		<view class="img_back" v-if="this.imgstate">
			<movable-area scale-area class="movable-area "  @click="hideimg">
				<movable-view  
				class="movable-view"
		        direction="all"
		        scale="true"
		        scale-min="1"
		        scale-max="4"
		        :scale-value="scale"
				 @scale="onScale"
		      >
					<image :src="imgurl" class="lookimg" mode="widthFix" ></image>
				</movable-view>               
			</movable-area>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import perform from "../../components/perform/perform.vue"
	import activecard from "../../components/activecard/activecard.vue"
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default {
		components:{
			wnavall,
			activecard,
			perform
		},
		data() {
			return {
				imgurl:"",
				imgstate:false,
				scale:1,
				isActive:1,
				list8:[{statio:'张庆乡',name:"刘美英",time:'2020.2.2',space:"北关街道",way:"为民服务",content:'今天我村委给全体村民发福利，大米，白面，油，村民十分高兴。',effect:"好",img:["http://qiniu.jza2c.com/onadvise/20210221/fbccac6012192161fbd34a1ce12a4138","http://qiniu.jza2c.com/onadvise/20210221/9ad3c10de9e35f985752fae663ebc3e8","http://qiniu.jza2c.com/onadvise/20210221/f9e055f2be0cc224c1d2153844897005"]},
				{statio:'北关街道',name:"张爱变",time:'2020.2.2',space:"北关街道",way:"接待选民",content:'2月8日，北关代表小组在建东社区门面房调研出租房防疫情况。',effect:"好",img:["http://qiniu.jza2c.com/onadvise/20210222/3b4e121ee96d16a1d4e66d2378bafb3d",]}],
				state:false,
				list_all:[{
					id:0,
					img:'http://qiniu.jza2c.com/uploads/20201120/FulajcpeQ5E9N7oIRZmKyoIsI0Q9.jpg',
					title:'新华街道人大代表 助力“三治三零”创建、平安建设、扫黑除恶、反邪教、 铁路护路集中宣传活动',
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
					img:'http://qiniu.jza2c.com/uploads/20201119/Fv6dZbW1Kaz2AcL5aybgNac5W3e3.jpg',
					title:'人大代表深入使赵社服中心调研',
					time:'[2020年03月31日]'
				},
				{
					id:3,
					img:'http://qiniu.jza2c.com/uploads/20201119/FoF2v37tYbQvb6GLHOQVAtApFlRM.jpg',
					title:'新华街道人大工委组织代表参加意识形态业务培训',
					time:'[2020年03月31日]'
				}
				,
				{
					id:4,
					img:'http://qiniu.jza2c.com/uploads/20201119/FnxZyyKmFdvArYQ60ZKux_tjo95X.jpg',
					title:'新建街道人大代表小组召开城市提档升级征求意见座谈会',
					time:'[2020年03月31日]'
				}
				,
				{
					id:5,
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
			magnify(val){
				this.imgstate =true,
				this.imgurl =val
			},
			hideimg(){
				this.imgurl =""
				this.scale = 1;
				this.imgstate =false
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
	position: relative;
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
.img_back{
	width: 100%;
	height: 100%;
	display: flex;
	position: fixed;
	left: 0;
	top: 0;
	background-color: rgba(0,0,0,.5);
	justify-content: center;
	align-items: center;
}
.img_back_box{
	width: 70%;
	height: 80%;
}
.img_back_box image{
	width: 100%;
}
.movable-view {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-align: center;
}

.movable-area {
    height: 100%;
    width: 100%;
    position: fixed;
    overflow: hidden;
}

.movable-view image {
    width: 60%;
}
.lookimg {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
</style>
