<template>
	<view>
		<view class="sticky">
			<view class="status_bar">

			</view>

			<!-- 顶部图片 -->
			<image class="survey_top" src="../../static/surveyimg/banner-rdgk.png" mode="widthFix"></image>

			<!-- 选项卡 -->
			<view>
				<view>
					<u-tabs-swiper ref="uTabs" class="tab-control" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
					 active-color="#d71f07" bar-height="3" font-size="30" height="60" bar-width="150"></u-tabs-swiper>
				</view>
			</view>
		</view>
		<view class="kong">

		</view>
		<!-- <text>人大概述</text> -->
		<swiper :current="swiperCurrent" style="height: 1000px; width: 100%;" bar-width="70" @transition="transition">
			<swiper-item class="swiper-item" style="width: 100%;">
				<scroll-view style="width: 100%;" :style="{height:swiperheight + 'px'}">
					<view class="rdgs_box">
						<view class="rdgs_box1">
							<text class="survey_h2">榆次区人民代表大会简介</text>
						</view>
					</view>
				</scroll-view>

			</swiper-item>
			、

			<!--<text>常委会领导</text>  -->
			<swiper-item class="swiper-item" style="width: 100%;">
				<scroll-view style="width: 100%;">
					<wuserlist v-for="(item,index) in userslist" :key="index" :value="item" ></wuserlist>
				</scroll-view>
			</swiper-item>

			<!--<text>机构设置</text>  -->
			<swiper-item class="swiper-item" style="width: 100%;">
				<scroll-view style="width: 100%;">
					<image class="jgsz" src="../../static/surveyimg/jgsz.png" mode="widthFix"></image>
				</scroll-view>
			</swiper-item>

			<!-- <text>常委会成员</text> -->
			<swiper-item class="swiper-item" style="width: 100%;">
				<scroll-view style="width: 100%;">
					<image class="jgsz" src="../../static/surveyimg/jgsz.png" mode="widthFix"></image>
				</scroll-view>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	import wuserlist from "../../components/w-userlist/w-userlist.vue"
	export default {
		components: {
			wuserlist
		},
		data() {
			return {
				list: [{
					name: '人大概述'
				}, {
					name: '常委会领导'
				}, {
					name: '机构设置'
				}, {
					name: '常委会成员'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				message: [],
				swiperheight: 0, //这里是动态赋值的高度，
				userslist: [{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东乡镇"
				}, {
					name: "李四",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"县，区代表",
					job:"山西省有限责任公司",
					space:"东乡镇"
				}, {
					name: "王五",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"城，镇，区代表",
					job:"山西省有限责任公司",
					space:"东乡镇"
				},{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东乡镇"
				}]
			}
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.current = index;
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				// console.log(e)
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			GetStatusBarHeight() {
				let that = this;
				wx.getSystemInfo({
					success: function(res) {
						res.statusBarHeight; //这就是状态栏的高度
					},
				});
			}
		},
		onLoad() {
			this.GetStatusBarHeight();
			// 调用方法获取到设备的可用高度
			uni.getSystemInfo({
				success: (res) => {
					// uni-app 提供了 upx2px 方法，将对应的 rpx 值转换成了 px
					let height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height; // 让data中定义的swiperheight高度等于计算过后的高度
					// console.log(this.swiperheight)
				}
			});
		}
	}
</script>

<style lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #FFFFFF;
	}

	.kong {
		height: 290rpx;
	}

	.survey_top {
		width: 100%;
		display: block;
	}
	
	.swiper-item{
		margin-top: 35px ;
	}

	.jgsz {
		width: 100%;
	}

	.sticky {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 99;
	}

	.survey_con {
		margin: 0px 10px;
		padding-bottom: 20px;


	}

	.survey_h2 {
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		margin-top: 10px;
	}

	.rdgs_box {
		display: flex;
		height: 100%;
		margin: 0;
		flex-direction: column;
	}

	.rdgs_box1 {
		flex: 1;
		padding: 0;
		height: 100%;
		flex-direction: column;
		display: flex;
		overflow: hidden;

	}

	uni-swiper {
		height: 100%;
	}
</style>
