<template>
	<view class="index_all" :style="{backgroundImage:bgimg}">
		<!-- common 张庆 -->
		<view class="index_top" v-show="lid!=2">
			<view class="index_topimg">
				<u-image src="../../static/liaison/common_index_topimg.png" :lazy-load="true" width="150rpx" height="160rpx">
					<u-loading slot="loading"></u-loading>
				</u-image>
			</view>
			<view class="index_title">{{lianame}}人大代表联络站</view>
		</view>
		<!-- 西南 -->
		<view class="index_wrap" v-show="lid==2">
			<u-swiper :list="swiperlist" :title='true' :title-style="wraptitle" height="400" @click="swiperclick"></u-swiper>
		</view>
		<view class="index_center">
			<view class="index_item" v-for="(item,index) in multiple" :key="item.id" @click="btnitem(index)" :style="{backgroundImage:itembg}">
				<u-image :src="item.image" :lazy-load="true" width="100rpx" height="100rpx">
					<u-loading slot="loading"></u-loading>
				</u-image>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="index_bottom">
			<view class="index_btn" @click="sendinfo"><u-icon name="chat" color="#fff" size="38" style="padding-right: 30rpx;"></u-icon><text>站长留言</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				map:'37.76311,112.74',//地图导航
				wraptitle:{'color':'#fff','height':'45px'},
				lianame:'郭家堡乡',//联络站名称
				lid:'',	//联络站id
				// 页面背景图
				bgimg:"url(../../static/liaison/common_index_bgimg.jpg)",	//联络站背景图
				bgimgarr:["url(../../static/liaison/common_index_bgimg.jpg)","url(../../static/liaison/xnjd_index_bgimg.png)","url(../../static/liaison/zq_index_bgimg.jpg)"],
				// 按钮背景色
				itembg:'rgba(255,255,255,0.8)',
				multiple:[
					{id:1,name:'概况',image:'../../static/liaison/common_index_gk.png'},
					{id:2,name:'代表阵地',image:'../../static/liaison/common_index_dbzd.png'},
					{id:3,name:'活动纪实',image:'../../static/liaison/common_index_hdjs.png'},
					{id:4,name:'一季一星',image:'../../static/liaison/common_index_yjyx.png'},
					{id:5,name:'选民接待',image:'../../static/liaison/common_index_xmjd.png'},
					{id:6,name:'意见建议',image:'../../static/liaison/common_index_yjjy.png'},
					{id:7,name:'履职管理',image:'../../static/liaison/common_index_lzgl.png'},
					{id:8,name:'履职活动',image:'../../static/liaison/common_index_lzhd.png'},
					{id:9,name:'地图导航',image:'../../static/liaison/common_index_dtdh.png'}
				],
				list: [
					{id:1,name: "郭家堡乡",}, 
					{id:2,name: "西南街道",},
					{id:3,name: "乌金山镇",}, 
					{id:4,name: "修文镇",},
					{id:5,name: "张庆乡",}, 
					{id:6,name: "长凝镇",}, 
					{id:7,name: "东阳镇",}, 
					{id:8,name: "庄子乡",}, 
					{id:9,name: "东赵乡",}, 
					{id:10,name: "什贴镇",}, 
					{id:11,name: "使赵社服中心",}, 
					{id:12,name: "晋华街道",}, 
					{id:13,name: "经纬街道",}, 
					{id:14,name: "锦纶街道",}, 
					{id:15,name: "北关街道",}, 
					{id:16,name: "新建街道",}, 
					{id:17,name: "安宁街道",},  
					{id:18,name: "路西街道",},
				],
				// 轮播图数组
				swiperlist: [{
						image: 'http://qiniu.jza2c.com/uploads/20210218/FhQEYpaUkqX6ecvbY2INUgq4dZGK.jpg',
						title: '向选民述职、接受选民监督'
					},
					{
						image: 'http://qiniu.jza2c.com/uploads/20210218/FrDAPAIg6b1d493TlEVo8esEbGwa.jpg	',
						title: '向选民述职、接受选民监督'
					},
					{
						image: 'http://qiniu.jza2c.com/uploads/20210218/FmEeMlAn5m5ToWm1YRpN4A5jihS5.jpg',
						title: '向选民述职、接受选民监督'
					},
					{
						image: 'http://qiniu.jza2c.com/uploads/20201110/Fr13Ux-Nf8b4-TC_Su17yLl7GXlo.jpg',
						title: '向选民述职、接受选民监督'
					},
					{
						image: 'http://qiniu.jza2c.com/uploads/20201130/Fo_s-qTgTZBoMYeMjaDQcXaIRcn3.png',
						title: '向选民述职、接受选民监督'
					},
					
				],
			}
		},
		onLoad(options) {
			this.lid = options.id
			var index = this.list.findIndex((value) => value.id == this.lid)
			this.lianame = this.list[index].name
			if(this.lid==2){
				// 西南
				this.bgimg = this.bgimgarr[1]
			}else if(this.lid==5){
				// 张庆
				this.itembg='linear-gradient(rgba(219,206,195,0.77), rgba(232,217,195,0.77), rgba(240,233,223,0.77))'
				this.bgimg = this.bgimgarr[2]
			}else{
				// 通用
				this.bgimg = this.bgimgarr[0]
			}
		},
		methods: {
			btnitem(index){
				if(index==0){
					// 概况
					uni.navigateTo({
						url:"/pages/text4/text4son?con=概况",
					})
				}else if(index==1){
					// 代表阵地
					uni.navigateTo({
						url:"/pages/pro2/prolist/prolist?space="+this.lianame,
					})
				}else if(index==2){
					// 活动纪实
					uni.navigateTo({
						url:"/pages/liaison/activity?id="+this.lid,
					})
				}else if(index==3){
					// 一季一星
					uni.navigateTo({
						url:"/pages/liaison/outcome?id="+this.lid,
					})
				}else if(index==4){
					// 选民接待
					uni.navigateTo({
						url:"/pages/liaison/reception?id="+this.lid,
					})
				}else if(index==5){
					// 意见建议
					uni.navigateTo({
						url:"/pages/liaison/suggest?id="+this.lid,
					})
				}else if(index==6){
					// 履职管理
					uni.navigateTo({
						url:"/pages/liaison/rules?id="+this.lid,
					})
				}else if(index==7){
					// 履职活动
					uni.navigateTo({
						url:"/pages/liaison/plan?id="+this.lid,
					})
				}else if(index==8){
					// 地图导航
					if(this.map!=''){
						var maparr = this.map.split(',')
						var m1=maparr[0]
						var m2=maparr[1]
						window.location.href =  "https://apis.map.qq.com/tools/routeplan/eword="+this.lianame+"&epointx=" + m2 + "&epointy=" + m1 +"?referer=web&key=JMFBZ-2X4E4-A3ZUZ-DPNQX-RYAUS-5NFL4"
					}
				}
			},
			swiperclick(index){
				console.log(index)
			},
			// 站长留言
			sendinfo(){
				uni.navigateTo({
					url:"/pages/liaison/message",
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		width: 100%;
	}
	.index_all{
		height: 100%;
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.index_topimg {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 60rpx 0 20rpx;
	}
	.index_title {
		font-size: 52rpx;
		color: #c90707;
		font-weight: bold;
		text-align: center;
		font-family: 思源黑体;
		text-shadow: #fff 1px -1px 0, #fff -1px -1px 0, #fff -1px 1px 0, #fff 1px 1px 0, #fff 1px 0 0, #fff -1px 0 0, #fff 0 1px 0, #fff 0 -1px 0, 0 2px 4px #111;
	}
	.index_wrap{
		height: 400rpx;
	}
	.index_center{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding-top: 20rpx;
	}
	.index_item{
		width: 200rpx;
		height: 200rpx;
		margin: 0 20rpx;
		display: flex;
		flex-direction: column;
		padding: 30rpx 6rpx;
		border-radius: 10rpx;
		box-shadow: 1px 1px 2px #555;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		margin-top: 40rpx;
		background-color: rgba(255,255,255,0.8);
		color: #000;
	}
	.index_bottom{
		display: flex;
		justify-content: center;
		padding-top: 80rpx;
	}
	.index_btn{
		width: 40%;
		height: 80rpx;
		background: #e40404;
		color: #fff;
		border-radius: 14rpx;
		padding: 0 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32rpx;
		box-shadow: 1px 1px 2px #999;
		font-family: 黑体;
	}
</style>
