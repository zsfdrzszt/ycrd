<template>
	<view>
		<view class="sticky">

			<!-- 顶部图片 -->
			<image class="survey_top" src="../../static/surveyimg/banner-rdgk.png" mode="widthFix"></image>

			<!-- 选项卡 -->
			<view>
				<view>
					<u-tabs-swiper ref="uTabs" class="tab-control" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
					 active-color="#d71f07" bar-height="3" font-size="15" height="60" bar-width="150"></u-tabs-swiper>
				</view>
			</view>
		</view>
		<view class="kong">

		</view>
		<!-- <text>人大概述</text> -->
		<swiper :current="swiperCurrent" style="min-height:100vh;width: 100%;" bar-width="70" @transition="transition">
			<swiper-item class="swiper-item" style="width: 100%;">
				<scroll-view style="width: 100%;" :style="{height:swiperheight + 'px'}">
					<text>榆次区人民代表大会简介</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
					<text>榆次区人民代表大会是榆次区的国家权力机关。</text>
				</scroll-view>
			</swiper-item>
			、

			<!--<text>常委会领导</text>  -->
			<swiper-item class="swiper-item" style="width: 100%;">
				<scroll-view style="width: 100%;">
					<image class="jgsz" src="../../static/surveyimg/jgsz.png" mode="widthFix"></image>
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
	export default {
		// components: {
		// 	sunTab
		// },
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
				swiperheight: 0, //这里是动态赋值的高度
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
				console.log(e)
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
					console.log(this.swiperheight)
				}
			});
		}
	}
</script>

<style>
	.kong {
		height: 290rpx;
	}

	.survey_top {
		width: 100%;
		display: block;
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
</style>
