<template>
	<view class="maincontent">
		<view class="status_bar" ></view>
		<view class="content">
			<view class="content-text">榆次区人大常委会<br>智慧人大平台</view>
			<view class="wrap">
				<image mode="widthFix" v-for="(item,index) in images" class="wrapimg" @click="topage(index+1)" :src="item"></image>
			</view>
			<view class="wrapcon">
				<image src="../../static/indeximg/county_common_index_seven.png" class="wrapconimg" ></image>
				<image src="../../static/indeximg/county_common_index_eight.png" class="wrapconimg" @click="topro(2)"></image>
				<image mode="widthFix" src="../../static/indeximg/county_common_index_ten.png" class="wrapconimg"></image>
				<view class="wrapbuttom">
					<view class="wrapback" v-show="showWarp" @click="tobuttom">
						<image src="../../static/indeximg/county_common_index_close.png" style="position: absolute; left: 0; top: 0; width: 10%; height: 30%;"
						 @click="showwarp"></image>
					</view>
					<image  mode="widthFix" src="../../static/indeximg/county_common_index_nine.png" class="myself"></image>
				</view>
		
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				number: "4",
				showWarp: true,
				images: ["../../static/indeximg/county_common_index_one.png", "../../static/indeximg/county_common_index_two.png",
					"../../static/indeximg/county_common_index_three.png", "../../static/indeximg/county_common_index_four.png",
					"../../static/indeximg/county_common_index_five.png", "../../static/indeximg/county_common_index_six.png"
				]
			}
		},
		onLoad() {

		},
		methods: {
			topage(num) {
				let url = "/pages/text" + num + "/text" + num
				console.log(url)
				uni.navigateTo({
					url: url
				})
			},
			showwarp() {
				this.showWarp = !this.showWarp
			},
			topro(num){
				let url = "/pages/pro"+num+ "/pro"+num
				uni.navigateTo({
					url: url
				})
			},
			tobuttom(){
				uni.navigateTo({
					
				})
			}
		}
	}
</script>

<style>
	.status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
	  }
	page {
		height: 100%;
	}
	.maincontent{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		}
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: url(../../static/indeximg/county_common_index_bg.png);
		background-size: cover;

	}

	.content-text {
		width: 100%;
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		font-size: 26px;
		font-weight: bold;
		color: #b60606;
		line-height: 35px;
		text-align: center;

	}

	.wrap {
		display: flex;
		flex: 2;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		width: 80%;
		margin: 0 auto;
	}

	.wrapimg {
		width: 32%;
		height: 35%;
	}

	.wrapcon {
		flex: 2;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}

	.wrapconimg {
		width: 55%;
		height: 20%;
	}

	.wrapbuttom {
		position: relative;
		width: 100%;
		height: 25%;
	}

	.wrapback {
		width: 100%;
		height: 100%;
		background: url(../../static/indeximg/county_common_index_bot.png);
		background-size: cover;
	}

	.myself {
		position: absolute;
		right: 0;
		top: 0;
		width: 20%;
		height: 100%;
	}
</style>
