<template>
	<view class="about">
		<!-- banner图 -->
		<image class="about_image" src="../../static/user/user_aboutus_back.jpg" mode="widthFix"></image>
		<view class="about_cont">
			<text class="about_cont_intro">本平台由山西华迅网络科技股份有限公司开发，在使用过程中如有疑问，请及时与我们联系，我们第一时间为您解决</text>
			<view class="about_cont_info">
				<view class="about_cont_infoitem">
					<text class="about_leftitem">公司地址:</text>
					<text class="about_rightitem">山西省晋中市榆次区金科智慧科技城百姓创业基地A9-1-4楼</text>
				</view>
				<view class="about_cont_infoitem">
					<text class="about_leftitem">客服电话:</text>
					<text class="about_rightitem">15935693186</text>
				</view>
				<view class="about_cont_infoitem">
					<text class="about_leftitem">工作时间:</text>
					<text class="about_rightitem">7*24小时</text>
				</view>
				<view class="about_cont_infoitem">
					<text class="about_leftitem">客服邮箱:</text>
					<text class="about_rightitem">sunwang@jzhxwl.com</text>
				</view>
			</view>
			<image class="about_code" src="../../static/user/user_aboutus_code.jpg" mode="widthFix"></image>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.about{width: 100%;height: 100%;}
	.about_image{width: 100%;}
	.about_cont{padding: 0 10px;padding-top: 20px;font-size: 16px;    display: flex;flex-direction: column;align-items: center;}
	.about_cont_intro{line-height: 28px;color: #666;}
	.about_cont_info{padding: 40px 9%;}
	.about_cont_infoitem{display: flex;margin-bottom: 10px;}
	.about_leftitem{font-weight: bold;width: 70px;}
	.about_rightitem{flex: 1;}
	.about_code{width: 25%;}
</style>
