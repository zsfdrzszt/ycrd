<template>
	<!--履职共享添加上传图片页 -->
	<view class="shareaddu">
		<!-- 成效 -->
		<resum2 :type="2" :lrtitle='"成效"' :value='effect' :placetext='"请输入成效"' @textchange="effectchange"></resum2>
		<!-- 上传图片 -->
		<view class="upload">
			<view class="number">{{img_number}}/9</view>
			<u-upload ref="uUpload" :action="action" :auto-upload="false" max-count="9" @on-choose-complete="uplodesuccess" @on-remove='onremove'></u-upload>
		</view>
		<!-- 添加 -->
		<view class="submit_btn">
			  <button type="default" @click="" class="submit_btn1">添加</button>
		</view>
	</view>
</template>

<script>
	import resum2 from "../../../components/resum/resum2.vue" //左右型
	export default {
		components:{
			resum2
		},
		data() {
			return {
				img_number:0,//上传图片
				action: 'http://www.example.com/upload',//上传图片接口
				effect:''
			}
		},
		methods: {
			effectchange(val){
				this.effect=val;
				console.log(this.effect)
			}
		}
	}
</script>

<style scoped>
	page{width: 100%;height: 100%;box-sizing: border-box;background-image: url('../../../static/create/common_bg.jpg');background-size: 100% 100%;background-repeat: no-repeat;background-attachment: fixed;}
	.shareaddu{width: 100%;}
	/* 上传图片 */
	.upload{margin: 20rpx;background-color: transparent;box-shadow: 1px 1px 10px #ccc;font-size: 32rpx;}
	.number{text-align: right;line-height: 90rpx;padding: 0 10rpx;font-size: 35rpx;font-weight: bold;}
	.submit_btn{padding: 20px 0;}
	.submit_btn1{background-color: #ce1717;height: 38px;line-height: 38px;color: #fff;font-size: 14px;width: 64px;}
</style>
