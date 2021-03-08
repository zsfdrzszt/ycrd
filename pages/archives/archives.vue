<template>
	<view class="archives">
		<view class="">
			<view class="">
				代表姓名
			</view>
			<view class="">
				{{list.name}}
			</view>
		</view>
		<view class="">
			<view class="">
				时间
			</view>
			<view class="">
				{{list.time}}
			</view>
		</view>
		<view class="">
			<view class="">
				地点
			</view>
			<view class="">
				{{list.space}}
			</view>
		</view>
		<view class="">
			<view class="">
				履职方式
			</view>
			<view class="">
				{{list.way}}
			</view>
		</view>
		<view class="">
			<view class="">
				履职内容
			</view>
			<view class="">
				{{list.content}}
			</view>
		</view>
		<view class="">
			<view class="">
				履职成效
			</view>
			<view class="">
				{{list.effect}}
			</view>
		</view>
		<view class="">
			<view class="">
				查看图片
			</view>
			<image :src="list.img" mode="widthFix" style="width: 20%;"></image>
		</view>
		
		<view class="">
			<view class="">
				阅读 <view class="">
					{{list.num}}
					</view> 
			</view>
			<view class="">
				点赞 <view class="">
					{{list.num}}
					</view> 
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:{name:"刘健",time:"2020-1-3",space:"地址",way:"学习教育培训",content:"内容",effect:"圆满成功",img:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",num:20,zan:19}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
	}
.archives{
	width: 100%;
	height: 100%;
}
</style>
