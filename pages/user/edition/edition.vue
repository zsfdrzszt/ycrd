<template>
	<view class="edition">
		<view class="status_bar"></view>
		<!-- 上方 -->
		<view class="edition_header">
			<view class="edition_dang">当前版本</view>
			<view class="edition_tim">[RDYC]20210223</view>
			<view class="edition_update">更新内容:</view>
			<view class="edition_txt">
				<view class="edition_txt1">{{txt1}}</view>
				<view class="edition_txt2">{{txt2}}</view>
				<view class="edition_txt2">{{txt3}}</view>
				<view class="edition_txt1">{{txt4}}</view>
			</view>
			<navigator url="/pages/user/edition/editiondet" hover-class="none" class="edition_chak">
			   [查看更多]
			</navigator>
		</view>
		<view class="edition_center">
			<navigator url="/pages/user/edition/editiondet" hover-class="none" class="edition_center_item">
				<view class="edition_center_leftitem">
					RDYC<text class="edition_da">1.0.2</text>
				</view>
			   <view class="edition_center_left">
				   <u-icon name="arrow-right" color="#9b9b9b" size="30"></u-icon>
			   </view>
			</navigator>
			<navigator url="/pages/user/edition/editiondet" hover-class="none" class="edition_center_item">
				<view class="edition_center_leftitem">
					RDYC<text class="edition_da">1.0.1</text>
				</view>
			   <view class="edition_center_left">
				   <u-icon name="arrow-right" color="#9b9b9b" size="30"></u-icon>
			   </view>
			</navigator>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				txt1:'1.优化展示效果，展示以下活动工作内容；',
				txt2:'1.1“察民情、知民忧、谋发展、促和谐”;',
				txt3:'1.2“抗击疫情 大爱无疆”;',
				txt4:'2.优化代表留言功能，反映诉求更加方便快捷；'
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	page{width: 100%;height: 100%;}
	.edition{width: 100%;height: 100%;display: flex;flex-direction: column;overflow: hidden;}
	.edition_header{width: 100%;margin: 0 auto;text-align: center;padding: 30px;border-bottom: 1px solid #e5e5e5;
}
	.edition_dang {font-size: 23px;font-weight: bold;color: #000;}
	.edition_tim {margin: 30px 0;font-size: 14px;color: #000;}
	.edition_update{font-size: 14px;color: #000;}
	.edition_txt{color: #525252;font-size: 15px;line-height: 23px;margin-top: 10px;}
	.edition_txt1{text-align: left;}
	.edition_txt2{text-align: left;text-indent: 2em;}
	.edition_chak{color: red;margin-top: 15px;display: inline-block;}
	.edition_center{flex: 1;overflow: auto;width: 90%;margin: 0 auto;}
	.edition_center_item{color: black;display: flex;align-items: center;justify-content: space-between;padding: 0 10px;height: 50px;font-size: 18px;border-bottom: 1px solid #e5e5e5;}
	.edition_da {font-size: 14px;}
</style>
