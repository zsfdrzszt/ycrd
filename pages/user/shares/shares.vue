<template>
	<view class="shares">
		<!-- banner图 -->
		<view class="status_bar"></view>
		<image class="shares_image" src="/static/user/user_share_back.jpg" mode="widthFix"></image>
		<view class="shares_cont">
			<!-- 列表详情 -->
			<view class="shares_contitem"> 
				<!-- 标题 -->
				<view class="items">
					<text class="leftitems">标题</text>
					<text class="rightitems">{{detail.title}}</text>
				</view>
				<!-- 发布时间 -->
				<view class="items">
					<text class="leftitems">发布时间</text>
					<text class="rightitems">{{detail.time}}</text>
				</view>
				<!-- 地点 -->
				<view class="items">
					<text class="leftitems">地点</text>
					<text class="rightitems">{{detail.site}}</text>
				</view>
				<!-- 内容 -->
				<view class="items">
					<text class="leftitems">内容</text>
				</view>
				<view class="items">
					<text class="rightitemss">{{detail.cont}}</text>
				</view>
				<!-- 方式 -->
				<view class="items">
					<text class="leftitems">方式</text>
					<text class="rightitemss">{{detail.way}}</text>
				</view>
				<!-- 查看图片 -->
				<view class="items">
					<text class="leftitems">查看图片</text>
				</view>
				<view class="items">
					<view class="uni-padding-wrap">
						<view class="page-section swiper">
							<view class="page-section-spacing">
								<swiper class="swiper"  :duration="duration"  :display-multiple-items='this.detail.image.length>=3? "3" : this.detail.image.length'>
									<swiper-item v-for="(items,index) in detail.image">
										<view class="swiper-item">
											<image class="swiper_image" :src="items" ></image>
										</view>
									</swiper-item>
								</swiper>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 成效 -->
			<view class="shares_contitem" v-for="(item,index) in effect">
				<!-- 代表 -->
				<view class="items">
					<text class="leftitems">代表</text>
					<text class="rightitemss">{{item.name}}</text>
				</view>
				<!-- 成效 -->
				<view class="items">
					<text class="leftitems">成效</text>
				</view>
				<view class="items">
					<text class="rightitemss">{{item.results}}</text>
				</view>
				<!-- 查看图片 -->
				<view class="items">
					<text class="leftitems">查看图片</text>
				</view>
				<view class="items">
					<view class="uni-padding-wrap">
					    <view class="page-section swiper">
					        <view class="page-section-spacing">
					            <swiper class="swiper"  :duration="duration" :display-multiple-items='item.pic.length>=3? "3" :  item.pic.length'>
					                <swiper-item v-for="(items,index) in item.pic">
					                    <view class="swiper-item">
											<image class="swiper_image" :src="items"></image>
										</view>
					                </swiper-item>
					                
					            </swiper>
					        </view>
					    </view>
					</view>
				</view>
			</view>
			<view class="shares_btn">
				<button type="default"  class="shares_btn1" @click="add">添加</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				duration: 500,
				detail:{
					title:'关于给予养殖户政策支持的建议',
					time:'2021年03月09日',
					site:'榆次',
					cont:'随着生态环保理念在各项政策中逐步体现，原有的养殖经营环境发生变化，禁养区的划设、环保政策的加码等措施对养殖行业提出了新的要求，尤其对合作社、家庭农场以及农户等养殖主体提出了更高的要求，为了适应新的政策，家庭农场以及农户的养殖设备迭代更新、环保设施加装更换的需求旺盛，养殖户在新的政策下转型也遇到一些困难。',
					way:'对建设污水处理站、堆肥设施设备等环保设施新建、加装和更换的养殖户给予资金补贴',
					image:['https://i04piccdn.sogoucdn.com/3a9af6a5c96568f8','https://cdn.uviewui.com/uview/swiper/1.jpg']
				},
				effect:[
					{
						id:1,
						name:'詹瑜',
						results:'已申请公开',
						pic:['https://cdn.uviewui.com/uview/swiper/1.jpg','https://cdn.uviewui.com/uview/swiper/2.jpg']
					},
					{
						id:2,
						name:'曹新霞',
						results:'已回复',
						pic:['https://cdn.uviewui.com/uview/swiper/1.jpg','https://cdn.uviewui.com/uview/swiper/2.jpg','https://cdn.uviewui.com/uview/swiper/3.jpg','https://cdn.uviewui.com/uview/swiper/2.jpg']
					}
					
				]
			}
		},
		methods: {
			add(){
				uni.navigateTo({
				    url: '/pages/user/shareaddu/shareaddu'
				});
			}
		}
	}
</script>

<style scoped>
	/* page{width: 100%;height: 100%;overflow: auto;} */
	.shares{width: 100%;background-image: url('../../../static/create/common_bg.jpg');background-position: center;background-size: cover;background-repeat: no-repeat;background-attachment: fixed;}
	.shares_image{width: 100%;}
	/* 内容 */
	.shares_cont{width: 100%;padding: 0px 10px;padding-top: 10px;}
	.shares_contitem{width: 100%;margin-bottom: 15px;border-radius: 8px;border: 1px solid red;padding: 0px 10px;}
	.items{width: 100%;display: flex;justify-content: space-between; line-height: 30px;margin: 10px 0px ;margin-bottom: 10px; margin-top: 5px;padding: 0px 10px;padding-bottom: 5px;border-bottom: 1px solid #ccc;}
	.items:last-child{border: none;}
	.leftitems{width: 64px;text-align: justify;text-align-last: justify;font-weight: bold;}
	.rightitems{margin-left: 10px;flex: 1;text-align: right;color: #777777;}
	.rightitemss{color: #777777;text-indent: 2em;}
	.shares_btn{display: flex;align-items: center;justify-content: center;}
	.shares_btn1{margin: 20px 0;background-color: #CE1717;height: 38px;line-height: 38px;color: #fff;width: 64px;text-align: center;font-size: 14px;}
	.items_pic{width: 104px;height: 75px;}
	.items_pic img{margin-right: 15px;}
	/* 轮播图 */
	.uni-padding-wrap{width: 100%;}
	.uni-swiper-item{padding: 0 10px;box-sizing: border-box;overflow: hidden;}
	.swiper_image{width: 200rpx;height: 75px;}
	uni-swiper{height: 75px;}
	uni-swiper-item{display: flex;justify-content: center;align-items: center;}
</style>
