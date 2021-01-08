<template>
	<view>
		<view class="zlist">
			<text class="build_rowtitle">{{value.content}}</text>
			<view class="detalis">
				<view class="zregion">{{value.region}}</view>
				<view class="ztime">{{value.time}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			value:Object
		},
		data() {
			return {
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.zlist {
		margin:20px 20px;
		background-color: #FFFFFF;
		display: block;
		box-shadow: 1px 7px #ccc;
		border-radius: 3px;
		padding: 10px 0;
	}
	.build_rowtitle {
		margin: 0px 20px;
		font-size: 18px;
		font-family: 黑体;
	}
	.detalis {
		display: flex;
		margin: 10px 20px;
		justify-content: space-between;
		margin-bottom: 0;
	}
</style>

