<template>
	<view class="text4" style="background-image: url(../../static/text4/common_articlebg.jpg);background-size: cover;">
		<view class="textsontitle">{{title}}</view>
		<view class="progressbar">
			<view class="progressbartop">
	
				<text>审核</text>
				<text></text>
				<text>沟通</text>
				<text></text>
				<text>答复</text>
				<text></text>
				<text>办结</text>
	
			</view>
			<view class="progressbardown">
				<text></text>
				<text>交办</text>
				<text></text>
				<text>办理</text>
				<text></text>
				<text>满意度测评</text>
				<text></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:""
			}
		},
		methods: {
			
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		    console.log(option.con); //打印出上个页面传递的参数。
			this.title = option.con
		}
	}
</script>

<style scoped>
	page{
		height: 100%;
	}
	.text4{
		height: 100%;
	}
.textsontitle{
	margin: 20px 30px;
	text-align: center;
	font-size: 18px;
	font-weight: bold;
}
.progressbar{
	width: 100%;
	height: 50px;
	margin: 0 10px;
}
.progressbartop{
	display: flex;
	justify-content: space-evenly;
}
.progressbartop>text{
	flex: 1;
	text-align: center;
}
.progressbardown{
	display: flex;
	justify-content: space-evenly;
}
.progressbardown >text{
	flex: 1;
	text-align: center;
}
</style>
