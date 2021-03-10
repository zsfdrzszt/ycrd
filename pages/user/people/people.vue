<template>
	<view class="reply">
		<view class="status_bar"></view>
		<image src="../../../static/duty/examine.jpg" mode="widthFix" style="width: 100%;"></image>
		<view class="reply_con">
			<view class="reply_txt">
				<text :class="{textnavchange:1==isActive }" @click="changestate(1)">全部留言</text>
				<text :class="{textnavchange:2==isActive }" @click="changestate(2)">已审核</text>
				<text :class="{textnavchange:3==isActive }" @click="changestate(3)">未审核</text>
			</view>
			<scroll-view class="scroll-view" scroll-y="true">
				<navigator url="./answer">
					<leave v-for="(item,index) in list" :list="item"></leave>
				</navigator>
			</scroll-view>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive:1,
				list:[{title:'好好学习,天天向上',name:'侯静亚',time:'2021-03-08',liu:'已审核'}]
			}
		},
		methods: {
			changestate(n) {
				this.isActive = n
			},
		}
	}
</script>

<style>
page{
	width: 100%;
	height: 100%;
	background-color:  #F5F5F5;
}
.reply{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}
.reply_con{
	flex: 1;
	display: flex;
	flex-direction: column;
}
.reply_txt{
	width: 100%;
	height:40px;
	background-color: #fff;
	display: flex;
	justify-content: space-around;
	border-top: 1px solid #ECECEC;
	border-bottom: 1px solid #ECECEC;
	background-color: #FFFFFF;
}
.reply_txt text{
	font-size: 16px;
	height: 40px;
	width: 30%;
	line-height: 40px;
	text-align: center;
}
.textnavchange {
	color: #d71f07;
	border-bottom: #d71f07 solid 2px;
	}
.scroll-view{
	height: 90%;
	overflow: hidden;
}
</style>
