<template>
	<!-- 个人中心/双联系/我的回复-->
	<view class="myMessage">
		<view class="status_bar"></view>
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
				<view class="myMessage_cont_cenitem" >
					<CenterMessage :name="item.name" :time="item.time" :status="item.status" :leave="item.leave" :reply="item.reply" v-for="(item,index) in list"  :type="activetab==1?true:false"></CenterMessage>
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
				list:[],
				all:[
					{
						id:1,
						name:'程广生',
						time:'2021-03-08 16:17:59',
						state:2,
						status:'已回复',
						leave:'想去参观一下映霜红桃，学习一下技术',
						reply:'星期一到星期五，随时可以过来参观，地址：张庆乡北胡乔村。可以加微信：jzsj7788'
					},{
						id:2,
						name:'李爱莲',
						state:3,
						time:'2021-03-08 16:17:59',
						status:'未回复',
						leave:'小牛线拆迁搅拌站需要办临时用地手续，何时可以帮忙办理',
						reply:''
					},
					{
						id:3,
						name:'李爱莲',
						state:4,
						time:'2021-03-08 16:17:59',
						status:'站长驳回',
						leave:'小区开展普发教育，让居民知法懂法守法。',
						reply:'不同意'
					},
					{
						id:4,
						name:'程广生',
						state:5,
						time:'2021-03-08 16:17:59',
						status:'已通过',
						leave:'排查楼宇外墙安全隐患，防止楼层建筑材料高层坠物伤人伤物',
						reply:'好的，一会召开业委会安排。'
					},
					{
						id:5,
						name:'程广生',
						state:5,
						time:'2021-03-08 16:17:59',
						status:'已通过',
						leave:'排查楼宇外墙安全隐患，防止楼层建筑材料高层坠物伤人伤物',
						reply:'好的，一会召开业委会安排。'
					}
				],
			}
		},
		mounted() {
			this.change(1)
		},
		methods: {
			change(n){
				this.activetab=n;
				this.list=this.all.filter(item=>item.state==n)
				if(n==1){
					this.list = this.all;
				}
			}
		}
	}
</script>

<style scoped>
	page{width: 100%;height: 100%;overflow: hidden;}
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
