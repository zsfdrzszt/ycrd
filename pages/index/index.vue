<template>
	<view class="maincontent">
		<view class="status_bar"></view>
		<view class="content">
			<view class="content-text">榆次区人大常委会<br>智慧人大平台</view>
			<!-- //人大概述 。。。。-->
			<view class="wrap">
				<image mode="widthFix" v-for="(item,index) in images" class="wrapimg" @click="topage(index+1)" :src="item"></image>
			</view>
			<!-- 履历上传 -->
			<view class="wrapcon">
				<image src="../../static/indeximg/county_common_index_seven.png" class="wrapconimg" @click="topro(1)"></image>
				<image src="../../static/indeximg/county_common_index_eight.png" class="wrapconimg" @click="topro(2)"></image>
				<image src="../../static/indeximg/county_common_index_ten.png" class="wrapconimg" @click="show = true"></image>
				<view class="wrapbuttom">
					<view class="wrapback" v-show="showWarp" @click="tobuttom">
						<image src="../../static/indeximg/county_common_index_close.png" style="position: absolute; left: 5px; top: 5px; width: 5%; " @click="showwarp" mode="widthFix"></image>
					</view>
					<image mode="widthFix" src="../../static/indeximg/county_common_index_nine.png" class="myself"></image>
				</view>
			</view>
		</view>
		<!-- 模态框部分 -->
		<u-popup v-model="show" @click="show = false" mode="bottom" class="navmain">
			<!-- 导航栏 -->
			<view class="navlists">
				<view class="navself" :class="{navselfchange:index==isActive }" v-for="(item,index) in navlist" @click="changenav(index)">{{item.name}}</view>
			</view>
			<!-- 底部轮播 -->
			<swiper :current="swiperCurrent" class="swiperlist" >
				<swiper-item class="swiper-item" @touchmove.stop>
					<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
						<wjobnew v-for=" (item,index) in userlist " :key="index"  :newlist="item" @topage="tonext(index)"></wjobnew>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item" @touchmove.stop>
					<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
						<reply v-for="(item,index) in list3" :list="item"></reply>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item" @touchmove.stop>
					<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
						<wnewtwo v-for="(item,index) in newlist22" :key="index" :newlist="item" @topage="tonext(index)"></wnewtwo>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item" @touchmove.stop>
				</swiper-item>
				<swiper-item class="swiper-item" @touchmove.stop>
					<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
						<wnewthree v-for="(item,index) in newlist33" :key="index"  :list="item" @topage="tonext(index)"></wnewthree>
					</scroll-view>
				</swiper-item>
			</swiper>
		</u-popup>
	</view>

</template>

<script>
	import wjobnew from "../../components/w-newone/w-newone.vue"
	import wnewtwo from "../../components/w-newtwo/w-newtwo.vue"
	import wnewthree from "../../components/w-newthree/w-newthree.vue"
	import reply from "../../components/reply/reply.vue" 
	export default {
		components: {
			wjobnew,
			wnewtwo,
			wnewthree,
			reply
		},
		data() {
			return {
				newlist33: [],
				newlist22: [],
				list3:[{content:"普惠幼儿园的方案什么情况了？",name:"任光耀",time:"2021-03-04 15:00:05",reply:{content:"普惠幼儿园的方案什么情况了？",name:"任光耀",time:"2021-03-04 15:00:05"}},
				{content:"普惠幼儿园的方案什么情况了？",name:"任光耀",time:"2021-03-04 15:00:05",reply:{content:"普惠幼儿园的方案什么情况了？",name:"任光耀",time:"2021-03-04 15:00:05"}},{content:"普惠幼儿园的方案什么情况了？",name:"任光耀",time:"2021-03-04 15:00:05",reply:{content:"普惠幼儿园的方案什么情况了？",name:"任光耀",time:"2021-03-04 15:00:05"}}
				,{content:"普惠幼儿园的方案什么情况了？",name:"任光耀",time:"2021-03-04 15:00:05",reply:{content:"普惠幼儿园的方案什么情况了？",name:"任光耀",time:"2021-03-04 15:00:05"}}],
				newlist2: [{
					space: "榆次区人大常委会办公室",
					class: "联络站建设",
					url: "http://qiniu.jza2c.com/uploads/20200813/Fljpa0OWrJQCMaASQF5gRktBDST5.jpg",
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "20200109"
				}, {
					space: "榆次区人大常委办公室",
					class: "履职经验",
					state: "true",
					url: "http://qiniu.jza2c.com/uploads/20200813/Fljpa0OWrJQCMaASQF5gRktBDST5.jpg",
					content: "啊大大的大好机会啊大大的大好机会啊大大的大好机会啊大大的大好机会啊大大的大好机会啊大大的大好机会啊大大的大好机会啊大大的大好机会啊大大的大好机会啊大大的大好机会啊大大的大好机会啊大大的大好机会啊大大的大好机会",
					title: "啊发发free九月一日有日日日有人突然一件代发行业应用土地规划的都有很好的活动如也有很多移动端任何的打电话",
					time: "20200109"
				}, {
					space: "榆次区人大常委办公室",
					class: "履职经验",
					url: "http://qiniu.jza2c.com/uploads/20200813/Fljpa0OWrJQCMaASQF5gRktBDST5.jpg",
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "20200109"
				}, {
					space: "榆次区人大常委办公室",
					class: "履职经验",
					url: "http://qiniu.jza2c.com/uploads/20200813/Fljpa0OWrJQCMaASQF5gRktBDST5.jpg",
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "20200109"
				}, {
					space: "榆次区人大常委办公室",
					class: "履职经验",
					url: "http://qiniu.jza2c.com/uploads/20200813/Fljpa0OWrJQCMaASQF5gRktBDST5.jpg",
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "20200109"
				}, {
					space: "榆次区人大常委办公室",
					class: "履职经验",
					url: "http://qiniu.jza2c.com/uploads/20200813/Fljpa0OWrJQCMaASQF5gRktBDST5.jpg",
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "20200110"
				}, {
					space: "榆次区人大常委办公室",
					class: "履职经验",
					url: "http://qiniu.jza2c.com/uploads/20200813/Fljpa0OWrJQCMaASQF5gRktBDST5.jpg",
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adada455a"
				}, {
					space: "榆次区人大常委办公室",
					class: "履职经验",
					url: "http://qiniu.jza2c.com/uploads/20200813/Fljpa0OWrJQCMaASQF5gRktBDST5.jpg",
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}],
				userlist: [{
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}, {
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}, {
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}, {
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}, {
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}, {
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}, {
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}, {
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}, {
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}, {
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}, {
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}, {
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}, {
					content: "啊大大的大好机会",
					title: "啊发发free",
					time: "adadasda"
				}],
				isActive: false,
				swiperCurrent: 0,
				navlist: [
				{
					name: "最新履职"
				},
				{
					name: "最新留言"
				}, {
					name: "最新要闻"
				}, {
					name: "三零创建"
				}, {
					name: "经验交流"
				}],
				show: false,
				number: "4",
				showWarp: true,
				images: ["../../static/indeximg/county_common_index_one.png", "../../static/indeximg/county_common_index_two.png",
					"../../static/indeximg/county_common_index_three.png", "../../static/indeximg/county_common_index_four.png",
					"../../static/indeximg/county_common_index_five.png", "../../static/indeximg/county_common_index_six.png"
				]
			}
		},
		onLoad() {
			this.topnew()
		},
		methods: {
			tonext(index){
				// uni.navigateTo({
				// 	url: "/pages/pro1/pro1"+"?ind="+index
				// })
			},
			topnew() {
				this.newlist2.filter((item) => {
					if (item.state) {
						this.newlist33.unshift(item)
					} else {
						this.newlist33.push(item)
					}
				})
				this.newlist2.filter((item) => {
					if (item.state) {
						this.newlist22.unshift(item)
					} else {
						this.newlist22.push(item)
					}
				})
			},
			changenav(n) {
				if (n == 3) {
					uni.navigateTo({
						url: "/pages/create/create"
					})
				}else {
					this.swiperCurrent = n
					this.isActive = n
				}
			},
			topage(num) {
				let url = "/pages/text" + num + "/text" + num
				
				uni.navigateTo({
					url: url
				})
			},
			showwarp() {
				this.showWarp = !this.showWarp
			},
			topro(num) {
				let url = "/pages/pro" + num + "/pro" + num
				uni.navigateTo({
					url: url
				})
			},
			tobuttom() {
				uni.navigateTo({

				})
			},
			onreachBottom() {
			    let val = this.newlist2.concat(this.newlist2)
				this.newlist2 = val
				this.topnew()
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

	.maincontent {
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

	.navlists {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navself {
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

	.navselfchange {
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

	uni-swiper {
		width: 100%;
		display: flex;
		flex: 1;
	}

	.swiperlist {
		height: 400px;
		margin: 0 auto 5px;
	}

	.navmain {}
</style>
