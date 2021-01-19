<template>
	<scroll-view scroll-y class="textllists" show-scrollbar="false">
		<view class="status_bar">
		</view>
        <view class="textllist" v-for="(item,index) in noun" :key="index"  @click="topage(item)">
        	<text>{{item}}</text>
			<image src="/static/nextpages/common_youj.png" style="width: 20px; height: 20px;"></image>
        </view>
		<wnavall></wnavall>
	</scroll-view>
</template>

<script>
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default {
		components: {
			wnavall,
		},
		data() {
			return {
				noun: ["智慧人大平台","人大概况","重要发布","自身建设","代表建议","民意速达","双联系","代表之声","人大小精灵","数据统计分析系统","代表履职","站长审核","站长管理","委员管理","群众留言","三级体系","“三四五二”标准"
				]
			}
		},
		methods: {
            topage(val){
				this.$store.state.smartlist = this.noun;
				uni.navigateTo({
					url:"/pages/nextpages/explainone/explainone"+"?val="+val
				})   
			}
		},
		onHide(){
			this.$store.state.smartlist = this.noun;
		}
	}
</script>

<style>
.textllist{
	line-height: 50px;
	margin:0 10px;
	border-bottom: 1px solid #CCCCCC;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
