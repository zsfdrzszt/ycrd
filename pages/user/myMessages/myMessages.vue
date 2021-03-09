<template>
	<!-- 个人中心/双联系/我的留言-->
	<view class="myMessages">
		<wnavall></wnavall>
		<!-- banner图 -->
		<image class="myMessages_image" src="/static/user/user_myMessages_back.jpg" mode="widthFix"></image>
		<!-- 内容 -->
		<view class="myMessages_cont">
			<view class="myMessages_cont_top">
				<text class="myMessages_cont_topitem" @click="change(1)" :class="{active:activetab==1}">全部留言</text>
				<text class="myMessages_cont_topitem" @click="change(2)" :class="{active:activetab==2}">已回复</text>
				<text class="myMessages_cont_topitem" @click="change(3)" :class="{active:activetab==3}">未回复</text>
			</view>
			<!-- 内容 -->
			<view class="myMessages_cont_cen">
				<!-- 全部留言 -->
				<view class="myMessages_cont_cenitem" v-show="activetab==1">
					<CenterMessage :name="item.name" :time="item.time" :status="item.status" :leave="item.leave" :reply="item.reply" v-for="(item,index) in all.reply" :type="all.type"></CenterMessage>
				</view>
				<!-- 已回复 -->
				<view class="myMessages_cont_cenitem" v-show="activetab==2">
					<CenterMessage :name="item.name" :time="item.time" :status="item.status" :leave="item.leave" :reply="item.reply" v-for="(item,index) in replied.reply" :type="replied.type"></CenterMessage>
				</view>
				<!-- 未回复-->
				<view class="myMessages_cont_cenitem" v-show="activetab==3">
					<CenterMessage :name="item.name" :time="item.time" :status="item.status" :leave="item.leave" :reply="item.reply" v-for="(item,index) in noreply.reply" :type="noreply.type"></CenterMessage>
					</view>
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
				all:{
					type:true,
					reply:[
						{
							id:1,
							name:'小飞侠',
							time:'2021-03-08 16:17:59',
							status:'已回复',
							leave:'联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件',
							reply:'联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言'
						},
						{
							id:2,
							name:'小飞侠1',
							time:'2021-03-08 16:17:59',
							status:'未回复',
							leave:'联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件',
							reply:''
						}
					]
				},
				replied:{
					type:false,
					reply:[
						{
							id:1,
							name:'小飞侠',
							time:'2021-03-08 16:17:59',
							status:'已回复',
							leave:'联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件',
							reply:'联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言'
						},
					],
				},
				noreply:{
					type:false,
					reply:[
						{
							id:1,
							name:'小飞侠1',
							time:'2021-03-08 16:17:59',
							status:'未回复',
							leave:'联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件联系常委/我的留言组件',
							reply:''
						}
					]
				}
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
	.myMessages{width: 100%;height: 100%;display: flex;flex-direction: column;overflow: hidden;background-color: #f5f5f5;}
	.myMessages_image{width: 100%;}
	/* 内容 */
	.myMessages_cont{flex: 1;display: flex;flex-direction: column;overflow: hidden;}
	/* 选项卡头部 */
	.myMessages_cont_top{height: 40px;display: flex;background-color: #FFFFFF;border: 1px solid #E6E6E6;}
	.myMessages_cont_topitem{flex: 1;display: flex;justify-content: center;align-items: center;color: #000000;font-size: 14px;}
	.active{color: #ee0000;border-bottom: 2px solid #ee0000;}
	/* 选项卡内容 */
	.myMessages_cont_cen{flex: 1;overflow: auto;}
	.myMessages_cont_cenitem{padding:0px 10px;padding-top: 10px;}
</style>
