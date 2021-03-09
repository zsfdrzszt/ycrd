<template>
	<!-- 个人中心/双联系/我的回复-->
	<view class="myMessage">
		<wnavall></wnavall>
		<!-- banner图 -->
		<image class="myMessage_image" src="/static/user/user_mymesage_back.jpg" mode="widthFix"></image>
		<!-- 内容 -->
		<view class="myMessage_cont">
			<view class="myMessage_cont_top">
				<text class="myMessage_cont_topitem" @click="change(1)" :class="{active:activetab==1}">全部留言</text>
				<text class="myMessage_cont_topitem" @click="change(2)" :class="{active:activetab==2}">已回复</text>
				<text class="myMessage_cont_topitem" @click="change(3)" :class="{active:activetab==3}">未回复</text>
				<text class="myMessage_cont_topitem" @click="change(4)" :class="{active:activetab==4}">站长驳回</text>
				<text class="myMessage_cont_topitem" @click="change(5)" :class="{active:activetab==5}">已通过</text>
			</view>
			<!-- 内容 -->
			<view class="myMessage_cont_cen">
				<!-- 全部留言 -->
				<view class="myMessage_cont_cenitem" v-show="activetab==1">
					<CenterMessage :name="item.name" :time="item.time" :status="item.status" :leave="item.leave" :reply="item.reply" v-for="(item,index) in all" :type="true"></CenterMessage>
				</view>
				<!-- 已回复 -->
				<view class="myMessage_cont_cenitem" v-show="activetab==2">
					<CenterMessage :name="item.name" :time="item.time" :status="item.status" :leave="item.leave" :reply="item.reply" v-for="(item,index) in replied" :type="false"></CenterMessage>
				</view>
				<!-- 未回复 -->
				<view class="myMessage_cont_cenitem" v-show="activetab==3">
					<CenterMessage :name="item.name" :time="item.time" :status="item.status" :leave="item.leave" :reply="item.reply" v-for="(item,index) in noreply" :type="false"></CenterMessage>
				</view>
				<!-- 站长驳回 -->
				<view class="myMessage_cont_cenitem" v-show="activetab==4">
					<CenterMessage :name="item.name" :time="item.time" :status="item.status" :leave="item.leave" :reply="item.reply" v-for="(item,index) in reject" :type="false"></CenterMessage>
				</view>
				<!-- 已通过 -->
				<view class="myMessage_cont_cenitem" v-show="activetab==5">
					<CenterMessage :name="item.name" :time="item.time" :status="item.status" :leave="item.leave" :reply="item.reply" v-for="(item,index) in pass" :type="false"></CenterMessage>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import wnavall from "@/components/w-navall/w-navall.vue"
	import CenterMessage from "@/components/CenterMessage/CenterMessage.vue"
	export default {
		components:{
			wnavall,
			CenterMessage
		},
		data() {
			return {
				activetab:1,
				all:[
					{
						id:1,
						name:'小飞侠1',
						time:'2021-03-08 16:17:59',
						status:'已回复',
						leave:'加油',
						reply:'。'
					},{
						id:2,
						name:'小飞侠2',
						time:'2021-03-08 16:17:59',
						status:'未回复',
						leave:'加油',
						reply:''
					},{
						id:3,
						name:'小飞侠3',
						time:'2021-03-08 16:17:59',
						status:'站长驳回',
						leave:'不成立',
						reply:'不同意'
					},{
						id:4,
						name:'小飞侠4',
						time:'2021-03-08 16:17:59',
						status:'已通过',
						leave:'联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委',
						reply:'联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委'
					}
				],
				replied:[
					{
						id:1,
						name:'小飞侠1',
						time:'2021-03-08 16:17:59',
						status:'已回复',
						leave:'加油',
						reply:'。'
					}
				],
				noreply:[
					{
						id:1,
						name:'小飞侠2',
						time:'2021-03-08 16:17:59',
						status:'未回复',
						leave:'加油',
						reply:''
					}
				],
				reject:[
					{
						id:1,
						name:'小飞侠3',
						time:'2021-03-08 16:17:59',
						status:'站长驳回',
						leave:'不成立',
						reply:'不同意'
					}
				],
				pass:[
					{
						id:1,
						name:'小飞侠4',
						time:'2021-03-08 16:17:59',
						status:'已通过',
						leave:'联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委',
						reply:'联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委联系常委'
					}
				]
				
				
			}
		},
		methods: {
			change(n){
				this.activetab=n;
			}
		}
	}
</script>

<style scoped>
	page{width: 100%;height: 100%;}
	.myMessage{width: 100%;height: 100%;display: flex;flex-direction: column;overflow: hidden;background-color: #f5f5f5;}
	.myMessage_image{width: 100%;}
	/* 内容 */
	.myMessage_cont{flex: 1;display: flex;flex-direction: column;overflow: hidden;}
	/* 选项卡头部 */
	.myMessage_cont_top{height: 40px;display: flex;background-color: #FFFFFF;border: 1px solid #E6E6E6;}
	.myMessage_cont_topitem{flex: 1;display: flex;justify-content: center;align-items: center;color: #000000;font-size: 14px;}
	.active{color: #ee0000;border-bottom: 2px solid #ee0000;}
	/* 选项卡内容 */
	.myMessage_cont_cen{flex: 1;overflow: auto;}
	.myMessage_cont_cenitem{padding:0px 10px;padding-top: 10px;}
</style>
