<template>
	<view class="contact">
		<view class="contactmain">
			<image src="../../static/contact/county_common_three_guohui.png" class="emblem"></image>
			<text style="text-align: center;color: white;font-weight: bold;margin-top: 5px;font-size: 16px;">{{context}}</text>
			<image src="../../static/contact/county_common_connection_star.png" class="contactstar"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			context: String,
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.contact {
		width: 80%;
		height: 200px;
		padding: 2px;
		border: 4px solid red;
		border-radius: 6px;
		margin: 20px 20px;
	}

	.contactmain {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid #ccc;
		background-image: linear-gradient(to bottom, #f5531a, #e10019);
	}

	.emblem {
		display: block;
		width: 60%;
		height: 60%;
	}

	.contactstar {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 45%;
		height: 25%;
	}
</style>
