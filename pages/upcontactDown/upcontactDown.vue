<template>
	<view class="upcontactDown">
		<!-- banner图 -->
		<view class="status_bar" ></view>
		<image class="upcontactDown_image" src="../../static/county/county_common_upcontactDown_title.png" mode="widthFix"></image>
		<view class="upcontactDown_cont">
			<view class="cont_pic">
				<image class="upcontactDown_dittim" :src="info.image" mode="widthFix"></image>
				<text class="cont_name">{{info.name}}</text>
			</view>
			<view class="cont_nei">
				<view class="cont_nei_item">
					<view class="cont_nei_leftitem">届&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</view>
					<view class="cont_nei_rightitem"  >
						<view class="cont_nei_rightitems"  v-for="(item,index) in info.jiebie" >
							{{item}}
						</view>
					</view>
				</view>
				<view class="cont_nei_item">
					<view class="cont_nei_leftitem">职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务：</view>
					<view class="cont_nei_rightitem">
						{{info.post}}
					</view>
				</view>
				<view class="cont_nei_item">
					<view class="cont_nei_leftitem">特色服务：</view>
					<view class="cont_nei_rightitem">
						{{info.service}}
					</view>
				</view>
			</view>
			<navigator url="/pages/liaison/message" class="cont_btn" hover-class="none">
				<image class="cont_btnpic" src="../../static/county/county_common_upcontactDown_mess.jpg" mode="widthFix"></image>
			</navigator>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{
					image:'https://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg',
					name:'李鹏飞',
					jiebie:['晋中市第四届人大代表','晋中市第四届人大代表'],
					post:'榆次区人大常委会主任',
					service:'榆次区人大常委会主任榆次区人大常委会主任榆次区人大常委会主任榆次区人大常委会主任榆次区人大常委会主任榆次区人大常委会主任'
				}
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	page{width: 100%;height: 100%;}
	.upcontactDown{width: 100%;height: 100%;display: flex;flex-direction: column;overflow: hidden;}
	.upcontactDown_image{width: 100%;height: 100%;}
	.upcontactDown_cont{flex: 1;overflow: auto;display: flex;flex-direction: column;padding: 15px 0px;padding-bottom: 30px;}
	.cont_pic{display: flex;flex-direction: column;align-items: center;}
	.upcontactDown_dittim {width: 30%;border-radius: 7px;}
	.cont_name{margin-top: 10px;font-size: 20px;color: #000000;}
	/* 信息 */
	.cont_nei{padding:0px 30px ;}
	.cont_nei_item{display: flex;margin-top: 20px;color: #000000;font-size: 14px;}
	.cont_nei_leftitem{width: 30%;text-align: right;}
	.cont_nei_rightitem{flex: 1;color: rgb(158,158,158);display: flex;flex-direction: column;}
	.cont_btn{display: flex;justify-content: center;align-items: center;padding-top: 50px;}
	.cont_btnpic{width: 65%;}
</style>
