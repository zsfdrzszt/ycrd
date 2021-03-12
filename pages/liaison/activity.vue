<template>
	<view>
		<view class="status_bar"></view>
		<view>
			<u-image src="../../static/liaison/common_activity_title.jpg" :lazy-load="true" mode="widthFix">
				<u-loading slot="loading"></u-loading>
			</u-image>
		</view>
		<activecard v-for="(item,index) in list_all"  :state="true" :key=item.id :list="item" url="/pages/proposal/proposalson"></activecard>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import activecard  from "../../components/activecard/activecard.vue"
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default {
		data() {
			return {
				list_all:[{
					id:0,
					img:'http://qiniu.jza2c.com/uploads/20201217/FiQkd27G4f7lfnzPGWN7zt0GJoFz.jpg',
					title:'郭家堡乡人大代表学习十九届五中全会精神暨年终安排会',
					time:'[2020年03月31日]'
				},
				{
					id:1,
					img:'http://qiniu.jza2c.com/uploads/20210127/FgcPePGDyeIwdqfoTbvjJqDwN67y.jpg',
					title:'同心抗疫   一线慰问暖人心',
					time:'[2020年03月31日]'
				},
				{
					id:2,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲柴永昌代表在活动室给选民进行宣讲柴永昌代表在活动室给选民进行宣讲柴永昌代表在活动室给选民进行宣讲柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				},
				{
					id:3,
					img:'http://qiniu.jza2c.com/uploads/20200723/FgenXnrHIb7lS8ac7bkj3kbVCcbA.jpg',
					title:'郭家堡乡人大代表学《民法典》',
					time:'[2020年03月31日]'
				}]
			}
		},
		methods: {
			
		},
		components:{
			activecard,
			wnavall
		},
	}
</script>

<style>

</style>
