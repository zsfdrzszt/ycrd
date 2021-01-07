<template>
	<view class="survey_top">
		<!-- 顶部图片 -->
		<image src="../../static/surveyimg/banner-rdgk.png" mode=""></image>

		<!-- 选项卡 -->
		<sun-tab :value.sync="index" @change="objectChange" :tabList="tabObjectList" rangeKey="name"></sun-tab>

	</view>
</template>

<script>
	import sunTab from '@/components/sun-tab/sun-tab.vue';
	export default {
		components: {
			sunTab
		},
		data() { 
			return {
				index: 0,
				tabList: ['选项卡一', '选项卡二', '选项卡三'], //普通数据赋值
				tabObjectList: [ //对象数组赋值
					{
						name: '人大概述',
						value: 1
					},
					{
						name: '常委会领导',
						value: 2
					},
					{
						name: '机构设置',
						value: 3
					},
					{
						name: '常委会成员',
						value: 4
					}
				],

			}
		},
		methods: {
			arrayChange(e) {
			},
			objectChange(e) {
			}

		}
	}
</script>

<style>
	.survey_top image {
		width: 100%;
		height: 220rpx;
	}
</style>
