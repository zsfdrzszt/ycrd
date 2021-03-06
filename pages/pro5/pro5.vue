<template>
	<view class="pro5">
		<view class="status_bar">
		</view>
		<!-- <viewvideo :list="item" v-for="(item,index) in list "></viewvideo> -->
		<!-- <organization :list="item" v-for="(item,index) in list1"></organization> -->
		<!-- <wtextsize @click="changetextsize"></wtextsize> -->
		<!-- <relation :list="item" :num="index" v-for="(item,index) in list2" ></relation> -->
		<!-- <reply v-for="(item,index) in list3" :list="item"></reply> -->
		<!-- <system :content="item.content" v-for="(item,index) in list4" :time="item.time"></system> -->
		<arrange :list="item" v-for="(item,index) in list5"></arrange>
		<!-- <headline :list="item" v-for="(item,index) in list6" :num="index+1"></headline> -->
		<!-- <wdropdown :list= "list7"  @searchdrop="searchdrop1"></wdropdown> -->
		<perform   :list="item" v-for="(item,index) in list8" :num="index+1" :state="2"></perform>
	</view>
</template>

<script>
	import viewvideo from "../../components/viewvideo/viewvideo.vue"  //图片 视频组件
	import organization  from "../../components/organization/organization.vue"  //代表组织组件
	import wtextsize from "../../components/w-textsize/w-textsize.vue"
	import relation  from "../../components/relation/relation.vue"    //联系卡片
	import reply from "../../components/reply/reply.vue"      //回复组件
	import system  from "../../components/system/system.vue"      //履职管理制度组件
	import arrange  from "../../components/arrange/arrange.vue"      //履职管理制度组件
	import headline  from "../../components/headline/headline.vue"   //建议人代会期间
	import wdropdown from "../../components/w-dropdown/w-dropdown.vue" //下拉列表
	import perform from "../../components/perform/perform.vue"    //履职内容卡片
	
	export default { 
		components:{
			viewvideo,
			wtextsize,
			organization,
			relation,
			system,
			arrange,
			headline,
			wdropdown
		},
		data() {
			return {
				textsize: "16px",
				textSize: "20px",
				list:[{url:"http://qiniu.jza2c.com/uploads/20210219/Fui8_6m4QgbNuPL_mk4dfZ75GzSS.png",content:"榆次新闻",video:"http://qiniu.jza2c.com/uploads/20210219/lniLUjnuwQhMkqy-9Z8mG8kOHgAq.mp4"},{url:"http://qiniu.jza2c.com/uploads/20210219/Fui8_6m4QgbNuPL_mk4dfZ75GzSS.png",content:"榆次新闻",video:"http://qiniu.jza2c.com/uploads/20210219/lniLUjnuwQhMkqy-9Z8mG8kOHgAq.mp4"}],
				list1:[{url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",name:"氨基酸",next:[{url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",name:"氨基酸",},{url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",name:"氨基酸",},{url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",name:"氨基酸",}]}],
			    list2:[{space:["区人大监察和司法委员会","区人大监察和司法委员会"],aim:'司法委员会',num:7,content:'详情'}],
				list3:[{content:"普惠幼儿园的方案什么情况了？",name:"任光耀",time:"2021-03-04 15:00:05",reply:{content:"普惠幼儿园的方案什么情况了？",name:"任光耀",time:"2021-03-04 15:00:05"}}],
				list4:[{content:"人大代表接待选民制度"},{content:"人大代表接待选民制度",time:"2020-2-1"},{content:"人大代表接待选民制度",time:"2020-2-1"},{content:"人大代表接待选民制度",time:"2020-2-1"}],
				list5:[{time:'01',title:'集中学习',space:'乡大活动中心',name:'任光荣',content:'省委书记骆惠宁在全省组织工作会议上的讲话',state:1,attitude:0},{time:'01',title:'集中学习',space:'乡大活动中心',name:'任光荣',content:'省委书记骆惠宁在全省组织工作会议上的讲话',state:0,attitude:1}],
				list6:[{title:'区人大监察和司法委员会',time:"2020.2.2"}],
				list7:{name:"全部",list:[{content:"2019"},{content:"2020"},{content:"2021"}]},
				list8:[{statio:'北关街道',name:"张爱变",time:'2020.2.2',space:"北关街道",way:"为民服务",content:'今天我村委给全体村民发福利，大米，白面，油，村民十分高兴。',effect:"好",img:["http://qiniu.jza2c.com/onadvise/20210221/fbccac6012192161fbd34a1ce12a4138","http://qiniu.jza2c.com/onadvise/20210221/9ad3c10de9e35f985752fae663ebc3e8","http://qiniu.jza2c.com/onadvise/20210221/f9e055f2be0cc224c1d2153844897005"]},{statio:'北关街道',name:"张爱变",time:'2020.2.2',space:"北关街道",way:"为民服务",content:'今天我村委给全体村民发福利，大米，白面，油，村民十分高兴。',effect:"好",img:["http://qiniu.jza2c.com/onadvise/20210221/fbccac6012192161fbd34a1ce12a4138",]}],
			    list8:[{title:"2020年5月27日郭家堡乡第十七届人民代表大会第七次会议",open:"2020-05-27",close:"2020-05-27",join:1,say:10,vote:1,suggest:2,check:0},{title:"2020年5月27日郭家堡乡第十七届人民代表大会第七次会议",open:"2020-05-27",close:"2020-05-27",join:0,say:10,vote:0,suggest:0,check:1}],
			}
		},
		methods: {
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
	
	page {
		height: 100%;
		position: relative;
	}
	.pro5 {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: url(../../static/indeximg/county_common_index_bg.png);
		background-size: cover;
	}
</style>
