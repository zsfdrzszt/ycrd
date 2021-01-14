<template>
	<view class="contactmain">
		<view class="status_bar" ></view>
		<view class="content" >
			<view style="background-image: url(../../static/text2img/county_common_build_title.png);background-size:100% 100%;background-repeat: no-repeat; width: 100%; height: 18%;">
			</view>
			<view >
				<!-- <u-tabs-swiper ref="uTabs" :list="list" font-size="28" :current="current" @change="tabsChange" :is-scroll="false" active-color="red" inactive-color="black" bar-width="180" swiperWidth="750" :showBar="!showBar"></u-tabs-swiper> -->
				<wtabnav :list="list" ref="uTabs" @change="tabsChange"></wtabnav>
			</view>
			<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view  scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
						  <wnewscard v-for="(item,index) in newslist"  :key="index" :list="item"></wnewscard>
						  <text>已到达最底部</text>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
						 <wnewscard v-for="(item,index) in newslist"  :key="index" :list="item"></wnewscard>
						 <text>已到达最底部</text>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view  scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
						 3
						 <wnewscard v-for="(item,index) in newslist"  :key="index" :list="item"></wnewscard>
						 <text>已到达最底部</text>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
						4
						<wnewscard v-for="(item,index) in newslist"  :key="index" :list="item"></wnewscard>
						<text>已到达最底部</text>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
						5
						<wnewscard v-for="(item,index) in newslist"  :key="index" :list="item"></wnewscard>
						<text>已到达最底部</text>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
						6
						<wnewscard v-for="(item,index) in newslist"  :key="index" :list="item"></wnewscard>
						<text>已到达最底部</text>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
						7
						<wnewscard v-for="(item,index) in newslist1"  :key="index" :list="item"></wnewscard>
						<text>已到达最底部</text>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
						8
						<wnewscard v-for="(item,index) in newslist"  :key="index" :list="item"></wnewscard>
						<text>已到达最底部</text>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
						9
						<wnewscard v-for="(item,index) in newslist"  :key="index" :list="item"></wnewscard>
						<text>已到达最底部</text>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wnavall from "../../components/w-navall/w-navall.vue"
	import wnewscard from "../../components/w-newscard/w-newscard.vue"
	import wtabnav from "../../components/w-tabnav1/w-tabnav1.vue"
	export default {
		components:{
			wnavall,
			wnewscard,
			wtabnav
		},
		data() {
			return {
				showBar:false,
				newslist:[
					{titel:"adasdasdasda",time:"2020-1-1"},
					{titel:"adasdasdasda",time:"2020-1-1"},
					{titel:"adasdasdasda",time:"2020-1-1"},
					{titel:"adasdasdasda",time:"2020-1-1"},
					{titel:"adasdasdasda",time:"2020-1-1"},
					{titel:"adasdasdasda",time:"2020-1-1"},
					{titel:"adasdasdsddagre",time:"2020-1-2"}
				],
				newslist1:[
					{titel:"adasdasdasda",time:"2020-1-1"},
					{titel:"adasdasdasda",time:"2020-1-1"},
					{titel:"adasdasdsddagre",time:"2020-1-2"}
				],
				list1: [{
					name: '人代会会议1'
				}, {
					name: '常委会会议2'
				}, {
					name: '主任会议3'
				},{
					name: '人大要闻4'
				}
				],
				list: [{
					name: '人代会会议'
				}, {
					name: '常委会会议'
				}, {
					name: '主任会议'
				},{
					name: '人大要闻'
				},{
					name: '法律文件'
				}
				,{
					name: '决议决定'
				},{
					name: '任免'
				},{
					name: '公告'
				},{
					name: '通知'
				}
				],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				current1:0,
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			}
		},
		methods: {
			tabsChange(index) {
				this.swiperCurrent = index;
				this.showBar= false
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				// let current = e.detail.current;
				// this.$refs.uTabs.change(current);
				// this.$refs.uTabs.changething(e);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.change(current);
				this.$refs.uTabs.changething(e);
			},
			// scroll-view到底部加载更多
			onreachBottom() {
				
			}
		}
	}
</script>

<style>
	page {
			height: 100%;
	}
	.contactmain {
		width: 100%;
		height: 100%;
		
	}
	.content {
		width: 100%;
		height: 100%;
		background: url(../../static/text2img/common_bg.jpg);
	}
	uni-swiper{
		height: 70%;
	}
</style>
