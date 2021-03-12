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
				list1:[{space:["区人大监察和司法委员会","区人大常委会法工委"],aim:'锦纶街道人大代表联络站的站内代表',num:7,content:'详情'},
				{space:["区人大社会建设委员会",""],aim:'西南街道人大代表联络站的站内代表',num:4,content:'详情'},
				{space:["区人大财政经济委员会","区人大常委会财经工委"],aim:'经纬街道人大代表联络站的站内代表',num:6,content:'详情'}],
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
}
.scroll-view{
	width: 100%;
	height: 98%;
}
</style>
