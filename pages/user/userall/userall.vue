<template>
	<view>
		<view class="status_bar"></view>
		<view class="boxhead">
			<view class="suggest_tab">
				<text class="textnav" :class="{activetab:1==active }" @click="change(1)">站内排行</text>
				<text class="textnav" :class="{activetab:2==active }" @click="change(2)">全区排名</text>
				<text class="textnav" :class="{activetab:3==active }" @click="change(3)">联络站排名</text>
			</view>
			<view class="boxcenter">
				<view class="person">
					<view class="personsort">
						<view>我的排名</view>
						<view class="redcolor">{{mysort}}</view>
					</view>
					<view class="personname">
						<view>
							<u-image :src="myimage" border-radius="10rpx" :lazy-load="true" mode="widthFix" width="130rpx"  v-if="active!=3">
								<u-loading slot="loading"></u-loading>
							</u-image>
						</view>
						<view class="myname">{{myname}}</view>
						<view class="differ">距上一名相差{{mycha}}条履职</view>
					</view>
					<view class="personnum">
						<view>履职条数</view>
						<view class="redcolor">{{mynum}}</view>
					</view>
				</view>
			</view>
			<view class="tablehead" v-if="active==3">
				<view class="sort">排名</view>
				<view class="name">联络站姓名</view>
				<view class="num">履职条数</view>
			</view>
			<view class="tablehead" v-else>
				<view class="sort">排名</view>
				<view class="name">姓名</view>
				<view class="num">履职条数</view>
			</view>
		</view>
		<view class="boxbottom">
			<sort v-for="(item,index) in list" :key="index" :index='index' :item="item" @click="nextpage"></sort>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import sort from "./sort/sort.vue"
	export default {
		data() {
			return {
				mysort:'1',
				myimage:'http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqEfdT11cVUxRnzicVxHuqv08FHTOq3HFo3jYGDEtZ3HukvibVJkLibD5QSG616p38icvO7JXa6AV50bA/132',
				myname:'侯静亚',
				mycha:'2',
				mynum:'12',
				active:1,
				list:[
					{id:1,name:"侯粉叶",image:'https://qiniu.jza2c.com/uploads/20190727/FjAwLKCTQ8iNIIZdq5X4bt_kV04U.jpg',num:'15',sort:1},
					{id:2,name:"张璟",image:'http://qiniu.jza2c.com/uploads/20190727/FqAUUlXqyKRdOJdhp1hrW5lqvf9O.jpg',num:'14',sort:2},
					{id:3,name:"武小云",image:'http://qiniu.jza2c.com/uploads/20190729/FtjZbazCFss-PLGuap4XlfQn2Ebk.jpg',num:'13',sort:3},
					{id:4,name:"任光荣",image:'http://qiniu.jza2c.com/uploads/20190727/FsjVraacmg6on1Ao99rogglu9RXp.jpg',num:'12',sort:4}
				],
				personlist:[
					{id:1,name:"侯粉叶",image:'https://qiniu.jza2c.com/uploads/20190727/FjAwLKCTQ8iNIIZdq5X4bt_kV04U.jpg',num:'15',sort:1},
					{id:2,name:"侯粉叶",image:'https://qiniu.jza2c.com/uploads/20190727/FjAwLKCTQ8iNIIZdq5X4bt_kV04U.jpg',num:'14',sort:2},
					{id:3,name:"侯粉叶",image:'https://qiniu.jza2c.com/uploads/20190727/FjAwLKCTQ8iNIIZdq5X4bt_kV04U.jpg',num:'13',sort:3},
					{id:4,name:"侯粉叶",image:'https://qiniu.jza2c.com/uploads/20190727/FjAwLKCTQ8iNIIZdq5X4bt_kV04U.jpg',num:'12',sort:4}
				],
				liaison:[
					{id:1,name:"东赵乡",num:'15',sort:1},
				]
			}
		},
		components:{
			sort
		},
		methods: {
			change(n){
				this.active=n;
				if(n==3){
					this.list=this.liaison
				}else{
					this.list=this.personlist
				}
			},
			nextpage(val){
				if(this.active !=3){
					uni.navigateTo({
						url:"/pages/general/liaison/liaison?id="+val
					})
				}
			},
		}
	}
</script>

<style>
	page{
		background-color: #f5f5f5;
	}
	.boxhead{
		background: url(@/static/user/user_userall.png) no-repeat;
		background-size: 100% 100%;
	}
	.boxcenter{
		width: 100%;
		margin-top: 60rpx;
		display: flex;
		justify-content: center;
	}
	.person{
		width: 98%;
		background-color: #fff;
		border-radius: 20rpx;
		padding: 30rpx 10rpx;
		margin: 0 auto;
		box-sizing: border-box;
		display: flex;
	}
	.myname{
		margin: 10rpx 0 20rpx 0;
	}
	.personsort,.personname,.personnum{
		width: 33.33%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 40rpx;
	}
	.differ{
		font-size: 20rpx;
		color: #868686;
	}
	.tablehead{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 32rpx;
		border-bottom: 1px solid #ccc;
		display: flex;
		background-color: #fff;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.sort,.num{
		width: 25%;
	}
	.name{
		flex: 1;
	}
	.suggest_tab{height: 100rpx;display: flex;border-bottom:2px solid #fff;color: #fff;}
	.textnav{flex: 1;display: flex;align-items: center;justify-content: center;font-weight: bold;}
	.activetab{color: #fff;border-bottom: 2px solid #fff;}
	
	.boxbottom{
		margin: 0 auto;
		width: 95%;
		background-color: #fff;
		margin-top: 40rpx;
		border-radius: 10rpx;
	}
	
</style>
