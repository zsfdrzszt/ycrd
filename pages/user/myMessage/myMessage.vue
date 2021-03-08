<template>
	<!-- 个人中心/双联系/我的回复-->
	<view class="myMessage">
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
				<view class="myMessage_cont_cenitem" v-show="activetab==1">
					1
				</view>
				<view class="myMessage_cont_cenitem" v-show="activetab==2">
					2
				</view>
				<view class="myMessage_cont_cenitem" v-show="activetab==3">
					3
				</view>
				<view class="myMessage_cont_cenitem" v-show="activetab==4">
					4
				</view>
				<view class="myMessage_cont_cenitem" v-show="activetab==5">
					5
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activetab:1
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
</style>
