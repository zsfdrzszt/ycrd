<template>
	<view class="number">
		<scroll-view scroll-y="true" class="scroll-view" >
			<view>
				<relation :list="item" :num="index" v-for="(item,index) in list1"></relation>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import relation  from "../../../components/relation/relation.vue"  
	export default {
		components:{
			relation
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
}
.scroll-view{
	width: 100%;
	height: 100%;
}
</style>
