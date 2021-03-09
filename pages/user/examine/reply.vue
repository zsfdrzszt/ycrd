<template>
	<view class="reply">
		<image src="../../../static/duty/reply.jpg" mode="widthFix" style="width: 100%;"></image>
		<view class="reply_con">
			<replies  :list="list"></replies>
			<view class="footer">
				<text>{{this.list.state!=0 ?"已是精选留言":"选为精选留言"}}</text>
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
						imgUrl:'http://qiniu.jza2c.com/Message/20210308/f0acc70977c526397febf50016dfebf5',dai:'侯静亚'}
			}
		},
		methods: {
			
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
</style>
