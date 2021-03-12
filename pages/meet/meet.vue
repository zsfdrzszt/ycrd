<template>
	<view class="meet">
		<view class="status_bar"></view>
		<view class="meet_title">
			<text :class="{textnavchange:1==isActive }" @click="changestate(1)">参会情况</text>
			<text :class="{textnavchange:2==isActive }" @click="changestate(2)">人代会建议</text>
		</view>
			<scroll-view scroll-y="true"  class="scroll-view " >
				<meets v-for="(item,index) in list" :list="item" :num="index"  v-show="isActive == 1"> </meets>
				<message v-for="(item,index) in list1" :list="item" :num="index"  v-show="isActive == 2"  @magnify="magnify"></message>
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
	import meets from "../../components/meets/meets.vue"
	import message from "../../components/message/message.vue"
	export default {
		components: {
			meets,
			message
		},
		data() {
			return {
				imgurl:"",
				imgstate:false,
				scale:1,
				isActive: 1,
				list: [{
					txt: '2020年5月27日郭家堡乡第十七届人民代表大会第七次会议',
					time: '2020-5-27',
					int: '提出建议0件',
					com: '全勤'
				},{
					txt: '2020年4月25日-28日第十六届第六次会议',
					time: '2020-04-25',
					int: '提出建议0件',
					com: '全勤'
				}],
				list1: [{
					txt: '关于撤村转居之后农民独生子女家庭补助金的遗留问题',
					time: '2020-04-25',
					con: '区人代会',
					jie:'办理中',
					imgUrl:'http://qiniu.jza2c.com/uploads/20190729/FucxO7PfGJ-jA0VUxiocMHzrj780.jpg'
				},{
					txt: '2020年5月27日郭家堡乡第十七届人民代表大会第七次会议',
					time: '2020-04-25',
					com: '区人代会',
					jie:'办理中',
					imgUrl:'http://qiniu.jza2c.com/uploads/20190729/FucxO7PfGJ-jA0VUxiocMHzrj780.jpg'
				}]
			}
		},
		methods: {
			changestate(n) {
				this.isActive = n
			},
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
	page {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.meet {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-image: url(../../static/create/common_bg.jpg);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.meet_title {
		width: 100%;
		height: 41px;
		display: flex;
		flex-wrap: wrap;
		border-bottom: 1px solid #ff0000;
	}

	.meet_title text {
		width: 50%;
		height: 41px;
		line-height: 41px;
		padding: 0 !important;
		text-align: center;
		font-weight: bold;
	}

	.textnavchange {
		color: #d71f07;
		border-bottom: #d71f07 solid 2px;
	}

	.meet_con {
		width: 100%;
		height: auto;
	}

	.scroll-view {
		height: 90%;
		overflow: auto;
	}

	.meet_list {
		margin: 15px 10px;
		border-radius: 8px;
		border: 1px solid red;
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
