<template>
	<view>
		<navigator class="headline" url=""  v-for="(item, index) in list" :key="index">
		    <view class="headline_title">
		    	{{item.id}}、{{item.title}}
		    </view>
			<view class="headline_time">
				{{item.time}}
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		props:{
		  list:Array,
		  // num:Number
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.headline{
	width: 100%;
	margin: 0 auto;
	box-shadow: 1px 1px 10px #ccc;
	display: block;
	margin-bottom: 20px;
}
.headline_title{
	padding: 10px;
	    border-bottom: 1px solid #ccc;
	    box-sizing: border-box;
	    min-height: 60px;
	    text-align: justify;
}
.headline_time{
	width: 100%;
	    text-align: right;
	    padding: 10px;
}
</style>
