<template>
	<view class="all">
		<view class="status_bar"></view>
		<u-image :src="topimg[number]" :lazy-load="true" mode="widthFix">
			<u-loading slot="loading"></u-loading>
		</u-image>
		<view class="suggest_tab">
			<text class="textnav" :class="{activetab:1==active }" @click="change(1)">未审核</text>
			<text class="textnav" :class="{activetab:2==active }" @click="change(2)">已审核</text>
		</view>
		<view class="content">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y conscro"  @scroll="scroll" @scrolltolower="onReachScollBottom()">
				<dudet v-for="(item,index) in dutylist" :key="index" :item="item"  :type="number"></dudet>
				<u-loadmore :status="status" :load-text="loadText" class="loadmore" />
				<view class="iconfont icon-dingbu goTop" :style="{'display':(flag===true? '':'none')}" @click="goTop"></view>
			</scroll-view>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import dudet from './dudet/dudet.vue'
	export default {
		data() {
			return {
				number:0,
				// 加载更多
				status: 'nomore',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
				flag:false,
				// 滑动距离
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				active:1,
				topimg:['../../../static/user/user_dutiesdet_title1.png','../../../static/user/user_dutiesdet_title2.png','../../../static/user/user_dutiesdet_title3.png','../../../static/user/user_dutiesdet_title4.png'],
				dutylist:[],
				dutyall:[
					{id:1,title:'东赵乡第十七届人民代表大会第七次会议',liaison:'东赵乡',name:'尚永亮',time:'2020-2-1',status:'0'},
					{id:2,title:'东赵乡第十七届人民代表大会第七次会议',liaison:'东赵乡',name:'尚永亮',time:'2020-2-1',status:'1'},
					{id:3,title:'东赵乡第十七届人民代表大会第七次会议',liaison:'东赵乡',name:'尚永亮',time:'2020-2-1',status:'0'},
				]
			}
		},
		onLoad(options) {
			this.number=options.type
		},
		created() {
			if(this.active==1){
				this.dutylist = this.dutyall.filter(p=>p.status=='0')
			}else{
				this.dutylist = this.dutyall.filter(p=>p.status=='1')
			}
		},
		methods: {
			change(n){
				this.active=n;
				if(this.active==1){
					this.dutylist = this.dutyall.filter(p=>p.status=='0')
				}else{
					this.dutylist = this.dutyall.filter(p=>p.status=='1')
				}
			},
			// 触底加载
			onReachScollBottom() {
				
			},
			// 获取 scrollTop 值
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop;
				this.flag = true
				if (e.detail.scrollTop > 40) { //当距离大于100时显示回到顶部按钮
				} else { //当距离小于100时隐藏回到顶部按钮
					this.flag = false
				}
			},
			//回到顶部
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
			},
		},
		components:{
			dudet
		}
	}
</script>

<style>
	page{width: 100%;height: 100%;}
	.all{height: 100%;display: flex;flex-direction: column;}
	.suggest_tab{height: 40px;display: flex;border-bottom:1px solid red;}
	.textnav{flex: 1;display: flex;align-items: center;justify-content: center;font-weight: bold;}
	.activetab{color: red;border-bottom: 1px solid red;}
	.content{flex: 1;height: 0;}
	.conscro{height: 100%;}
	.goTop {
		width: 80rpx;
		height: 80rpx;
		opacity: 0.7;
		position: fixed;
		bottom: 140rpx;
		right: 30rpx;
		border-radius: 50%;
		z-index: 9;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
		flex-direction: column;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		background-color: #e1e1e1;
		color: #606266;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-transition: opacity .4s;
		transition: opacity .4s;
	}
	.loadmore {
		padding: 20rpx 0 40rpx;
	}
</style>
