<template>
	<view>
		<view class="status_bar">
		
		</view>
		<image class="title_picture" src="../../../static/contact/coutactway_title.png" mode="widthFix"></image>
		<zlxfs v-for="(item,index) in lxfslist" :key="index" :lxfs="item"></zlxfs>
	</view>
</template>

<script>
	import zlxfs from "../../../components/z-lxfs/z-lsfs.vue"
	export default {
		components: {
			zlxfs
		},
		data() {
			return {
				lxfslist:[{
					title:"学习培训",
					size:"组织人大代表学习培训，增强代表履职能力和水平"
				},
				{
					title:"参加活动",
					size:"组织参加区人大常委会开展的执法检查、视察、调研、评议等监督活动"                                                              
				},
				{
					title:"列席会议",
					size:"邀请列席区人大常委会会议"
				},
				{
					title:"接待走访",
					size:"每月的第一个星期五为人大代表走访接待日，听取收集区人大代表对各方面工作的建议、批评和意见。接待走访人大代表地点在各人大代表联络站、活动室、服务岗"
				},
				{
					title:"分工联系",
					size:"区人大常委会组成人员根据职责分工,在广泛联系区人大代表的同时,每人重点固定联系2-3名区人大代表"
				},
				{
					title:"对口联系",
					size:"区人大专门委员会、区人大常委会各工作委员会按照安排，依托人大代表联络站、活动室对口联系人大代表"
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.title_picture {
		width: 100%;
	}
</style>
