<template>
	<view class="answer">
		<view class="status_bar"></view>
		<image src="../../../static/duty/reply.jpg" mode="widthFix" style="width: 100%;"></image>
		<view class="answer_con">
			<replies  :list="list" @magnify="magnify"></replies>
		</view>
		<view class="img_back" v-if="this.imgstate">
			<movable-area scale-area class="movable-area "  @click="hideimg">
				<movable-view  
				class="movable-view"
		        direction="all"
		        scale="true"
		        scale-min="1"
		        scale-max="4"
		        :scale-value="scale"
		      >
					<image :src="imgurl" class="lookimg" mode="widthFix" ></image>
				</movable-view>               
			</movable-area>
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
			imgstate:false,
			scale:1
			}
		},
		methods: {
			magnify(val){
				this.imgstate =true,
				this.imgurl =val
			},
			hideimg(){
				this.imgstate =false,
				this.scale=1,
				this.imgurl=""
			},
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
	overflow: hidden;
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
	height: 80%;
}
.img_back_box image{
	width: 100%;
}
.movable-view {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-align: center;
}

.movable-area {
    height: 100%;
    width: 100%;
    position: fixed;
    overflow: hidden;
}

.movable-view image {
    width: 60%;
}
.lookimg {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.imagecontent {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 1);
    top: 0;
    position: fixed;
}
</style>
