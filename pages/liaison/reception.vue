<template>
	<view>
		<view class="status_bar"></view>
		<view>
			<u-image src="../../static/liaison/common_reception_title.jpg" :lazy-load="true" mode="widthFix">
				<u-loading slot="loading"></u-loading>
			</u-image>
		</view>
		<view class="title">说明</view>
		<view class="explain">
			<u-parse class="pages" :html="explain" :tag-style="contentstyle"></u-parse>
		</view>
		<view class="dropdown"><wdropdown :list= "droplist" @searchdrop="searchdrop"></wdropdown></view>
		<view class="table">
			<view class="row headrow">
				<view class="time">接待时间</view>
				<view class="person">接待代表</view>
				<view class="details">接待情况</view>
			</view>
			<view class="row" v-for="(item,index) in tabledata" :key="index">
				<view class="time">{{item.time}}</view>
				<view class="person" ><text v-for="(p,index) in item.person">{{p}}</text></view>
				<view class="details" @click="showdet(item.id)" :style="item.content?{color:'#007AFF'}:''">查看详情</view>
			</view>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wdropdown from "../../components/w-dropdown/w-dropdown.vue"
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default {
		data() {
			return {
				droplist:{name:"全部",list:[{content:"2019"},{content:"2020"}]},
				contentstyle: {
					'.pages table': 'width:100% !important',
					'.pages td':'border-bottom:1px solid #f5f5f5',
					'.pages img':'display:block;width:100%',
					'.pages div':'font-size:32rpx!important',
					'.pages p':'font-size:16px!important',
				},
				explain: '<div class="d1" style="white-space:normal;padding:0px;margin:12px 0px 0px;list-style:none;font-family:微软雅黑;touch-action:pan-y;display:flex;font-size:medium;"><div class="d2" style="padding:0px;margin:0px;list-style:none;font-family:黑体;touch-action:pan-y;font-size:20px;"><strong><span style="font-family:&quot;Microsoft YaHei&quot;;">1、接待时间：</span></strong></div><div class="d3" style="padding:0px;margin:0px;list-style:none;font-family:黑体;touch-action:pan-y;flex:1 1 0%;font-size:20px;"><span style="font-family:&quot;Microsoft YaHei&quot;;">每月第一周的周五下午15:00—16:00（如遇节假日则顺延一周）</span></div></div><div class="d1" style="white-space:normal;padding:0px;margin:12px 0px 0px;list-style:none;font-family:微软雅黑;touch-action:pan-y;display:flex;font-size:medium;"><div class="d2" style="padding:0px;margin:0px;list-style:none;font-family:黑体;touch-action:pan-y;font-size:20px;"><strong><span style="font-family:&quot;Microsoft YaHei&quot;;">2、接待地点：</span></strong></div><div class="d3" style="padding:0px;margin:0px;list-style:none;font-family:黑体;touch-action:pan-y;flex:1 1 0%;font-size:20px;"><span style="font-family:&quot;Microsoft YaHei&quot;;">郭家堡乡人大代表联络站</span></div></div><div class="d1" style="white-space:normal;padding:0px;margin:12px 0px 0px;list-style:none;font-family:微软雅黑;touch-action:pan-y;display:flex;font-size:medium;"><div class="d2" style="padding:0px;margin:0px;list-style:none;font-family:黑体;touch-action:pan-y;font-size:20px;"><strong><span style="font-family:&quot;Microsoft YaHei&quot;;">3、接待范围：</span></strong></div><div class="d3" style="padding:0px;margin:0px;list-style:none;font-family:黑体;touch-action:pan-y;flex:1 1 0%;font-size:20px;"><span style="font-family:&quot;Microsoft YaHei&quot;;">辖区群众（选民）</span></div></div><div class="d1" style="white-space:normal;padding:0px;margin:12px 0px 0px;list-style:none;font-family:微软雅黑;touch-action:pan-y;display:flex;font-size:medium;"><div class="d2" style="padding:0px;margin:0px;list-style:none;font-family:黑体;touch-action:pan-y;font-size:20px;"><strong><span style="font-family:&quot;Microsoft YaHei&quot;;">4、受理内容：</span></strong></div><div class="d3" style="padding:0px;margin:0px;list-style:none;font-family:黑体;touch-action:pan-y;flex:1 1 0%;font-size:20px;"><span style="font-family:&quot;Microsoft YaHei&quot;;">郭家堡乡辖区和人大代表职权范围内涉及的有关事项。</span></div></div><div class="d1" style="white-space:normal;padding:0px;margin:12px 0px 0px;list-style:none;font-family:微软雅黑;touch-action:pan-y;display:flex;font-size:medium;"><div class="d2" style="padding:0px;margin:0px;list-style:none;font-family:黑体;touch-action:pan-y;font-size:20px;"><strong><span style="font-family:&quot;Microsoft YaHei&quot;;">5、接待要求：</span></strong></div><div class="d3" style="padding:0px;margin:0px;list-style:none;font-family:黑体;touch-action:pan-y;flex:1 1 0%;font-size:20px;"><span style="font-family:&quot;Microsoft YaHei&quot;">要认真记录选民意见和建议，代表不直接处理问题。</span></div></div>',
				tabledata:[
					{id:1,time:'2020-01-03',person:['田晓宇','卢海萍'],content:''},
					{id:2,time:'2020-01-03',person:['焦志刚','陈二虎'],content:'有内容'},
					{id:3,time:'2020-01-03',person:['王殿胜','任光荣'],content:''},
					{id:4,time:'2020-01-03',person:['柴永昌','田晓宇'],content:''}
				]
			}
		},
		methods: {
			// 下拉
			searchdrop(arg){
				console.log(arg.content)
			},
			// 查看详情
			showdet(id){
				var index = this.tabledata.findIndex((value)=>value.id==id)
				if(this.tabledata[index].content!=''){
					uni.navigateTo({
						url:"/pages/liaison/receptiondet?id="+id
					})
				}
			}
		},
		components:{
			wdropdown,
			wnavall
		}
	}
</script>

<style>
	page{
		background-image: url(../../static/text5/common_bg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}
	.title{
		font-size: 40rpx;
		font-weight: bold;
		text-align: center;
		margin: 40rpx 0;
	}
	.explain {
		margin: 0 20rpx;
		box-shadow: 1px 1px 10px #ccc;
		padding: 20rpx;
		border-radius: 8rpx;
	}
	.dropdown{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80px;
	}
	.table{
		margin: 0 20rpx;
		padding-bottom: 20rpx;
	}
	.row{
		display: flex;
		width: 100%;
		text-align: center;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		background-color: #fff;
		color: #666;
		border: 1px solid #e6e6e6;
		border-bottom: none;
	}
	.headrow{
		background-color: #f2f2f2;
	}
	.time{
		width : 200rpx;
		padding: 20rpx 10rpx;
	}
	.person{
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		text-align: center;
		padding: 20rpx 10rpx;
		border-left: 1px solid #e6e6e6;
		border-right: 1px solid #e6e6e6;
	}
	.details{
		width: 180rpx;
		padding: 20rpx 10rpx;
	}
</style>
