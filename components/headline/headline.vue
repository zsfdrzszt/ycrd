<template>
	<navigator class="headline" url="">
	    <view class="headline_title">
	    	{{num}}、{{list.title}}
	    </view>
		<view class="headline_time">
			{{list.time}}
		</view>
	</navigator>
</template>

<script>
	export default {
		props:{
		  list:Object,
		  num:Number
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.headline{
	width: 95%;
	margin: 0 auto;
	box-shadow: 1px 1px 10px #ccc;
	display: block;
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
