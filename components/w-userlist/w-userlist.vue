<template>
	<view class="usermain">
		<image :src="value.url"></image>
		<view>
			{{value.url}}
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			value:String
		},
		data() {
			return {
			};
		}
	}
</script>

<style>
.usermain{
	margin: 15px 10px;
	box-shadow: 1px 1px 10px #ccc;
	display: flex;
	padding: 10px 0;
	box-sizing: border-box;
	background-color: white;
	border-radius: 4px;
	width: 90%;
}
</style>
