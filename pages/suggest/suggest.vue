<template>
	<view class="suggest">
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
						3
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import wnavall from "../../components/w-navall/w-navall.vue"
	import headline from "../../components/headline/headline.vue"
	export default {
		components: {
			wnavall,
			headline,
			
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
					
				]
			}
		},
		methods: {
			change(n){
				this.active=n;
			}
		}
	}
</script>

<style>
	* {padding: 0;margin: 0;text-decoration: none;list-style: none;box-sizing: border-box;}
	page{height: 100%;}
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
</style>
