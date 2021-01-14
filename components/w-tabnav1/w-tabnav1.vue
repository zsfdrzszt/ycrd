<template>
	<view>
		<scroll-view scroll-x class="scrollview" :scroll-left="scrollLeft" scroll-with-animation @click="changething">
			<view ref="tabtopsty" class="tabtopsty" >
				<view ref="tabtopval" class="tabtopval" :class="{navselfchange:index==isActive }"   v-for="(item,index) in list" :key="index" @click="change(index)">{{item.name}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			list:Array
		},
		data() {
			return {
				scrollLeft:0,
				isActive:false,
			};
		},
		methods:{
			change(index){
				this.isActive = index
				this.$emit("change",index)
			},
			changething(e){	
				let num = this.$refs.tabtopval[0].$el.offsetWidth  *(this.isActive - 1)
				this.scrollLeft = num
				}	
			},
	}
</script>

<style>
.tabtopsty{
	display: flex;
	flex-wrap: nowrap ;
}
.tabtopval{
	font-weight:bolder ;
	min-width: 25%;
	padding: 10px;
	text-align: center;
	
}
.navselfchange{
	color: #d71f07;
	border-bottom: 2px #d71f07 solid
}
</style>
