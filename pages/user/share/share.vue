<template>
	<!-- 个人中心/履职共享页 -->
	<view class="share">
		<wnavall></wnavall>
		<!-- banner图 -->
		<image class="share_image" src="/static/user/user_share_back.jpg" mode="widthFix"></image>
		<view class="share_cont">
			<view class="share_allcont">
				<CenterShare v-for="(item,index) in list" :key="index" :num="index+1" :title="item.title" :status="item.status" :time="item.time"></CenterShare>
			</view>
			<navigator url="" hover-class="none" class="share_btn1">
				<view class="share_btn">
					<u-image class="share_btnpic" width="100px" src="/static/user/user_share_add.png" mode="widthFix"></u-image>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import wnavall from "@/components/w-navall/w-navall.vue"
	import CenterShare from "@/components/CenterShare/CenterShare.vue"
	export default {
		components:{
			wnavall,
			CenterShare
		},
		data() {
			return {
				list:[
					{
						id:1,
						title:'加油',
						status:'正常',
						time:'2021-03-09'
					},{
						id:2,
						title:'加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油',
						status:'紧急',
						time:'2021-03-09'
					},{
						id:3,
						title:'加油2',
						status:'非常紧急',
						time:'2021-03-09'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	page{width: 100%;height: 100%;}
	.share{width: 100%;height: 100%;display: flex;flex-direction: column;overflow: hidden;background-color: #F5F5F5;}
	.share_image{width: 100%;}
	.share_cont{flex: 1;height: 0;display: flex;flex-direction: column;overflow: hidden;padding: 0px 10px;padding-top: 10px;}
	.share_allcont{flex: 1;overflow: auto;}
	.share_btn{width: 100%;height: 70px;display: flex;justify-content: center;align-items: center;}
	/* .share_btn1{display: block;} */
	/* .share_btnpic{width: 100%;} */
</style>
