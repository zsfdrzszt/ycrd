<template>
	<view class="arrange">
		<view class="arrange_list">
			时间
			<view class="arrange_right">{{list.time}}</view>
		</view>
		<view class="arrange_list">
			活动名称
			<view class="arrange_right">{{list.title}}</view>
		</view>
		<view class="arrange_list">
			活动地点
			<view class="arrange_right">{{list.space}}</view>
		</view>
		<view class="arrange_list">
			召集人
			<view class="arrange_right">{{list.name}}</view>
		</view>
		<view class="arrange_list1">
			<view class="arrange_top">
				活动内容及要求
			</view>
			<view class="arrange_buttom">
				{{list.content}}
			</view>
		</view>
		<view class="arrange_button">
			<view class="arrange_but" :class="{butcorlor:list.state == 1}" @click="nextpage">
				{{state}}
			</view>
			<view class="arrange_but" :class="{butcorlor:list.attitude == 1}">
				满意
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:Object
		},
		data() {
			return {
				state:"",
			};
		},
		mounted() {
			if(this.list.state ==1){
				this.state="办理完毕"
			}else if(this.list.state ==0){
				this.state="待办理"
			}else if(this.list.state == 2){
				this.state="正在办理"
			}
		},
		methods:{
			nextpage(){
				// uni.navigateTo({
				// })
			}
		}
	}
</script>

<style>
.arrange{
	width: 90%;
	border: 1px solid #d71f07;
	border-radius: 5px;
	box-shadow: 1px 1px 10px #ccc;
}
.arrange_list{
	border: 1px solid #d71f07;
	height: 40px;
	margin: 10px;
	display: flex;
	align-items: center;
	padding-left: 10px;
	box-shadow: 1px 1px 10px #ccc;
	border-radius: 4px;
	font-size: 18px;
	font-weight: bold;
	letter-spacing: 2px;
}
.arrange_list1{
	border: 1px solid #d71f07;
	margin: 10px;
	
	
	display: flex;
	flex-direction: column;
	box-shadow: 1px 1px 10px #ccc;
	border-radius: 4px;
	font-size: 18px;
	font-weight: bold;
	letter-spacing: 2px;
}
.arrange_right{
	flex: 1;
	text-align: right;
	font-weight: 100;
	padding: 0 10px;
	color: black;
	
}
.arrange_top{
	width: 100%;
	padding: 0 10px;
	line-height: 40px;
	box-sizing: border-box;
	border-bottom: 0.5px solid #ccc;
}
.arrange_buttom{
	padding: 0 10px;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 100;
	line-height: 30px;
	text-indent: 2em;
}
.arrange_button{
	display: flex;
	justify-content: center;
	    margin-bottom: 20px;
	}
.arrange_but{
	display: inline-block;
	height: 38px;
	line-height: 38px;
	padding: 0 18px;
	background-color: rgb(204, 204, 204);;
	color: #fff;
	hite-space: nowrap;
	text-align: center;
	font-size: 14px;
	border: none;
	border-radius: 2px;
	cursor: pointer;
	margin-left: 10px;
}
.butcorlor{
	background: red;
}
</style>
