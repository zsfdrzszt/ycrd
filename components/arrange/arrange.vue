<template>
	<view  @click="nextpage">
		<view class="arrange" v-if="type==1">
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
				<view class="arrange_but" :class="{butcorlor:list.state == 1}">
					{{state}}
				</view>
				<view class="arrange_but" :class="{butcorlor:list.attitude == 1}">
					满意
				</view>
			</view>
		</view>
		<view class="arrange" v-else>
			<view class="arrange_list">
				序号
				<view class="arrange_right">{{list.number}}</view>
			</view>
			<view class="arrange_list">
				标题
				<view class="arrange_right">{{list.title}}</view>
			</view>
			<view class="arrange_list">
				时间
				<view class="arrange_right">{{list.time}}</view>
			</view>
			<view class="arrange_list1">
				<view class="arrange_top">
					实事项目
				</view>
				<view class="arrange_buttom">
					{{list.content}}
				</view>
			</view>
			<view class="arrange_button">
				<view class="arrange_but" :class="{butcorlor:list.state == 1}">
					{{state}}
				</view>
				<view class="arrange_but" :class="{butcorlor:list.attitude == 1}">
					{{satisfied}}
				</view>
			</view>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		props:{
			list:Object,
			type:Number
		},
		data() {
			return {
			};
		},
		computed:{
			state(){
				if(this.list.state =='1'){
					return "办理完毕"
				}else if(this.list.state =='0'){
					return "待办理"
				}else if(this.list.state == '2'){
					return "正在办理"
				}
			},
			satisfied(){
				if(this.list.attitude =='1'){
					return "满意"
				}else {
					return "不满意"
				}
			}
		},
		methods:{
			nextpage(){
				if(this.list.state==1){
					uni.navigateTo({
						url:"/pages/liaison/plandet?tid="+this.type,
					})
				}else{
					this.$refs.uToast.show({
						title: '该内容暂未办理完毕',
					})
				}
			}
		}
	}
</script>

<style>
.arrange{
	width: 90%;
	margin: 30rpx auto ;
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
	font-size: 36rpx;
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
	font-size: 36rpx;
	font-weight: bold;
	letter-spacing: 2px;
}
.arrange_right{
	font-size: 30rpx;
	flex: 1;
	text-align: right;
	font-weight: 100;
	padding: 0 10px;
	color: black;
	letter-spacing: 0;
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
	font-size: 32rpx;
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
	font-size: 28rpx;
	border: none;
	border-radius: 2px;
	cursor: pointer;
	margin-left: 10px;
}
.butcorlor{
	background: red;
}
</style>
