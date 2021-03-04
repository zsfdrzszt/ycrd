<template>
	<view class="textsize">
		<image :src="imgurl[num]" mode="heightFix" class="textpaly" @click="changepaly"></image>
		<text class="textcont">点击调整字体大小</text>
		<text class="text textBig" @click="changesize(1)">【大】</text>
		<text class="text textSmall" @click="changesize(0)">【小】</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:0,
				imgurl:["/static/textsize/common_pluse.png","/static/textsize/common_play.gif"]
			};
		},
		methods:{
			changepaly(){
				if(this.num == 0){
					this.num = 1
				}else{
					this.num = 0
				}
			},
			changesize(n){
				this.$emit("click",n)
			},
		}
	}
</script>

<style>
   .textsize{
	   width: 100%;
	   height:50px;
	   position: fixed;
	   left: 0;
	   bottom: 0;
	   display: flex;
	   justify-content: center;
	   align-items: center;
	   background-color: #FFFFFF;
   }
   .textpaly{
	   height: 50px;
	   margin-top: 10px;
   }
   .textcont{
	   color: red;
	   line-height: 50px;
	   font-size: 18px;
	   font-weight: bolder;
   }
   .text{
	   line-height: 50px;
	   font-size: 18px;
	   font-weight: bolder;
   }
</style>
