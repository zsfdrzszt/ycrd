<template>
	<view class="reply">
		<view class="status_bar"></view>
		<image src="../../../static/duty/reply.jpg" mode="widthFix" style="width: 100%;"></image>
		<view class="reply_con">
			<replies  :list="list" @magnify="magnify"></replies>
			<view class="footer">
				<text>{{this.list.state!=0 ?"已是精选留言":"选为精选留言"}}</text>
			</view>
		</view>
		<view class="img_back" v-show="this.imgstate">
			<movable-area scale-area class="movable-area "  @click="hideimg">
				<movable-view  
				class="movable-view"
                direction="all"
                scale="true"
                scale-min="1"
                scale-max="4"
                :scale-value="scale"
				 @scale="onScale"
				 @dblclick="dblclick"
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
				list:{state:1,name:'侯静亚',tel:'15735643203',time:'2021-03-08 10:10:42',title:'好好学习',que:'加油',
						imgUrl:'http://qiniu.jza2c.com/Message/20210308/f0acc70977c526397febf50016dfebf5',dai:'侯静亚'},
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
				this.imgstate =false
			},
			 dblclick() {
			            if (this.scale == 10) {
			                this.scale = 1;
			            } else {
			                this.scale = 10;
			            }
			        },
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
	overflow: hidden;
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
