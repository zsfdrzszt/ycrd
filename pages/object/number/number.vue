<template>
	<view class="number">
		<view class="status_bar"></view>
		<scroll-view class="scroll-view" scroll-y="true" >
			<view>
				<relation :list="item" :num="index" v-for="(item,index) in list1"></relation>
			</view>
		</scroll-view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import relation  from "../../../components/relation/relation.vue"  
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default {
		components:{
			relation,
			wnavall
		},
		data() {
			return {
				list1:[{space:["区人大监察和司法委员会","区人大监察和司法委员会"],aim:'司法委员会',num:7,content:'详情'},
				{space:["区人大监察和司法委员会","区人大监察和司法委员会"],aim:'司法委员会',num:7,content:'详情'},
				{space:["区人大监察和司法委员会","区人大监察和司法委员会"],aim:'司法委员会',num:7,content:'详情'}],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
	width: 100%;
	height: 100%;
}
.number{
	width: 100%;
	height: 100%;
	background-image: url(../../../static/object/county_common_twounit_bgimg.jpg);
	background-size: cover;
	background-position: center;
	overflow: hidden;
	padding-bottom: 20rpx;
}
.scroll-view{
	width: 100%;
	height: 100%;
}
</style>
