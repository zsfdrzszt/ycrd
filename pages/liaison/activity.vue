<template>
	<view>
		<view>
			<u-image src="../../static/liaison/common_activity_title.jpg" :lazy-load="true" mode="widthFix">
				<u-loading slot="loading"></u-loading>
			</u-image>
		</view>
		<activecard v-for="(item,index) in list_all"  :state="true" :key=item.id :list="item" :url="'/pages/liaison/gkdet?id='+item.id" ></activecard>
	</view>
</template>

<script>
	import activecard  from "../../components/activecard/activecard.vue"
	export default {
		data() {
			return {
				list_all:[{
					id:0,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				},
				{
					id:1,
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民',
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
					img:'https://qiniu.jza2c.com/uploads/20200331/FvLdb3vKoryNWFHQ0-7tOAJ9c5h1.png',
					title:'柴永昌代表在活动室给选民进行宣讲',
					time:'[2020年03月31日]'
				}]
			}
		},
		methods: {
		},
		components:{
			activecard
		},
	}
</script>

<style>

</style>
