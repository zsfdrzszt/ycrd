<template>
	<view class="newtwomain" @click="topage">
		<image :src="list.url" class="newtwoimg"></image>
		<view class="newcontwo">
			<view class="newcontitle"><text v-if="list.state" class="newtwored">【置顶】</text>{{list.title}}</view>
			<view class="newtwotime">{{list.time}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			newlist:Object
		},
		data() {
			return {
				list:this.newlist
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
.newtwomain{
	display: flex;
    justify-content: space-around; 
	align-items: center;
	width: 100%;
	height: 100px;
	padding: 10px 20px;
	border-bottom: 1px solid #ccc
}
.newtwoimg{
	width: 30%;
	height: 70px;
}
.newcontwo{
	flex: 1;
	margin: 10px;
}
.newtwored{
	color: red;
	margin: 0 5px;
}
.newcontitle{
	font-size: 15px;
	font-weight: bold;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.newtwotime{
	text-align: right;
	color: #908c8c;
	margin-top: 10px;
	font-size: 14px
}
</style>
