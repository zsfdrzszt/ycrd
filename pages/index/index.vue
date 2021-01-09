<template>
	<view class="maincontent">
		<view class="status_bar" ></view>
		<view class="content">
			<view class="content-text">榆次区人大常委会<br>智慧人大平台</view>
			<view class="wrap">
				<image mode="widthFix" v-for="(item,index) in images" class="wrapimg" @click="topage(index+1)" :src="item"></image>
			</view>
			<view class="wrapcon">
				<image src="../../static/indeximg/county_common_index_seven.png" class="wrapconimg" @click="topro(1)"></image>
				<image src="../../static/indeximg/county_common_index_eight.png" class="wrapconimg" @click="topro(2)"></image>
				<image src="../../static/indeximg/county_common_index_ten.png" class="wrapconimg" @click="show = true"></image>
				<view class="wrapbuttom">
					<view class="wrapback" v-show="showWarp" @click="tobuttom">
						<image src="../../static/indeximg/county_common_index_close.png" style="position: absolute; left: 0; top: 0; width: 10%; height: 30%;"
						 @click="showwarp"></image>
					</view>
					<image  mode="widthFix" src="../../static/indeximg/county_common_index_nine.png" class="myself"></image>
				</view>
			</view>
		</view>
		<u-popup v-model="show" @click="show = false" mode="bottom" class="navmain">
				<view class="navlists">
					<view class="navself" :class="{navselfchange:index==isActive }"  v-for="(item,index) in navlist" @click="changenav(index)">{{item.name}}</view>
				</view>	
				<swiper :current="swiperCurrent" class="swiperlist">
					<swiper-item class="swiper-item" >
						<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
							<zlist v-for="(item,index) in userlist" :key="index" :value="item" ></zlist>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item" >
						<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
							2222
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item" >
						<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
							33333
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item" >
						<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
							44444
						</scroll-view>
					</swiper-item>
				</swiper>
		</u-popup>
	</view>
	
</template>

<script>
	import zlist from "../../components/z-list/z-list.vue"
	export default {
		components:{
			zlist
		},
		data() {
			return {
				userlist:[{content:"啊大大的大好机会",region:"啊发发free",time:"adadasda"},{content:"啊大大的大好机会",region:"啊发发free",time:"adadasda"},{content:"啊大大的大好机会",region:"啊发发free",time:"adadasda"},{content:"啊大大的大好机会",region:"啊发发free",time:"adadasda"},{content:"啊大大的大好机会",region:"啊发发free",time:"adadasda"},{content:"啊大大的大好机会",region:"啊发发free",time:"adadasda"},{content:"啊大大的大好机会",region:"啊发发free",time:"adadasda"},{content:"啊大大的大好机会",region:"啊发发free",time:"adadasda"},{content:"啊大大的大好机会",region:"啊发发free",time:"adadasda"},{content:"啊大大的大好机会",region:"啊发发free",time:"adadasda"},{content:"啊大大的大好机会",region:"啊发发free",time:"adadasda"},{content:"啊大大的大好机会",region:"啊发发free",time:"adadasda"},{content:"啊大大的大好机会",region:"啊发发free",time:"adadasda"}	
				],
				isActive:false,
				swiperCurrent:0,
				navlist:[{name:"最新履职"},{name:"最新要闻"},{name:"三零创建"},{name:"经验交流"}],
				show:false,
				number: "4",
				showWarp: true,
				images: ["../../static/indeximg/county_common_index_one.png", "../../static/indeximg/county_common_index_two.png",
					"../../static/indeximg/county_common_index_three.png", "../../static/indeximg/county_common_index_four.png",
					"../../static/indeximg/county_common_index_five.png", "../../static/indeximg/county_common_index_six.png"
				]
			}
		},
		onLoad() {

		},
		methods: {
			changenav(n){
				if(n==2){
					uni.navigateTo({
						url: "/pages/text1/text1"
					})
				}else{
					this.swiperCurrent = n
					this.isActive =n
				}	
			},
			topage(num) {
				let url = "/pages/text" + num + "/text" + num
				console.log(url)
				uni.navigateTo({
					url: url
				})
			},
			showwarp() {
				this.showWarp = !this.showWarp
			},
			topro(num){
				let url = "/pages/pro"+num+ "/pro"+num
				console.log(url)
				uni.navigateTo({
					url: url
				})
			},
			tobuttom(){
				uni.navigateTo({
					
				})
			},
			onreachBottom() {
							
						}
		}
	}
</script>

<style>
	.status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
	  }
	page {
		height: 100%;
		overflow: hidden;
	}
	.maincontent{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		}
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: url(../../static/indeximg/county_common_index_bg.png);
		background-size: cover;

	}

	.content-text {
		width: 100%;
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		font-size: 26px;
		font-weight: bold;
		color: #b60606;
		line-height: 35px;
		text-align: center;

	}

	.wrap {
		display: flex;
		flex: 2;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		width: 80%;
		margin: 0 auto;
	}

	.wrapimg {
		width: 32%;
		height: 35%;
	}

	.wrapcon {
		flex: 2;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}

	.wrapconimg {
		width: 55%;
		height: 20%;
	}

	.wrapbuttom {
		position: relative;
		width: 100%;
		height: 25%;
	}

	.wrapback {
		width: 100%;
		height: 100%;
		background: url(../../static/indeximg/county_common_index_bot.png);
		background-size: cover;
	}

	.myself {
		position: absolute;
		right: 0;
		top: 0;
		width: 20%;
		height: 100%;
	}
	
	.navlists{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.navself{
		flex: 1;
		text-align: center;
		font-weight: bold;
		line-height: 45px;
		color: white;
		font-family: 仿宋;
		background-color: red;
		border: 1px solid white;
		font-size: 15px;
	}
	.navselfchange{
		flex: 1;
		text-align: center;
		font-weight: bold;
		line-height: 45px;
		color: white;
		font-family: 仿宋;
		background-color: #B60606;
		border: 1px solid white;
		font-size: 15px;
	}
	uni-swiper{
		width: 100%;
		display: flex;
		flex: 1;
	}
	.swiperlist{
		 height: 400px;
		 margin: 10px auto;
	}
	.navmain{
	
	}
</style>
