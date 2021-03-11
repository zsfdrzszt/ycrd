<template>
	<view class="dutiesdet_row" @click="nextpage">
		<view class="dutiesdet_cu">{{item.title}}</view>
		<view>{{item.liaison}}</view>
		<view>{{item.name}}</view>
		<view>{{item.time}}</view>
	</view>
</template>

<script>
	export default {
		props:['item','type'],
		methods:{
			nextpage(){
				console.log(this.type)
				if(this.type==0){
					uni.navigateTo({
						url:'/pages/user/onadvise/onadvise?id='+this.item.id
					})
				}else if(this.type==1){
					uni.navigateTo({
						url:'/pages/user/participation/participation?id='+this.item.id
					})
				}else if(this.type==2){
					uni.navigateTo({
						url:'/pages/user/resumption/resumption?id='+this.item.id
					})
				}else{
					uni.navigateTo({
						url:'/pages/user/offproposal/offproposal?id='+this.item.id
					})
				}
			}
		}
	}
</script>

<style>
	.dutiesdet_row {
	    padding: 10px;
	    box-sizing: border-box;
	    border-bottom: 1px solid #ccc;
	    font-size: 15px;
	    line-height: 26px;
	    margin: 15px 10px;
	    background-color: white;
	    border-radius: 5px;
	    box-shadow: 1px 1px 10px #ccc;
	}
</style>
