<template>
	<view class="detall">
		<view class="title">{{title}}</view>
		<view class="username">---{{username}}</view>
		<view class="steps">
			<u-steps :list="steplist" :current="current" style="width: 100%;" active-color="#579f24"></u-steps>
		</view>
		<!-- 代表建议 -->
		<view>
			<view class="suggest">代表建议:</view>
			<view class="content" :style="{'font-size':font+'px !important'}">
				<u-parse class="pages" :html="suggest" :tag-style="contentstyle"></u-parse>
			</view>
		</view>
		<!-- 办理答复情况 -->
		<view v-if="reply!=''">
			<view class="suggest">办理答复情况：</view>
			<view class="content" :style="{'font-size':font+'px !important'}">
				<u-parse class="pages" :html="reply" :tag-style="contentstyle"></u-parse>
			</view>
		</view>
		<view class="bottom">{{liason}}</view>
		<view class="bottom">{{time}}</view>
		<wtextsize @click="change"></wtextsize>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wtextsize from "../../components/w-textsize/w-textsize.vue"
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default {
		data() {
			return {
				font:16,
				contentstyle: {
					'.pages table': 'width:100% !important',
					'.pages td':'border-bottom:1px solid #f5f5f5',
					'.pages img':'display:block;width:100%',
					'.pages div':'width:100% !important',
					'.pages p':'text-indent: 2em;',
				},
				id:'',	//当前建议id
				title: '关于整合基础设施资金改善农村人居环境的建议',//标题
				username:'张平平',//代表姓名
				// 建议处理步骤
				steplist:[
					{name:'审核'},
					{name:'交办'},
					{name:'沟通'},
					{name:'办理'},
					{name:'答复'},
					{name:'满意度测评'},
					{name:'办结'},
				],
				current:1,//当前步骤0-5
				suggest:'',
				reply:'',
				liason:'联络站',
				time:'2021-2-1'
			};
		},
		onLoad(options) {
			// 获取当前建议id
			this.id = options.id
			this.suggest='<p style="text-indent:2em;"><span style="font-size: 16px; line-height: 2; font-family: FangSong;">建议:农业局作为改善农村人居环境的牵头单位，结合乡村基础设施实际情况，协调水利、环保、交通等部门，统筹、整合各项涉农基础设施利好政策、资金、资源等优势，高效、利民改善农村人居环境。</span></p>'
			this.reply='<p style="text-indent:2em;"><span style="font-size: 16px; line-height: 2; font-family: FangSong;">建议:农业局作为改善农村人居环境的牵头单位，结合乡村基础设施实际情况，协调水利、环保、交通等部门，统筹、整合各项涉农基础设施利好政策、资金、资源等优势，高效、利民改善农村人居环境。</span></p>'
			this.suggest=this.suggest.replace(/font-size: \w+;?/g,'')//去除font-size标签
			this.suggest=this.suggest.replace(/font-size:\w+;?/g,'')//去除font-size标签
			this.reply  = this.reply.replace(/font-size: \w+;?/g,'');
			this.reply  = this.reply.replace(/font-size:\w+;?/g,'');
			// 请求建议详情
			
		},
		methods:{
			change(type){
				if(type==0){
					// 小
					this.font--;
				}else{
					// 大
					this.font++;
				}
			}
		},
		components:{
			wtextsize,
			wnavall
		}
	}
</script>

<style>
	page{
		background-image: url(../../static/text4/common_articlebg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}
	.detall{
		padding-bottom: 50px;
	}
	.title {
		margin: 40rpx 60rpx;
		text-align: center;
		font-size: 36rpx;
		font-weight: bold;
	}
	.username{
		text-align: right;
		margin-right: 40rpx;
		font-weight: bold;
	}
	.steps{
		margin: 40rpx auto;
	}
	.suggest{
		font-size: 36rpx;
		font-weight: bold;
		margin-left: 20rpx;
	}
	.content{
		margin: 40rpx 20rpx;
		font-size: 32rpx;
	}
	.bottom{
		text-align: right;
		margin: 20rpx;
	}
</style>
