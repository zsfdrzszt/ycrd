<template>
	<!-- 个人中心/双联系/联系常委 -->
	<view class="recommend">
		<view class="status_bar"></view>
		<wnavall></wnavall>
		<!-- banner图 -->
		<image class="recommend_image" src="/static/user/user_myMessages_back.jpg" mode="widthFix"></image>
		<!-- 内容 -->
		<view class="recommend_cont">
			<view class="recommend_cont_top">
				<text class="recommend_cont_topitem"  @click="change(1)" :class="{activetab:active==1}">给我的留言</text>
				<text class="recommend_cont_topitem"  @click="change(2)" :class="{activetab:active==2}">我的留言</text>
				<text class="recommend_cont_topitem"  @click="change(3)" :class="{activetab:active==3}">联系代表</text>
			</view>
			<!-- 内容 -->
			<view class="recommend_cont_cen">
				<view class="recommend_cont_cenitem" v-show="active==1">
					<CenterDouble :title="item.title" :time="item.time" :cont="item.cont" v-for="(item,index) in double" :key="index"></CenterDouble>
				</view>
				<view class="recommend_cont_cenitem" v-show="active==2">
					<CenterDouble :title="item.title" :time="item.date" :cont="item.neirong" v-for="(item,index) in double1" :key="index"></CenterDouble>
				</view>
				<view class="recommend_cont_cenitem" v-show="active==3">
					<wuserlist  v-for=" (item,index) in userlist " :key="index" :value="item" > </wuserlist>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import wnavall from "@/components/w-navall/w-navall.vue"
	import CenterDouble from '@/components/CenterDouble/CenterDouble.vue'
	import wuserlist from "@/components/w-userlist/w-userlist.vue"
	export default {
		components:{
			wnavall,
			CenterDouble,
			wuserlist
		},
		data() {
			return {
				active:1,
				double:[
					{
						id:1,
						title:'好好学习1',
						time:'2021-03-08 10:13:39',
						cont:'加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油'
					},{
						id:2,
						title:'好好学习2',
						time:'2021-03-08 10:13:39',
						cont:'加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油'
					}
				],
				double1:[
					{
						id:1,
						title:'好好学习11111',
						date:'2021-03-08 10:13:39',
						neirong:'加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油'
					}
				],
				userlist:[{
					id:1,
					name:'百毒不侵',
					classspace:'区代表',
					job:'',
					url:'https://thirdwx.qlogo.cn/mmopen/vi_32/iaIWTukWvx0UlXujZyZu61ZAIeticNFqRicgJg6sIUuJaBoYfwUpLsDjovlMVTBnuTrMoBPsMZhYzvSOJQibBAsyKA/132'
				},{
					id:2,
					name:'孟广生',
					classspace:'区代表',
					job:'晋中田梦农业生态庄园专业合作社总经理',
					url:'https://qiniu.jza2c.com/uploads/20190727/FhD1-vQENNhpeefpN8UMR17bqJ4i.jpg'
				}]
			}
		},
		methods: {
			change(n){
				this.active=n;
			}
		}
	}
</script>

<style scoped>
	.recommend{width: 100%;height: 100%;display: flex;flex-direction: column;overflow: hidden;background-color: #f5f5f5;}
	page{width: 100%;height: 100%;}
	.recommend_image{width: 100%;}
	.recommend_cont{flex: 1;display: flex;flex-direction: column;overflow: hidden;}
	/* 选项卡头部 */
	.recommend_cont_top{height: 40px;display: flex;background-color: #FFFFFF;border: 1px solid #E6E6E6;}
	.recommend_cont_topitem{flex: 1;display: flex;justify-content: center;align-items: center;color: #000000;font-size: 14px;}
	.activetab{color: #ee0000;border-bottom: 2px solid #ee0000;}
	/* 选项卡内容 */
	.recommend_cont_cen{flex: 1;overflow: auto;}
	.recommend_cont_cenitem{height: 100%;padding:0px 10px;padding-top: 10px;}
	.usermain{width: 100%;margin: 0px;margin-bottom: 10px;}
</style>
