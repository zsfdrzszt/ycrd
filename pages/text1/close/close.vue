<template>
	<view class="close">
		<view class="close_title">
			<text :class="{textnavchange:1==isActive }" @click="changestate(1)">履职档案</text>
			<text :class="{textnavchange:2==isActive }" @click="changestate(2)">意见建议</text>
		</view>
		<view>
			<scroll-view scroll-y="true" >
				<view>
					<perform :list="item" v-for="(item,index) in list8" :state="1" v-show="1 == isActive"></perform>
				</view>
			</scroll-view>
			<view v-show="2 == isActive">
				<view class="close_item" >
				   <wdropdown :list= "list7"  @searchdrop="searchdrop1"></wdropdown>
				   <wdropdown :list= "list6"  @searchdrop="searchdrop1"></wdropdown>
				</view>
				<view class="close_footer">
				 <text>暂无数据</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import perform from "../../../components/perform/perform.vue"
	import wdropdown from "../../../components/w-dropdown/w-dropdown.vue"
	export default {
		components:{
			perform,
			wdropdown
		},
		data() {
			return {
				isActive:1,
				list8:[{statio:'北关街道',name:"张爱变",time:'2020.2.2',space:"北关街道",way:"为民服务",content:'今天我村委给全体村民发福利，大米，白面，油，村民十分高兴。',effect:"好",img:["http://qiniu.jza2c.com/onadvise/20210221/fbccac6012192161fbd34a1ce12a4138","http://qiniu.jza2c.com/onadvise/20210221/9ad3c10de9e35f985752fae663ebc3e8","http://qiniu.jza2c.com/onadvise/20210221/f9e055f2be0cc224c1d2153844897005"]},{statio:'北关街道',name:"张爱变",time:'2020.2.2',space:"北关街道",way:"为民服务",content:'今天我村委给全体村民发福利，大米，白面，油，村民十分高兴。',effect:"好",img:["http://qiniu.jza2c.com/onadvise/20210221/fbccac6012192161fbd34a1ce12a4138",]}],
				list7:{name:"请选择",list:[{content:"2019"},{content:"2020"},{content:"2021"}],},
				list6:{name:"第一季度",list:[{content:"第一季度"},{content:"第二季度"},{content:"第三季度"},{content:"第四季度"}],},
			}
		},
		methods: {
			changestate(n){
				this.isActive = n
			},
		}
	}
</script>

<style>
page{
	width:100%;
	height: 100%;
}
.close{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}
.close_title{
	height: 41px;
	display: flex;
	flex-wrap: wrap;
	border-bottom: 1px solid #ff0000;
}
.close_title text{
	width: 50%;
	height: 41px;
	line-height: 41px;
	padding: 0!important;
	text-align: center;
	font-weight: bold;
}
.textnavchange{
	color: #d71f07;
	border-bottom: #d71f07 solid 2px;
}
.close_item{
	 margin-top: 15px;
	 display: flex;
	 justify-content: space-around;
}
.close_footer{
     font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin: 30px 0;
    color: red;
}
</style>
