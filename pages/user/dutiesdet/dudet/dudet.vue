<template>
	<view class="dutiesdet_row">
		<view class="dutiesdet_cu">{{title}}</view>
		<view>{{liaison}}</view>
		<view>{{name}}</view>
		<view>{{time}}</view>
	</view>
</template>

<script>
	export default {
		props:['title','liaison','name','time']
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
