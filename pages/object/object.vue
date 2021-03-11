<template>
	<view class="object">
		<view class="object_all">
			<navigator url="/pages/object/form/form" class="object_txt">
				榆次区人大常委会组成人员 </br>
				分工联系代表安排
			</navigator>
			<navigator url="/pages/object/number/number" class="object_txt">
				榆次区人大专门委员会</br>
				榆次区人大常委会工作委员会</br>
				对口联系代表安排
			</navigator>
		</view>
		<wnavall></wnavall>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page {
	height: 100%;
	width: 100%;
}
.object{
	width: 100%;
	height: 100%;
	background-image: url(../../static/object/county_common_twounit_bgimg.jpg);
	background-size: cover;
	background-position: center;
}
.object_all{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	box-sizing: border-box;
	padding: 40% 0 0;
	width: 100%;
}
.object_txt{
	width: 80%;
	margin: 0 auto;
	background-color: #ce0e1d;
	border-radius: 7px;
	box-shadow: 0 0 10px #777;
	margin-bottom: 20%;
	text-align: center;
	padding: 15px 0;
	color: #fff;
	font-family: 黑体;
	font-size: 17px;
	line-height: 20px;
}
</style>
