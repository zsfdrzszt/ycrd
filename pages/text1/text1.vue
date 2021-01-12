<template>
	<view class="contactmain">
		<view class="status_bar" ></view>
		<view class="content" >
			<!-- <view style="background-image: url(../../static/surveyimg/banner-rdgk.png);background-size:100% 100%;background-repeat: no-repeat; width: 100%; height: 18%;"> -->
			<image src="../../static/surveyimg/banner-rdgk.png" mode="widthFix" style="width: 100%;"></image>
			<view >
							<!-- <u-tabs-swiper ref="uTabs" :list="list" font-size="28" :current="current" @change="tabsChange" :is-scroll="false" active-color="red" inactive-color="black" bar-width="180" swiperWidth="750" :showBar="!showBar"></u-tabs-swiper> -->
							<wtabnav :list="list" ref="uTabs" @change="tabsChange"></wtabnav>
						</view>
						<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
							
							<swiper-item class="swiper-item">
								<scroll-view  scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
									  <view class="survey_con">
									  	<text class="survey_h2">榆次区人民代表大会简介</text>
										<view class="survey_sec" >
											<text class="surveycontent">榆次区人民代表大会是榆次区的国家权力机关。</text>
											<br>
											<text class="surveycontent">榆次区人民代表大会每届任期五年，每年至少举行一次会议，会议由榆次区人民代表大会常务委员会召集。如果常务委员会认为必要，或者经过五分之一以上的代表提议，可以临时召集区人民代表大会会议。区人民代表大会会议必须在有三分之二以上的代表出席时，方能举行。</text>
											<br>
											<text class="surveybold">榆次区人民代表大会行使下列职权：</text>
											<br>
											<text class="surveycontent">（一）在榆次区域内，保证宪法、法律、行政法规和上级人民代表大会及其常务委员会决议的遵守和执行，保证国家计划和国家预算的执行；</text><br>
											<text class="surveycontent">（二）审查和批准榆次区的国民经济和社会发展计划、预算以及它们执行情况的报告；</text><br>
											<text class="surveycontent">（三）讨论、决定榆次区域内的政治、经济、教育、科学、文化、卫生、环境和资源保护、民政、民族等工作的重大事项；</text><br>
											<text class="surveycontent">（四）选举榆次区人民代表大会常务委员会的组成人员；</text><br>
											<text class="surveycontent">（五）选举区长、副区长；</text><br>
											<text class="surveycontent">（六）选举榆次区人民法院院长和人民检察院检察长；选出的人民检察院检察长，须报经上一级人民检察院检察长提请该级人民代表大会常务委员会批准；</text>
											<text class="surveycontent">（七）选举上一级人民代表大会代表；</text><br>
											<text class="surveycontent">（八）听取和审查榆次区人民代表大会常务委员会的工作报告；</text><br>
											<text class="surveycontent">（九）听取和审查榆次区人民政府和人民法院、人民检察院的工作报告；</text><br>
											<text class="surveycontent">（十）改变或者撤销榆次区人民代表大会常务委员会不适当的决议；</text><br>
											<text class="surveycontent">（十一）撤销榆次区人民政府的不适当的决定和命令；</text><br>
											<text class="surveycontent">（十二）保护社会主义的全民所有的财产和劳动群众集体所有的财产，保护公民私人所有的合法财产，维护社会秩序，保障公民的人身权利、民主权利和其他权利；</text><br>
											<text class="surveycontent">（十三）保护各种经济组织的合法权益；</text><br>
											<text class="surveycontent">（十四）保障少数民族的权利；</text><br>
											<text class="surveycontent">（十五）保障宪法和法律赋予妇女的男女平等、同工同酬和婚姻自由等各项权利。</text>
										</view>
									  </view>
									
								</scroll-view>
							</swiper-item>
							
							<swiper-item class="swiper-item">
								<scroll-view scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
									<zuserlist v-for="(item,index) in textonelist" :key="index" :value="item"></zuserlist>
									 <text>已到达最底部</text>
								</scroll-view>
							</swiper-item>
							
							<swiper-item class="swiper-item">
								<scroll-view  scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
									 <image src="http://qiniu.jza2c.com/uploads/20200613/Fv724HPQicFmV6o7n5zYvQe0Gx0G.png" mode="widthFix"></image>
								</scroll-view>
							</swiper-item>
							
							<swiper-item class="swiper-item">
								<scroll-view scroll-y style="height: 100%;width: 100%;text-align: center;" @scrolltolower="onreachBottom">
									
									
									<text>已到达最底部</text>
								</scroll-view>
							</swiper-item>
							
						</swiper>
					</view>
			</view>
			
	</view>
</template>

<script>
	import zuserlist from "../../components/z-userlist/z-userlist.vue"
	import wnewscard from "../../components/w-newscard/w-newscard.vue"
	import wtabnav from "../../components/w-tabnav/w-tabnav.vue"
	export default {
		components:{
			wnewscard,
			wtabnav,
			zuserlist
		},
		data() {
			return {
				textonelist:[{
					url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",
					name:"李鹏飞",
					job:"榆次区人大常委会主任"
				},{
					url:"http://qiniu.jza2c.com/uploads/20190727/FiEh0Z1x_YLq6WpN1fchOxH3zNtN.jpg",
					name:"武跃勇",
					job:"榆次区人大常委会副主任"
				},{
					url:"http://qiniu.jza2c.com/uploads/20190727/Fv9QbXyM7S558IUlNiPTKw4OtiEB.jpg",
					name:"石山爱",
					job:"榆次区人大常委会副主任、榆次区总工会主席"
				},{
					url:"http://qiniu.jza2c.com/uploads/20190727/Fm83br3hTxnqdMdOD_8S-jfSmpik.jpg",
					name:"李玉忠",
					job:"榆次区人大常委会副主任"
				}],
				// showBar:false,
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
					name: '人大概述'
				}, {
					name: '常委会领导'
				}, {
					name: '机构设置'
				},{
					name: '常委会成员'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				current1:0,
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			}
		},
		methods: {
			tabsChange(index) {
				this.swiperCurrent = index;
				// this.showBar= false
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

<style lang="scss">
	
	.survey_con {
		margin: 0 10px;
		padding-bottom: 20px;
		padding-top: 10px;
		.survey_sec {
			text-align: justify;
			flex-wrap: wrap;
		}
		.surveycontent {
			display: inline-block;
			font-size: 16px; 
			font-family: fangsong; 
			text-indent: 2em;
			line-height: 200%;
		}
		.survey_h2 {
			    text-align: center;
			    font-size: 20px;
			    font-weight: bold;
			    margin-top: 20px;
		}
		.surveybold {
			font-size: 16px; 
			font-family: fangsong; 
			line-height: 200%; 
			font-weight: bold;
			display: inline-block;
			text-indent: 2em;
		}
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
		// background: url(../../static/text2img/common_bg.jpg);
	}
	uni-swiper{
		height: 70%;
	}
</style>
