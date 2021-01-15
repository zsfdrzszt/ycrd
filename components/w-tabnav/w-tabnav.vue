<template>
	<!-- tagbar -->
	<view ref="tabtopsty" class="tabtopsty" @click.self="changething">
		<view ref="tabtopval" class="tabtopval" :class="{navselfchange:index==isActive }"   v-for="(item,index) in list" :key="index" @click="change(index)">{{item.name}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:Array
		},
		data() {
			return {
				isActive:false,
				num : this.list.length
			};
		},
		methods:{
			change(index){
				this.isActive = index
				this.$emit("change",index)
			},
			changething(e){
				const index = this.isActive
				// const spanLeft = document.getElementsByClassName('tabtopval')[index].offsetWidth * (index)//当前点击的元素左边距离
				// const divBox = document.getElementsByClassName('tabtopval')[index].clientWidth / 2  //点击的元素一半宽度
				// const totalWidths = document.body.clientWidth  //屏幕总宽度
				// const widths = document.body.clientWidth / 2  //一半的屏幕宽度
				// const spanRight = totalWidths - spanLeft  //元素的右边距离
				// const scrollBox = document.getElementsByClassName('tabtopsty')  //获取最外层的元素
				// const scrollL = scrollBox[0].scrollLeft  //滚动条滚动的距离
				// if (spanLeft > widths || spanRight > widths) { 
				// 	//当元素左边距离大于屏幕一半宽度  或者  右边距离大于屏幕一半距离的时候
				// 	scrollBox[0].scrollLeft =  divBox + document.getElementsByClassName('tabtopval')[index].offsetWidth * (index -2) //滚动条最终的滚动距离		
				// }	
			},
		}
	}
</script>

<style>
.tabtopsty{
	display: flex;
	flex-wrap: nowrap ;
	justify-content: space-between;
	overflow: auto;
	position: relative;
	transition-duration: 2s
}
.tabtopval{
	font-weight:bolder ;
	min-width: 25%;
	padding: 10px;
	text-align: center;
	font-weight: 400;
	
}
.navselfchange{
	color: #d71f07;
	border-bottom: 2px #d71f07 solid
}

</style>
