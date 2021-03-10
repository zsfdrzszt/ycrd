<template>
	<view class="all">
		<view class="rdhjydet_ti">人代会期间提出的意见建议</view>
		
	</view>
</template>

<script>
	import resum1 from "../../../components/resum/resum1.vue"	//上下型  type==1-下拉选择  type==2-多行文本  type==3-单选  type==4-文字展示
	import resum2 from "../../../components/resum/resum2.vue"	//左右型   type==1-时间  type==2-input  type==3-文字展示
	import resum3 from "../../../components/resum/resum3.vue"	//上左右型   type==1-单选   type==2-下拉  type==3-文字展示
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		width: 100%;
		box-sizing: border-box;
		background-image: url(../../../static/create/common_bg.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.all{
		padding-bottom: 20rpx;
	}
	.rdhjydet_ti {
	    margin: 40rpx 0;
	    text-align: center;
	    font-weight: bold;
	    font-size: 36rpx;
	}
</style>
