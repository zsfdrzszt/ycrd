<template>
	<view class="administration">
		<view class="status_bar"></view>
		<image src="../../../static/duty/Administration.jpg" mode="widthFix" style="width: 100%;"></image>
		<view class="administration_con">
			<view class="administration_center">
				<view class="administration_item">
					<view class="administration_name">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</view>
					<view class="administration_spot">:</view>
					<view class="administration_names">{{list.name}}</view>
				</view>
				<view class="administration_item">
					<view class="administration_name">留言时间</view>
					<view class="administration_spot">:</view>
					<view class="administration_names">{{list.time}}</view>
				</view>
				<view class="administration_item">
					<view class="administration_name">标题</view>
					<view class="administration_spot">:</view>
					<view class="administration_text">
						<u-input v-model="fight" type="textarea" height='160' :border='true' disabled />
					</view>
				</view>
				<view class="administration_item">
					<view class="administration_name">问题</view>
					<view class="administration_spot">:</view>
					<view class="administration_text">
						<u-input v-model="fight" type="textarea" height='160' :border='true' disabled />
					</view>
				</view>
				<view class="administration_image">
					<view class="image_item">
						<image :src="list.imgUrl" style="width: 100%;" ></image>
					</view>
				</view>
				<view class="administration_item">
					<view class="administration_name">回复人</view>
					<view class="administration_spot">:</view>
					<view class="administration_names">{{list.people}}</view>
				</view>
				<view class="administration_item">
					<view class="administration_name">回复</view>
					<view class="administration_spot">:</view>
					<view class="administration_text">
						<u-input  type="textarea" height='160' :border='true'/>
					</view>
				</view>
			</view>
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
				fight:'加油',
				list:{name:'百毒不侵',time:'2021-03-08 10:13:39',people:'侯静亚',imgUrl:'http://qiniu.jza2c.com/Message/20210308/b2a63487cddf380bb014274df986694f'}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
	width: 100%;
}
.administration{
	width: 100%;
	display: flex;
	flex-direction: column;
}
.administration_con{
	padding: 10px;
}
.administration_center{
	border: 1px solid #ee0000;
	border-radius: 8px;
	background-color: #fff;
}
.administration_item{
	margin: 10px;
	display: flex;
	line-height: 30px;
	border-bottom: 1px solid #ccc;
	font-size: 15px;
}
.administration_name{
	width: 64px;
	text-align: justify;
	text-align-last: justify;
	font-weight: bold;
}

.administration_names{
	flex: 1;
	padding: 0 10px;
}
.administration_spot{
	float: left;
	line-height: 30px;
	font-weight: bold;
}
.administration_image{
	clear: both;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding-bottom: 10px;
}
.administration_image image{
	position: absolute;
	top: 0;
	left: 0%;
	width: 100%;
	height: 100%;
}
.image_item{
	position: relative;
	width: 30%;
	margin-left: 2.5%;
	height: 0;
	padding-bottom: 30%;
}
.administration_text{
	width: 100%;
	padding: 0 10px;
	box-sizing: border-box;
	padding-right: 0;
	margin-bottom: 10px;
}
</style>
