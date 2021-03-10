<template>
	<view class="answer">
		<view class="status_bar"></view>
		<image src="../../../static/duty/reply.jpg" mode="widthFix" style="width: 100%;"></image>
		<view class="answer_con">
			<replies  :list="list" @magnify="magnify"></replies>
		</view>
		<view class="img_back" v-show="this.imgstate" @click="hideimg">
			<view class="img_back_box">
				<image :src="imgurl" mode="widthFix"></image>
			</view>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import replies from "../../../components/replies/replies.vue"
	export default {
		components:{
			replies 
		},
		data() {
			return {
				list:{name:'侯静亚',tel:'15735643203',time:'2021-03-08 10:10:42',title:'好好学习',que:'加油',
						imgUrl:'http://qiniu.jza2c.com/Message/20210308/f0acc70977c526397febf50016dfebf5',dai:'侯静亚'}
			,
			imgurl:"",
			imgstate:false
			}
		},
		methods: {
			magnify(val){
				this.imgstate =true
				this.imgurl =val
			},
			hideimg(){
				this.imgstate =false
			}
		}
	}
</script>

<style>
page{
	width: 100%;
}
.answer{
	width: 100%;
	display: flex;
	flex-direction: column;
}
.answer_con{
	padding: 10px;
}
.img_back{
	width: 100%;
	height: 100%;
	display: flex;
	position: fixed;
	left: 0;
	top: 0;
	background-color: rgba(0,0,0,.5);
	justify-content: center;
	align-items: center;
}
.img_back_box{
	width: 70%;
}
.img_back_box image{
	width: 100%;
}
</style>
