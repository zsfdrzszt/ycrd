<template>
	<view class="contactmain">
		<view class="status_bar"></view>
		<view class="content">
			<image src="../../static/surveyimg/banner-rdgk.png" mode="widthFix" style="width: 100%;"></image>
			<view>
				<!-- <u-tabs-swiper ref="uTabs" :list="list" font-size="28" :current="current" @change="tabsChange" :is-scroll="false" active-color="red" inactive-color="black" bar-width="180" swiperWidth="750" :showBar="!showBar"></u-tabs-swiper> -->
				<wtabnav :list="list" ref="uTabs" @change="tabsChange"></wtabnav>
			</view>

			<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<!-- 人大概述 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
						<view class="stickycontact">
							<view class="survey_sec">
								<text class="survey_h2" style=" display: block;text-align: center;" :style="{fontSize:textSize}">榆次区人民代表大会简介</text>
								<text class="surveycontent" :style="{fontSize:textsize}">榆次区人民代表大会是榆次区的国家权力机关。</text> <br>
								<text class="surveycontent" :style="{fontSize:textsize}">榆次区人民代表大会每届任期五年，每年至少举行一次会议，会议由榆次区人民代表大会常务委员会召集。如果常务委员会认为必要，或者经过五分之一以上的代表提议，可以临时召集区人民代表大会会议。区人民代表大会会议必须在有三分之二以上的代表出席时，方能举行。</text>
								<br>
								<text class="surveybold" :style="{fontSize:textsize}" style=" display: block;text-align: center;" >榆次区人民代表大会行使下列职权：</text>
								<text class="surveycontent" :style="{fontSize:textsize}">（一）在榆次区域内，保证宪法、法律、行政法规和上级人民代表大会及其常务委员会决议的遵守和执行，保证国家计划和国家预算的执行</text><br>
								<text class="surveycontent" :style="{fontSize:textsize}">（二）审查和批准榆次区的国民经济和社会发展计划、预算以及它们执行情况的报告</text><br>
								<text class="surveycontent" :style="{fontSize:textsize}">（三）讨论、决定榆次区域内的政治、经济、教育、科学、文化、卫生、环境和资源保护、民政、民族等工作的重大事项；</text><br>
								<text class="surveycontent" :style="{fontSize:textsize}">（四）选举榆次区人民代表大会常务委员会的组成人员；</text><br>
								<text class="surveycontent" :style="{fontSize:textsize}">（五）选举区长、副区长</text><br>
								<text class="surveycontent" :style="{fontSize:textsize}">（六）选举榆次区人民法院院长和人民检察院检察长；选出的人民检察院检察长，须报经上一级人民检察院检察长提请该级人民代表大会常务委员会批准；</text>
								<text class="surveycontent" :style="{fontSize:textsize}">（七）选举上一级人民代表大会代表；</text><br>
								<text class="surveycontent" :style="{fontSize:textsize}">（八）听取和审查榆次区人民代表大会常务委员会的工作报告；</text><br>
								<text class="surveycontent" :style="{fontSize:textsize}">（九）听取和审查榆次区人民政府和人民法院、人民检察院的工作报告；</text><br>
								<text class="surveycontent" :style="{fontSize:textsize}">（十）改变或者撤销榆次区人民代表大会常务委员会不适当的决议；</text><br>
								<text class="surveycontent" :style="{fontSize:textsize}">（十一）撤销榆次区人民政府的不适当的决定和命令</text><br>
								<text class="surveycontent" :style="{fontSize:textsize}">（十二）保护社会主义的全民所有的财产和劳动群众集体所有的财产，保护公民私人所有的合法财产，维护社会秩序，保障公民的人身权利、民主权利和其他权利</text><br>
								<text class="surveycontent" :style="{fontSize:textsize}">（十三）保护各种经济组织的合法权益；</text><br>
								<text class="surveycontent" :style="{fontSize:textsize}">（十四）保障少数民族的权利；</text><br>
								<text class="surveycontent" :style="{fontSize:textsize}">（十五）保障宪法和法律赋予妇女的男女平等、同工同酬和婚姻自由等各项权利</text>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<!--委员会领导  -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
						<zuserlist v-for="(item,index) in textonelist" :key="index" :value="item"></zuserlist>
						<text>已到达最底部</text>
					</scroll-view>
				</swiper-item>
				<!-- 机构设置 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
						<image src="http://qiniu.jza2c.com/uploads/20200613/Fv724HPQicFmV6o7n5zYvQe0Gx0G.png" mode="widthFix"></image>
					</scroll-view>
				</swiper-item>
				<!-- 常委会成员 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
						<view class="layui-tab-item survey_four layui-show">
							<view class="survey_fourtitle">
								榆次区第十六届人大常委会组成人员 <br>(共34名)
							</view>
							<view class="survey_fourrow">
								<view class="survey_fourleft">
									<text class="survey_fourwidth"> 主任</text>
								</view>
								<view class="survey_fourright">
									<navigator class="survey_fourwidth" url="#">李鹏飞</navigator>
								</view>
							</view>
							<view class="survey_fourrow">
								<view class="survey_fourleft">
									<text class="survey_fourwidth"> 副主任</text>
								</view>
								<view class="survey_fourright">
									<navigator class="survey_fourwidth" url="#">武跃勇</navigator>
									<navigator class="survey_fourwidth" url="#">石山爱</navigator>
									<navigator class="survey_fourwidth" url="#">李玉忠</navigator>
								</view>
							</view>
							<view class="survey_fourrow">
								<view class="survey_fourleft">
									<text class="survey_fourwidth"> 委员</text>
								</view>
								<view class="survey_fourright">

									(按姓名笔画排列)

								</view>
							</view>
							<view class="survey_fourrow2">
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										王绍泰
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										王福生
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										王霞
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										任光荣
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										任秀花
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										刘巧杰
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										刘秀叶
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										刘惠青
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										李双喜
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										李秀平
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										李杰
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										李爱兰
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										杨辉峰
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										张文海
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										张永亮
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										张履祥
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										陈太
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										陈丽援
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										范庆文
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										周建宇
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										郑天平
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										郑丽伟
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										药建军
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										俞国栋
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										高亚晋
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										郭秀忠
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										黄正飞
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										黄彩英
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										曹新霞
									</view>
								</navigator>
								<navigator class="a" url="#">
									<view class="survey_fourwidth">
										詹瑜
									</view>
								</navigator>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<wtextsize @click="changetextsize"></wtextsize>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wnavall from "../../components/w-navall/w-navall.vue"
	import wtabnav from "../../components/w-tabnav/w-tabnav.vue"
	import zuserlist from "../../components/z-userlist/z-userlist.vue"
	import wtextsize from "../../components/w-textsize/w-textsize.vue"
	export default {
		components: {
			wnavall,
			wtabnav,
			zuserlist,
			wtextsize
		},
		data() {
			return {
				textsize: "16px",
				textSize: "20px",
				list: [{
					name: "人大概述"
				}, {
					name: "常委会领导"
				}, {
					name: "机构设置"
				}, {
					name: "常委会成员"
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				current1: 0,
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				textonelist: [{
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",
					name: "李鹏",
					job: "榆次区人大常委会主任"
				}, {
					liaison_id:"2",
					url: "http://qiniu.jza2c.com/uploads/20190727/FiEh0Z1x_YLq6WpN1fchOxH3zNtN.jpg",
					name: "武跃",
					job: "榆次区人大常委会副主"
				}, {
					liaison_id:"3",
					url: "http://qiniu.jza2c.com/uploads/20190727/Fv9QbXyM7S558IUlNiPTKw4OtiEB.jpg",
					name: "石山",
					job: "榆次区人大常委会副主任、榆次区总工会主"
				}, {
					liaison_id:"4",
					url: "http://qiniu.jza2c.com/uploads/20190727/Fm83br3hTxnqdMdOD_8S-jfSmpik.jpg",
					name: "李玉",
					job: "榆次区人大常委会副主"
				}]
			}
		},
		methods: {
			tabsChange(index) {
				this.swiperCurrent = index;
				this.showBar = false
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

			},
			changetextsize(e) {
				let num = parseInt(this.textsize)
				let numtitle = parseInt(this.textSize)
				if (e == 1) {
					num++
					numtitle++
				} else if (e == 0) {
					num--
					numtitle--
					if (num < 14) {
						num = 14
					}
					if (numtitle < 14) {
						numtitle = 14
					}
				}
				this.textsize = num + 'px'
				this.textSize = numtitle + 'px'
				// console.log(num)
			}

		}
	}
</script>

<style lang="scss">
	//  人大概述
	.survey_sec {
		margin: 0 10px;
		padding-bottom: 20px;
		// display: flex;
		text-align: left;


		.survey_h2 {
			font-size: 20px;
			font-weight: bold;
			margin-top: 20px;
		}

		.surveycontent {
			display: inline-block;
			text-indent: 2em;
			font-size: 16px;
			font-family: fangsong;
			line-height: 200%;
		}

		.surveybold {
			font-size: 16px;
			font-family: fangsong;
			line-height: 200%;
			font-weight: bold;
		}
	}

	//  常委会成员
	.layui-tab-content>view {
		height: 100%;
		overflow: auto;
		box-sizing: border-box;
		padding-bottom: 40px;
	}

	.survey_four {
		background-color: #f6f8fa;
	}

	.layui-show {
		display: block !important;
	}

	.survey_fourtitle {
		margin: 20px 0;
		font-size: 20px;
		font-family: 黑体;
		font-weight: bold;
		margin-left: 10px;
		margin-right: 10px;
		text-align: center;
	}

	.survey_fourrow {
		display: flex;
		background-color: white;
		padding: 10px 0;
		box-sizing: border-box;
		margin-top: 10px;
	}

	.survey_fourleft {
		width: 100px;
		text-align: center;
	}

	.survey_fourwidth {
		display: inline-block;
		width: 56px;
		text-align: justify;
		text-align-last: justify;
		font-size: 17px;
	}

	.survey_fourright {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.survey_fourrow2 {
		display: flex;
		background-color: white;
		padding: 10px 10px;
		box-sizing: border-box;
		margin-top: 10px;
		flex-wrap: wrap;
	}


	.a {
		width: 25%;
		text-align: center;
		padding-bottom: 20px;
	}

	* {
		padding: 0;
		margin: 0;
		text-decoration: none;
		list-style: none;
	}

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
	}

	uni-swiper {
		height: 70%;
	}
</style>
