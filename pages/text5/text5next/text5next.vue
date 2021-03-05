<template>
	<view class="text5next">
		<view class="status_bar"></view>
		<view class="textcon">
			<image src="/static/contact/county_common_connection_title.png"style="width: 100%;"  mode="widthFix">
			</image>
			<view class="navlists">
				<view class="navself" :class="{navselfchange:index==isActive }" v-for="(item,index) in navlist" @click="changenav(index)">{{item}}</view>
			</view>
			<scroll-view scroll-y  class="scrollheight" >
				<view class="scrolllist" v-show="0==isActive">
					<spacewindow v-for="(item,index) in list" :key="index" :space="item.name" :id="item.id"></spacewindow>
				</view>
				<view class="scrolllist" v-show="1==isActive">
					<relation :list = "list" num=1></relation>
				</view>
				<view class="scrolllist" v-show="2==isActive">
					<relation :list = "list2" num=2></relation>
				</view>
			</scroll-view>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import relation from "@/components/w-relation/w-relation.vue"
	import wnavall from "@/components/w-navall/w-navall.vue"
	import spacewindow from "@/components/w-spacewindow/w-spacewindow.vue"
	export default {
		components: {
			relation,
			wnavall,
			spacewindow
		},
		data() {
			return {
				Height: 0,
				navlist:["联络站","活动室","服务岗"]	,
				isActive :false,
				list: [{
					id:1,
					name: "郭家堡乡",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室"]
				}, {
					id:2,
					name: "西南街道",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室"]
				},{
					id:3,
					name: "乌金山镇",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室","王村活动室","尧晨活动室",]
				}, {
					id:4,
					name: "修文镇",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室","王村活动室","尧晨活动室"]
				},{
					id:5,
					name: "张庆乡",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室"]
				},  {
					id:6,
					name: "长凝镇",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室","王村活动室","尧晨活动室"]
				}, {
					id:7,
					name: "东阳镇",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室"]
				}, {
					id:8,
					name: "庄子乡",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室"]
				}, {
					id:9,
					name: "东赵乡",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室","王村活动室","尧晨活动室"]
				}, {
					id:10,
					name: "什贴镇",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室","王村活动室","尧晨活动室","王村活动室","尧晨活动室"]
				}, {
					id:11,
					name: "使赵社服中心",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室","王村活动室","尧晨活动室"]
				}, {
					id:12,
					name: "晋华街道",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室"]
				}, {
					id:13,
					name: "经纬街道",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室"]
				}, {
					id:14,
					name: "锦纶街道",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室"]
				}, {
					id:15,
					name: "北关街道",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室"]
				}, {
					id:16,
					name: "新建街道",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室"]
				}, {
					id:17,
					name: "安宁街道",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室"]
				},  {
					id:18,
					name: "路西街道",
					space:["安宁活动室","王村活动室","尧晨活动室","南关活动室"]
				}],
				list2: [{
					name: "郭家堡乡",
					space:["王绍泰人大代表服务岗","高振华人大代表服务岗","王殿胜人大代表服务岗","张璟人大代表服务岗","柴永昌人大代表服务岗","霍志明人大代表服务岗","郝慧生人大代表服务岗"]
				}, {
					name: "乌金山镇",
					space:["郭宏爱人大代表服务岗","荣慧颖人大代表服务岗","周艳人大代表服务岗",]
				}, {
					name: "张庆乡",
					space:["张文海人大代表服务岗","张文英人大代表服务岗","药建军人大代表服务岗","许永丽人大代表服务岗","李爱顺人大代表服务岗","郭靖芬人大代表服务岗","陈晨人大代表服务岗"]
				}, {
					name: "修文镇",
					space:["张保生人大代表服务岗","许晋文人大代表服务岗","张岐明人大代表服务岗","桑利民人大代表服务岗","程宝宏人大代表服务岗","乔淑珍人大代表服务岗","丁福友人大代表服务岗"]
				}, {
					name: "东阳镇",
					space:["孟广生人大代表服务岗","秦二成人大代表服务岗","刘雲人大代表服务岗"]
				}, {
					name: "长凝镇",
					space:["武祝琴人大代表服务岗","卢胜友人大代表服务岗","张爱茂人大代表服务岗"]
				}, {
					name: "庄子乡",
					space:["郑志强人大代表服务岗","刘永斌人大代表服务岗","王满林人大代表服务岗","范妹锁人大代表服务岗","魏巨生人大代表服务岗","王秀娥人大代表服务岗"]
				}, {
					name: "东赵乡",
					space:["安宁服务岗","王村服务岗","尧晨服务岗","南关服务岗","王村服务岗","尧晨服务岗"]
				}, {
					name: "什贴镇",
					space:["安宁服务岗","王村服务岗","尧晨服务岗","南关服务岗","王村服务岗","尧晨服务岗","王村服务岗","尧晨服务岗"]
				}, {
					name: "使赵社服中心",
					space:["安宁服务岗","王村服务岗","尧晨服务岗","南关服务岗","王村服务岗","尧晨服务岗"]
				}, {
					name: "晋华街道",
					space:["安宁服务岗","王村服务岗","尧晨服务岗","南关服务岗"]
				}, {
					name: "经纬街道",
					space:["安宁服务岗","王村服务岗","尧晨服务岗","南关服务岗"]
				}, {
					name: "锦纶街道",
					space:["安宁服务岗","王村服务岗","尧晨服务岗","南关服务岗"]
				}, {
					name: "北关街道",
					space:["安宁服务岗","王村服务岗","尧晨服务岗","南关服务岗"]
				}, {
					name: "新建街道",
					space:["安宁服务岗","王村服务岗","尧晨服务岗","南关服务岗"]
				}, {
					name: "安宁街道",
					space:["安宁服务岗","王村服务岗","尧晨服务岗","南关服务岗"]
				}, {
					name: "西南街道",
					space:["安宁服务岗","王村服务岗","尧晨服务岗","南关服务岗"]
				}, {
					name: "路西街道",
					space:["安宁服务岗","王村服务岗","尧晨服务岗","南关服务岗"]
				}],
				}
		},
		methods: {
			changenav(n){
				this.isActive = n
			}
		},
		onLoad(option) {
			this.isActive  = option.id
		}
	}
</script>

<style >
	page{
		height: 100%;
		background: url(@/static/text5/common_bg.jpg);
		background-size:100% 100%;
		background-repeat:no-repeat ;
	}
	.text5next{
		height: 100%;
	}
	.navlists {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid red;
	}

	.navself {
		flex: 1;
		text-align: center;
		font-weight: bold;
		line-height: 40px;
		color: black;
	}
	.navselfchange{
		color: red;
		border-bottom:2px solid red;
	}
	.scrollheight{
		height: calc(100vh - 380rpx - env(safe-area-inset-bottom));  // 这是主要
		flex-grow: 1;
	}
	.textcon{
		height: 100%;
	}
	.scrolllist{
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		margin: 5px;
	}
	
</style>
