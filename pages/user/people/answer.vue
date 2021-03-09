<template>
	<view class="answer">
		<image src="../../../static/duty/reply.jpg" mode="widthFix" style="width: 100%;"></image>
		<view class="answer_con">
			<replies  :list="list"></replies>
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
				list:{name:'侯静亚',tel:'15735643203',time:'2021-03-08 10:10:42',title:'好好学习',que:'加油',
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
.answer{
	width: 100%;
	display: flex;
	flex-direction: column;
}
.answer_con{
	padding: 10px;
}
</style>
