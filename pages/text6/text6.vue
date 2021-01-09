<template>
	<view>
		<view class="status_bar">
		</view>
		<image src="../../static/text6img/county_common_rdvoice_title.png" mode="widthFix" style="width: 100%"></image>
		<wsearch class="search" @searchusers="searchusers"></wsearch>
		<dropdown v-for="(item,index) in dazslist" :key="index" :value="item" @click="title(index)">

		</dropdown>
	</view>
</template>

<script>
	import wsearch from "../../components/w-search/w-search.vue"
	import dropdown from "../../components/z-dropdown/z-dropdown"
	export default {
		components: {
			wsearch,
			dropdown
		},
		data() {
			return {
				dazslist: [{
					number: 1,
					name: "全部",
					options: [{
							label: '全部',
							value: 1
						}, {
							label: '代表',
							value: 2
						},
						{
							label: '代表访谈录',
							value: 3
						},
						{
							label: '抗疫阻击战中的人大力量',
							value: 4
						},
						{
							label: '活动咨询',
							value: 5
						}
					]
				}]

			}
		},
		methods: {
			title(index) {
				this.dazslist[0].name = this.dazslist[0].options[index].label
			},
			searchusers(){
				}
		}
	}
</script>

<style lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.search {
		margin-top: 10px;
	}
</style>
