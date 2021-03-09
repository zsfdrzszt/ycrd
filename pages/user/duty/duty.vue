<template>
	<view class="duty">
		<image src="../../../static/duty/user_myperform_back.jpg" mode="widthFix" style="width: 100%;"></image>
		<view class="scroll-view">
			<scroll-view scroll-y="true" >
				<navigator url="content/content" class="duty_con" v-for="(item,index) in list">
					<text>{{index+1}}、</text>
					<text>{{item.name}}</text>
					<text>({{item.num}})</text>
					<view class="duty_image">
						<image src="../../../static/duty/download.png" mode="widthFix" style="width: 100%;"></image>
					</view>
				</navigator>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[{name:'人代会参会情况',num:1},{name:'人代会期间提出的意见建议',num:2},{name:'闭会期间提出的意见建议',num:3},{name:'学习培训教育',num:0},{name:'工作评议',num:0},{name:'宣讲、联系、走访',num:0},{name:'为民服务',num:0},{name:'闭会期间提出的意见建议',num:0},{name:'学习培训教育',num:0},{name:'工作评议',num:0},{name:'宣讲、联系、走访',num:0},{name:'为民服务',num:0},]
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
.duty{
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
}
.scroll-view {
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
	background-color: white;
}
.duty_con{
    margin: 15px 10px;
    box-shadow: 1px 1px 3px #ccc;
    display: block;
    padding: 10px 5px;
	line-height: 32px;
	height: 50px;
	border-radius: 5px;
	box-sizing: border-box;
}
.duty_image{
	float: right;
	width: 8px;
	display: inline-block;
}
</style>
