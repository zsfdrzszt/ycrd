<template>
	<view>
		<view class="status_bar">
		</view>
		<image src="../../static/bulidimg/county_common_build_title.png" mode="widthFix" style="width: 100%"></image>
		<wsearch class="search" @searchusers="searchusers"></wsearch>
		<!-- <wuserlist v-for=" (item,index) in userlist " :key="index" :value="item"> </wuserlist> -->
		<zlist v-for=" (item,index) in zlist " :key="index" :value="item" ></zlist>
		<view class="end">
			<text>以到达最底部</text>
		</view>
	</view>
</template>

<script>
	import wsearch from "../../components/w-search/w-search.vue"
	import zlist from "../../components/z-list/z-list.vue"
	export default {
		components:{
			wsearch,
			zlist
		},
		data() {
			return {
				zlist:[{
					content:"依宪治国、依宪执政，习近平法治思想领航中国",
					region:"榆次区",
					time:"2020-12-04"
				},
				{
					content:"深入学习贯彻习近平总书记关于新冠肺炎疫情防控的重要讲话精神为打赢疫情防控阻击战贡献青春力量",
					region:"榆次区",
					time:"2020-12-04"
				},
				{
					content:"在中央政治局常委会会议研究应对新型冠状病毒肺炎疫情工作时的讲话",
					region:"榆次区",
					time:"2020-12-04"
				},
				{
					content:"山西代表团传达学习习近平总书记参加内蒙古代表团审议时的重要讲话楼阳生主持并发言林武传达",
					region:"榆次区",
					time:"2020-12-04"
				},
				{
					content:"山西省委常委会召开扩大会议重温三篇光辉文献重整行装继续征程",
					region:"榆次区",
					time:"2020-12-04"
				},
				{
					content:"全国人民代表大会常务委员会工作报告",
					region:"榆次区",
					time:"2020-12-04"
				}]
			}
		},
		methods: {
			// changenav() {
			// 	this.warterfall = !this.warterfall
			// 	if(this.userlist.length == 0){
			// 		this.massage ="请输入内容"
			// 	}else{
			// 		this.massage = ""
			// 	}
			// 	this.userlist=[]
			// },
			searchusers(){
				
			}
		}
	}
</script>

<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	
	//搜索
	.search {
	
	}
	
	//底部
	.end {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40rpx;
	}
</style>
