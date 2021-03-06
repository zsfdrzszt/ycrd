<template>
		<view class="zlist" @click="topage">
			<navigator class="a" url="#">
				<view class="zregion">{{value.content}}</view>
				<view class="ztime">
					<view class="build_rowleft">
						{{value.region}}
					</view>
					<view class="build_rowright">
						{{value.time}}
					</view>
				</view>
			</navigator>
		</view>
</template>

<script>
	export default {
		props: {
			value: Object
		},
		data() {
			return {}
		},
		methods: {
            topage(){
				this.$emit("click")
			}
		}
	}
</script>

<style lang="scss">
	.zlist {
		display: block;

		.a {
			margin: 20px 10px;
			background-color: white;
			display: block;
			box-shadow: 1px 1px 10px #ccc;
			border-radius: 3px;
			padding: 10px 0;

			.zregion {
				margin: 0px 20px;
				font-size: 18px;
				font-family: 黑体;
			}

			.ztime {
				display: flex;
				margin: 10px 20px;
				justify-content: space-between;
				margin-bottom: 0;

			}
		}
	}
</style>
