<template>
	<scroll-view scroll-y class="relamain">
		<view class="relatitles">
			<view class="relatitle">联络站</view>
			<view class="relatitle relatitlet">{{title}}</view>
		</view>
		<view class="relacon">
			<view class="relaconmain" v-for="(item,index) in list">
				<view class="relaconleft">{{item.name}}</view>
				<view class="relaconright" >
					<view class="relaright":style="{width: widthval }" v-for="(item1,index1) in item.space" @click="topage(item1)">{{item1}}</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		props:{
			list:Array,
			num:String,
			
		},
		data() {
			return {
				widthval:"",
				title:""
			};
		},
		updated(){
			if(this.num==1){
				this.widthval = "40%"
				this.title = "下属活动室"
			}
			if(this.num == 2){
				this.widthval ="90%"
				this.title = "下属服务岗"
			}
		},
		mounted() {
			if(this.num==1){
				this.widthval = "40%"
			}
			if(this.num == 2){
				this.widthval ="90%"
			}
		},
		methods:{
			topage(item){
				if(this.num == 1){
					console.log(1111111)
					uni.navigateTo({
						url:"/pages/activity_room/activity_index"+"?space1="+item
					})
				}else if(this.num == 2){
					uni.navigateTo({
						url:"/pages/relation/relationuesrs/relationuesrs"+"?space2="+item
					})
				}	 
			},
		}
	}
</script>

<style>
.relamain{
	width: 100%;
	margin: 10px;
	border: 2px solid #d71f07;
	border-radius: 10px;
	overflow: hidden;
}
.relatitles{
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 10px 10px -10px #ccc;
}
.relatitle{
	flex: 1;
	line-height: 40px;
	color: #d71f07;
	font-size: 16px;
	text-align: center;
	font-weight: bold;
}
.relatitlet{
	flex: 2;
}
.relacon{
	display: flex;
	flex-direction: column;
	margin: 10px 0;
}
.relaconmain{
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #e6e6e6;
}
.relaconleft{
	text-align: center;
	flex: 1;
	
	
}
.relaconright{
	border-left: 1px solid #e6e6e6;
	display: flex;
	flex-wrap: wrap;
	flex: 2;
}
.relaright{
	line-height: 20px;
	text-align: center;
	margin: 5px 0;
}
</style>
