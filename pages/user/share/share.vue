<template>
	<!-- 个人中心/履职共享页 -->
	<view class="share">
		<view class="status_bar"></view>
		<wnavall></wnavall>
		<!-- banner图 -->
		<image class="share_image" src="/static/user/user_share_back.jpg" mode="widthFix"></image>
		<view class="share_cont">
			<view class="share_allcont">
				<!-- 履职共享 -->
				<navigator url="/pages/user/shares/shares" hover-class="none" v-for="(item,index) in list" :key="index">
					<view class="centershare">
						<view class="centershare_title">
							{{index+1}}、{{item.title}}
						</view>
						<view class="centershare_cont">
							<view class="centershare_leftcont">
								<text class="word" v-if="item.status=='正常'" :style="{background:word1}">{{item.status}}</text>
								<text class="word" v-if="item.status=='紧急'" :style="{background:word2}">{{item.status}}</text>
								<text class="word" v-if="item.status=='非常紧急'" :style="{background:word3}">{{item.status}}</text>
								<text>{{item.time}}</text>
							</view>
							<view class="centershare_rightcont">
								<u-icon name="arrow-right"></u-icon>
							</view>
						</view>
					</view>
				</navigator>
			</view>
			<navigator url="/pages/user/shareadd/shareadd" hover-class="none" class="share_btn1">
				<view class="share_btn">
					<u-image class="share_btnpic" width="100px" src="/static/user/user_share_add.png" mode="widthFix"></u-image>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default {
		components:{
			wnavall
		},
		data() {
			return {
				word1:'#5cb85c',
				word2:'#f0ad41',
				word3:'#d9534f',
				list:[
					{
						id:1,
						title:'关于给予养殖户政策支持的建议',
						status:'正常',
						time:'2021-03-09'
					},{
						id:2,
						title:'关于急需加强我区居家养老服务机构的建议',
						status:'紧急',
						time:'2021-03-09'
					},{
						id:3,
						title:'关于尽快增、配社区干部的建议',
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
	.share_cont{flex: 1;height: 80%;display: flex;flex-direction: column;overflow: hidden;padding: 0px 10px;padding-top: 10px;}
	.share_allcont{height: 100%;overflow: auto;}
	.share_btn{width: 100%;height: 70px;display: flex;justify-content: center;align-items: center;}
	/* .share_btn1{display: block;} */
	/* .share_btnpic{width: 100%;} */
	.centershare{width: 100%;background-color: #FFFFFF;border-radius: 5px;padding: 8px;margin-bottom: 10px;}
	.centershare_title{font-size: 16px;color:#333333;}
	.centershare_cont{line-height: 50px;display: flex;justify-content: space-between;}
	.word{color: #FFFFFF;border-radius: 5px;padding: 2px 5px;margin-right: 10px;}
	.centershare_leftcont{font-size: 16px;color: #333333;}
</style>
