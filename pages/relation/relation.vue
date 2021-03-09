<template>
	<!-- 双联系 -->
	<view>
		<view class="status_bar">
		</view>
		<view class="kong">

		</view>
		<!-- <image class="download_bg" src="../../static/pro5img/pro5-bg.jpg" mode="widthFix"></image> -->
		<view class="page_body">
			<view class="double_con1">
				<navigator url="contactWay/contactWay">
					<image src="../../static/pro5img/county_common_double_way.png" mode="widthFix"></image>
				</navigator>
				<navigator url="contactCntent/contactCntent">
					<image src="../../static/pro5img/county_common_double_con.png" mode="widthFix"></image>
				</navigator>
				<navigator url="/pages/object/object">
					<image src="../../static/pro5img/county_common_double_object.png" mode="widthFix"></image>
				</navigator>
			</view>
			<view class="double_con2">
				<image src="../../static/pro5img/county_common_double_one.png" mode="heightFix"></image>
			</view>
			<image class="double_con3" src="../../static/pro5img/county_common_double_two.png" mode="widthFix"></image>
			<image class="double_con4" src="../../static/pro5img/county_common_double_three.png" mode="heightFix"></image>
			<image class="double_con3" src="../../static/pro5img/county_common_double_four.png" mode="widthFix"></image>
			<view class="double_con2">
				<image src="../../static/pro5img/county_common_double_five.png" mode="heightFix"></image>
			</view>

			<view class="double_con1">
				<navigator url="/pages/relation/relationnext/relationnext?id=0">
					<image src="../../static/pro5img/county_common_double_liasons.png" mode="widthFix"></image>
				</navigator>
				<navigator url="/pages/relation/relationnext/relationnext?id=1">
					<image src="../../static/pro5img/county_common_double_activity.png" mode="widthFix"></image>
				</navigator>
				<navigator url="/pages/relation/relationnext/relationnext?id=2">
					<image src="../../static/pro5img/county_common_double_service.png" mode="widthFix"></image>
				</navigator>
			</view>
			<wnavall></wnavall>
		</view>
		
	</view>
</template>

<script>
	import wnavall from "../../components/w-navall/w-navall.vue"
	export default {
		components:{
			wnavall
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
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.kong {
		height: 70rpx;
	}

	.download_bg {
		position: fixed;
		width: 100%;
		// width: 100%;

	}

	.page_body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.double_con1 {
		// z-index: 1001;
		display: flex;
		width: 60%;
		justify-content: space-around;
		padding: 15px 0px;

	}

	.double_con1 image {
		width: 45px;
	}

	.double_con2 image {
		height: 40px;
	}

	.double_con3 {
		width: 30%;
		padding: 10px 0px;
	}

	.double_con4 {
		height: 40px;
		// padding: 10px 0px;
	}

	page {
		background: url('~@/static/pro5img/pro5-bg.jpg');
		// background-image: url(image/yyiy_bg.jpg);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		height: 100vh;
		margin: 0px;
		padding: 0px;
	}
</style>
