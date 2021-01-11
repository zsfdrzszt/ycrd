<template>
	<view>
		<view class="lafs_box">
			<view class="lxfs_titlebox">
				<view class="lxfs__size">
					{{lxfs.title}}
				</view>
			</view>
			<view class="lxfs_content">
				<text class="lxfs_content_size">
					{{lxfs.size}}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			lxfs: Object
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.lafs_box {
		// height: 30rem;
		display: flex;
		flex-direction: column;
		padding: 0px 10px;
		.lxfs_titlebox {
			text-align: center;
			height: 30px;
			line-height: 35px;
			position: relative;
			bottom: -10px;
			z-index: 1;
			.lxfs__size {
				display: inline;
				padding: 8px 15px;
				margin: 0 auto;
				color: #FFFFFF;
				background-color:#B50100;
				text-align: center;
				border-radius: 10px;
			}
		}
		.lxfs_content {
			padding: 15px;
			border: 1px solid  #B50100;
			border-radius: 8px;
			position: relative;
			padding-top: 10px;
			margin-bottom: 10px;
			.lxfs_content_size {
				display: inline-block;
				line-height: 30px;
			}
		}
	}
	
</style>
