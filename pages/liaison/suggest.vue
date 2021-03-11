<template>
	<view class="suggest">
		<view class="status_bar"></view>
		<!-- 菜单组件 -->
		<wnavall></wnavall>
		<!-- 内容 -->
		<view class="suggest_cont">
			<!-- 选项卡头部 -->
			<view class="suggest_tab">
				<text class="textnav" :class="{activetab:1==active }" @click="change(1)">流程图</text>
				<text class="textnav" :class="{activetab:2==active }" @click="change(2)">人代会期间</text>
				<text class="textnav" :class="{activetab:3==active }" @click="change(3)">闭会期间</text>
			</view>
			<!-- 选项卡内容 -->
			<view class="suggest_tabcont">
				<!-- 流程图 -->
				<view class="tabcont_tem flow_chart" v-show="1 == active">
					<image class="" :src="chart" mode="widthFix"></image>
				</view>
				<!-- 人代会期间 -->
				<view class="tabcont_tem attend_meeting" v-show="2 == active">
					<headline :list="list"></headline>
				</view>
				<!-- 闭会期间 -->
				<view class="tabcont_tem close_meeting" v-show="3 == active">
					<!-- <dropdown :list="dropdownlist"></dropdown> -->
					<!-- 下拉列表 -->
					<view class="close_meetinglist">
						<wdropdown :list= "droplist1"  @searchdrop="searchdrop1"></wdropdown>
						<wdropdown :list= "droplist2" @searchdrop="searchdrop2"></wdropdown>
					</view>
					<!-- 标题 -->
					<view class="close_meetingtitle">
						<text class="textfourbar">{{val1}}{{val2}}</text>
					</view>
					
					<!-- <wtextcards :list="closelist" :num="closenum"></wtextcards> -->
					<view class="textmainlist">
						<text class="textmassage" v-show="closelist.length == 0">暂无数据</text>
						<wtextcards v-for="(item,index) in closelist" :list="item" :num="index" :key="index" v-if="3== active"></wtextcards>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import wnavall from "../../components/w-navall/w-navall.vue"
	import headline from "../../components/headline/headline.vue"
	import wdropdown from "../../components/w-dropdown/w-dropdown.vue"
	import wtextcards from "../../components/w-text4cards/w-text4cards.vue"
	export default {
		components: {
			wnavall,
			headline,
			wdropdown,
			wtextcards
		},
		data() {
			return {
				active:1,
				chart:'https://qiniu.jza2c.com/uploads/20200619/FoYGOlFMjD80ir2O0AUdrarpBCgy.png',
				list:[
					{
						id:1,
						title:'《关于房地产审批手续电子化办公及北部新城道路修建的建议》',
						time:'2020-04-28'
					},
					{
						id:2,
						title:'《关于王湖村与南沟村民子弟入学问题》',
						time:'2020-04-29'
					}
					
				],
				val:'',
				val1:'2021年',
				val2:'第一季度',
				droplist1:{name:"全部",list:[{content:"2019"},{content:"2020"}]},
				droplist2:{name:"全部",list:[{content:"第一季度"},{content:"第二季度"},{content:"第三季度"},{content:"第四季度"}]},
				closenum:0,
				closelist:[],
				closelistss:[{suggest:"电费滚滚根据客户",name:"回复",time:"2020.1.13",condition:"打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"张三",time:"2019.1.13",condition:"打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"回复",time:"2019.1.13",condition:"打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"李四",time:"2020.1.13",condition:"打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"回复",time:"2020.1.13",condition:"打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"王五",time:"2019.1.13",condition:"打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"回复",time:"2020.1.13",condition:"打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"赵六",time:"2020.1.13",condition:"打广告的THX绕太阳"},
				{suggest:"电费滚滚根据客户",name:"回复",time:"2020.1.13",condition:"打广告的THX绕太阳"},]
			}
		},
		methods: {
			change(n){
				this.active=n;
			},
			searchdrop1(val){
				this.val1 = val.content+'年'
				this.closelist=[]
				this.closelistss.filter((item)=>{
					if(item.time.match(val.content)){
						this.closelist.push(item)
					}
				})
			},
			searchdrop2(val){
				this.val2 = val.content
			}
		}
	}
</script>

<style>
	* {padding: 0;margin: 0;text-decoration: none;list-style: none;box-sizing: border-box;}
	page{height: 100%; overflow: hidden;}
	.suggest{width: 100%;height: 100%;background-image: url('../../static/liaison/common_suggest_bg.jpg');background-size: cover;background-position: center;background-repeat: no-repeat;background-attachment: fixed;}
	.suggest_cont{width: 100%;height: 100%;display: flex;flex-direction: column;}
	/* 选项卡头部 */
	.suggest_tab{height: 40px;display: flex;border-bottom:1px solid red;}
	.textnav{flex: 1;display: flex;align-items: center;justify-content: center;font-weight: bold;}
	.activetab{color: red;border-bottom: 1px solid red;}
	/* 选项卡内容 */
	.suggest_tabcont{width: 100%;flex: 1;text-align: center;overflow: auto;}
	.tabcont_tem{width: 100%;height: 100%;}
	.flow_chart image{width: 70%;margin: 20px 0px;}
	.attend_meeting{padding: 0px 10px;padding-top: 20px;}
	.close_meetinglist{display: flex;justify-content: center;padding-top: 15px;}
	.dropmain:first-child{margin-right: 30px;}
	.close_meetingtitle{padding-top: 15px;}
	.textfourbar{font-weight: bold;font-size: 18px;}
	.textmassage{display: block;margin-top: 50px;text-align: center;font-size: 20px;font-weight: bold;font-family: 黑体;color: red;}
</style>
