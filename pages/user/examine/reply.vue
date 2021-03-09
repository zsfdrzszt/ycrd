<template>
	<view class="reply">
		<image src="../../../static/duty/reply.jpg" mode="widthFix" style="width: 100%;"></image>
		<view class="reply_con">
			<replies  :list="list" @magnify="magnify"></replies>
			<view class="footer">
				<text>{{this.list.state!=0 ?"已是精选留言":"选为精选留言"}}</text>
			</view>
		</view>
		<view class="img_back" v-show="this.imgstate" @click.self="hideimg">
			<view class="img_back_box">
				<image :src="imgurl" mode="widthFix"></image>
			</view>
		</view>
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
				list:{state:1,name:'侯静亚',tel:'15735643203',time:'2021-03-08 10:10:42',title:'好好学习',que:'加油',
						imgUrl:'http://qiniu.jza2c.com/Message/20210308/f0acc70977c526397febf50016dfebf5',dai:'侯静亚'},
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
.reply{
	width: 100%;
	display: flex;
	flex-direction: column;
}
.reply_con{
	padding: 10px;
}
.footer{
	text-align: center;
}
.footer>text{
	display: inline-block;
	margin: 20px 0;
	background-color: #CE1717;
	width: 100px;
	height: 30px;
	line-height: 30px;
	color: white;
	border-radius: 4px;
	border: none;
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
