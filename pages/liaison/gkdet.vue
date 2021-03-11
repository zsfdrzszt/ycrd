<template>
	<view class="all" style="">
		<view class="status_bar"></view>
		<view class="title">{{title}}</view>
		<view class="content" :style="{'font-size':font+'px !important'}">
			<u-parse class="pages" :html="content" :tag-style="contentstyle"></u-parse>
		</view>
		<wtextsize @click="changetextsize"></wtextsize>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wnavall from "../../components/w-navall/w-navall.vue"
	import wtextsize from "../../components/w-textsize/w-textsize.vue"
	export default {
		components: {
			wnavall,
			wtextsize
		},
		data() {
			return {
				title:"概况",
				font:16,
				contentstyle: {
					'.pages table': 'width:100% !important',
					'.pages td':'border-bottom:1px solid #f5f5f5',
					'.pages img':'display:block;width:100%',
					'.pages div':'width:100% !important',
					'.pages p':'text-indent: 2em;',
				},
				content:''
			}
		},
		mounted() {
			this.content = '<p style="text-indent: 2em; font-size: 16px; font-family: fangsong; line-height: 200%;">疫情防控共聚力，病毒无情人有情。近日，郭家堡乡人大代表焦志刚、李静斌、卢海萍及新付村、南关村、王湖村、聂村、近城村等负责人来到郭家堡乡卫生院和郭家堡派出所走访慰问，送去价值5000余元食品、口罩、消毒液等防疫物资，向不分昼夜奋战在一线，为郭家堡乡人民群众生命健康保驾护航的“白衣天使”、“藏蓝战士”致以最诚挚的谢意。</p>'
			this.content  = this.content.replace(/font-size: \w+;?/g,'');
			this.content  = this.content.replace(/font-size:\w+;?/g,'');
		},
		methods: {
			changetextsize(type) {
				if(type==0){
					// 小
					this.font--;
				}else{
					// 大
					this.font++;
				}
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数 //打印出上个页面传递的参数。
		}
	}
</script>

<style scoped>
	page{
		height: 100%;
	}
	.all{
		height: 100%;
		background-image: url(../../static/text4/common_articlebg.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
	.title{
		margin: 60rpx 40rpx;
		text-align: center;
		font-size: 40rpx;
		font-weight: bold;
	}
	.content{
		margin: 0 20rpx;
		padding-bottom: 180rpx;
		box-sizing: border-box;
	}
</style>
