<template>
	<view class="archives">
		<view class="status_bar"></view>
		<view class="archives_content">
			<view class="archives_item">
				<view class="archives_left">
					代表姓名
				</view>
				<view class="archives_right">
					{{list.name}}
				</view>
			</view>
			<view class="archives_item">
				<view class="archives_left">
					时间
				</view>
				<view class="archives_right">
					{{list.time}}
				</view>
			</view>
			<view class="archives_item">
				<view class="archives_left">
					地点
				</view>
				<view class="archives_right">
					{{list.space}}
				</view>
			</view>
			<view class="archives_item">
				<view class="archives_left">
					履职方式
				</view>
				<view class="archives_right">
					{{list.way}}
				</view>
			</view>
			<view class="archives_item">
				<view class="archives_left">
					履职内容
				</view>
			</view>
			<view class="archives_items">
				{{list.content}}
			</view>
			<view class="archives_item">
				<view class="archives_left">
					履职成效
				</view>
			</view>
			<view class="archives_items">
				{{list.effect}}
			</view>
			<view class="archives_item">
				<view class="archives_left">
					查看图片
				</view>
			</view>
			<view class="archives_image" >
				<image :src="list.img" mode="widthFix" style="width: 20%;" @click="magnify()"></image>
			</view>
			
			<view class="archives_footer">
				<view>
					<view class="archives_one">
						阅读 <view class="archives_txt">
							{{list.num}}
							</view> 
					</view>
				</view>
				<view>
					<view class="archives_two">
						<view>
							点赞 <view class="archives_txts">
								{{list.zan}}
								</view> 
						</view>
						<image src="../../static/bulidimg/hand.png" mode="widthFix" style="width: 20px;" ></image>
					</view>
				</view>
			</view>
		</view>
		<wnavall></wnavall>
		<view class="img_back" v-if="this.imgstate">
			<movable-area scale-area class="movable-area "  @click="hideimg">
				<movable-view  
				class="movable-view"
		        direction="all"
		        scale="true"
		        scale-min="1"
		        scale-max="4"
		        :scale-value="scale"
				 @scale="onScale"
		      >
					<image :src="imgurl" class="lookimg" mode="widthFix" ></image>
				</movable-view>               
			</movable-area>
		</view>
	</view>
</template>

<script>
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default {
		components:{
			 wnavall 
		},
		data() {
			return {
				list:{name:"刘健",time:"2020-1-3",space:"地址",way:"学习教育培训",content:"内容",effect:"圆满成功",img:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",num:20,zan:19},
				imgurl:"",
				imgstate:false,
				scale:1,
			}
		},
		methods: {
			magnify(val){
				this.imgstate =true,
				this.imgurl =this.list.img,
				console.log(val)
			},
			hideimg(){
				this.imgurl =""
				this.scale = 1;
				this.imgstate =false
			},
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: url(../../static/bulidimg/9ac64b3522ca589efa4391084dbc7fd.png);
		background-size: 100% 100%;
	}
.archives{
	width: 100%;
	height: 100%;
	margin: 0;
	display: flex;
	flex-direction: column;
	position: relative;
}
.archives_content{
	padding: 10px;
	height: 100%;
	overflow: auto;
}
.archives_item{
	display: flex;
	font-size: 16px;
	margin: 10px 0;
	border-bottom: 1px solid #ededed;
	line-height: 30px;
	padding-bottom: 5px;
	box-sizing: border-box;
	margin-top: 5px;
}
.archives_left{
	font-size: 15px;
	width: 64px;
	text-align: justify;
	text-align-last: justify;
	font-weight: bold;
}
.archives_right{
	margin-left: 10px;
	flex: 1;
	text-align: right;
	color: #aeaeae;
	font-size: 14px;
}
.archives_items{
	padding: 10px 0;
	font-size: 14px;
	line-height: 28px;
	text-indent: 2em;
	border-bottom: 1px solid #ededed;
	color: #777777;
	padding-top: 0;
	text-indent: 2em;
}
.archives_image{
	margin: 0 10px;
	padding-bottom: 10px;
}
.archives_image>image{
	width: 70px;
	margin-right: 30px;
}
.archives_footer{
	width: 100%;
	display: flex;
	height: 30px;
	padding: 10px 0 20px;
}
.archives_footer>view:first-child{
	width: 50%;
	padding-right: 10px;
}
.archives_footer>view:last-child{
	width: 50%;
	padding-left: 10px;
}
.archives_one,.archives_two{
	width: 100%;
	background-color: #fff;
	border-radius: 5px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	box-sizing: border-box;
	color: #888;
}
.archives_txt{
	display: inline-block;
	color: #111;
	font-weight: bold;
	padding-left: 5px;
}
.archives_two{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.archives_txts{
	display: inline-block;
	color: #111;
	font-weight: bold;
	padding-left: 5px;
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
</style>
