<template>
	<view class="close">
		<view class="status_bar"></view>
		<view class="close_title">
			<text :class="{textnavchange:1==isActive }" @click="changestate(1)">履职档案</text>
			<text :class="{textnavchange:2==isActive }" @click="changestate(2)">意见建议</text>
		</view>
		<scroll-view scroll-y="true"  class="scroll-view" >
			<view v-show="1 == isActive">
				<perform :list="item" v-for="(item,index) in list8" :state="1"   @magnify="magnify"></perform>
			</view>
			<view v-show="2 == isActive">
				<view class="close_item" >
				   <wdropdown :list= "list7"  @searchdrop="searchdrop1"></wdropdown>
				   <wdropdown :list= "list6"  @searchdrop="searchdrop1"></wdropdown>
				</view>
				<view class="close_footer">
				 <text>暂无数据</text>
				</view>
			</view>
		</scroll-view>
		<view class="img_back" v-show="this.imgstate">
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
	</view>
</template>

<script>
	import perform from "../../../components/perform/perform.vue"
	import wdropdown from "../../../components/w-dropdown/w-dropdown.vue"
	export default {
		components:{
			perform,
			wdropdown
		},
		data() {
			return {
				imgurl:"",
				imgstate:false,
				scale:1,
				isActive:1,
				list8:[{statio:'北关街道',name:"张爱变",time:'2020.2.2',space:"北关街道",way:"为民服务",content:'今天我村委给全体村民发福利，大米，白面，油，村民十分高兴。',effect:"好",img:["http://qiniu.jza2c.com/onadvise/20210221/fbccac6012192161fbd34a1ce12a4138","http://qiniu.jza2c.com/onadvise/20210221/9ad3c10de9e35f985752fae663ebc3e8","http://qiniu.jza2c.com/onadvise/20210221/f9e055f2be0cc224c1d2153844897005"]},{statio:'北关街道',name:"张爱变",time:'2020.2.2',space:"北关街道",way:"为民服务",content:'今天我村委给全体村民发福利，大米，白面，油，村民十分高兴。',effect:"好",img:["http://qiniu.jza2c.com/onadvise/20210221/fbccac6012192161fbd34a1ce12a4138",]}],
				list7:{name:"请选择",list:[{content:"2019"},{content:"2020"},{content:"2021"}],},
				list6:{name:"第一季度",list:[{content:"第一季度"},{content:"第二季度"},{content:"第三季度"},{content:"第四季度"}],},
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
				this.imgstate =false
				this.imgurl =""
				this.scale = 1;
			},
		}
	}
</script>

<style>
page{
	width:100%;
	height: 100%;
}
.close{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	background: url(@/static/create/common_bg.jpg);
	background-size: 100% 100%;
	position: relative;
}
.scroll-view{
	width: 100%;
	height: 90%;
	overflow: hidden;
}
.close_title{
	height: 41px;
	display: flex;
	/* flex-wrap: wrap; */
	border-bottom: 1px solid #ff0000;
}
.close_title text{
	width: 50%;
	height: 41px;
	line-height: 41px;
	/* padding: 0!important; */
	text-align: center;
	font-weight: bold;
}
.textnavchange{
	color: #d71f07;
	border-bottom: #d71f07 solid 2px;
}
.close_item{
	 padding-top: 15px;
	 display: flex;
	 justify-content: space-around;
}
.close_footer{
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    padding: 30px 0;
    color: red;
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
