<template>
	<view  class="spacemain" @click="topage">
		<image src="../../static/text5/county_common_three_guohui.png" mode="widthFix"></image>
		<view class="">
			{{space}}
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			space:String,
			id:Number
		},
		data() {
			return {
				
			};
		},
		methods:{
			topage(){
				console.log(111)
				uni.navigateTo({
					url: "/pages/liaison/index"+"?id="+this.id
				})
			}
		}
	}
</script>

<style>
.spacemain{
	display: flex;
	flex-direction: column;
	padding: 10px 3px;
	border-radius: 10px;
	box-shadow: 1px 1px 10px #ccc;
	justify-content: center;
	align-items: center;
	width: 30%;
	margin-left: 2.5%;
	box-sizing: border-box;
	margin-top: 5px;
	margin-bottom: 5px;
}
.spacemain >image{
	width: 60%;
}
</style>
