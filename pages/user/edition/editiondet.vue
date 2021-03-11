<template>
	<view class="editiondet">
		<view class="editiondet_title">
			[RDYC<text class="editiondet_ban">1.0.2</text>]
		</view>
		<view class="editiondet_cont">
			<view class="edition_txt1">{{txt1}}</view>
			<view class="edition_txt2">{{txt2}}</view>
			<view class="edition_txt2">{{txt3}}</view>
			<view class="edition_txt1">{{txt4}}</view>
			<view class="edition_txt1">{{txt5}}</view>
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
				txt4:'2.优化代表留言功能，反映诉求更加方便快捷；',
				txt5:'3.优化履职排行榜功能，具有针对性；'
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	page{width: 100%;height: 100%;}
	.editiondet{width: 100%;height: 100%;overflow: auto;padding: 10px;font-size: 18px;}
	.editiondet_title{text-align: center;margin: 20px auto;}
	.editiondet_ban{font-size: 14px;}
	.editiondet_cont{color: #000000;font-size: 18px;}
	.edition_txt1{line-height:30px;}
	.edition_txt2{text-indent: 2em;line-height:30px;}
</style>
