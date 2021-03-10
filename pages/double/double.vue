<template>
	<view class="double">
		<image src="../../static/double/download.png" mode="widthFix" style="width: 100%;"></image>
		<view class="double_center">
			<view class="double_image">
				<image :src="list.imgUrl" mode="widthFix"></image>
				<text>{{list.name}}</text>
			</view>
			<view class="double_txt">
				<view class="double_box">
					<view class="double_left">届&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</view>
					<view class="double_right">晋中市第四届人大代表 </br> 榆次区第十六届人大代表</view>
				</view>
				<view class="double_boxs double_box">
					<view class="double_left">职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务:</view>
					<view class="double_right">{{list.work}}</view>
				</view>
				<view class="double_boxs double_box">
					<view class="double_left">特色服务:</view>
					<view class="double_right"></view>
				</view>
			</view>
			<navigator url="../liaison/message" class="double_footer">
				<image src="../../static/double/download.jpg" mode="widthFix"></image>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:{imgUrl:'https://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg',name:'李鹏飞',work:'榆次区人大常委会主任',}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
	width: 100%;
	height: 100%;
}
.double{
	width: 100%;
	height: 100%;
}
.double_center{
	padding: 20px 10px 10px 10px;
}
.double_image{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.double_image image{
	width: 30%;
	border-radius: 7px;
}
.double_image text{
	margin-top: 0.7rem;
	font-size: 20px;
}
.double_txt{
	padding: 15px;
	margin-bottom: 2.5rem;
}
.double_box{
	display: flex;
	flex-direction: row;
}
.double_left{
	width: 30%;
	text-align: right;
	font-weight: 525;
}
.double_right{
	width: 70%;
	color: rgb(158,158,158);
	padding-left: 10px;
}
.double_boxs{
	margin-top: 1.5rem;
}
.double_footer{
	display: flex;
	align-items: center;
	justify-content: center;
}
.double_footer>image{
	width: 65%;
}
</style>
