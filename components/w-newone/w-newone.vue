<template>
	<view class="maincon" @click="topage">
		<view class="newtitle">{{newlist.title}}</view>
		<view class="newmain">{{newlist.content}}</view>
		<view class="newtime">{{newlist.time}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			newlist:Object
		},
		data() {
			return {
				
			};
		},
		methods:{
			topage(){
				this.$emit("topage")
			}
		}
	}
</script>

<style scoped>
	.maincon{
		padding: 15px;
		border-bottom: 1px solid #ccc
	}
.newtitle{
	    font-weight: 550;
		font-size: 18px;
		line-height: 30px;
}
.newmain{
	color: #908c8c;
	line-height: 24px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.newtime{
	margin-top: 10px ;
	text-align: right;
	color: #908c8c;
}
</style>
