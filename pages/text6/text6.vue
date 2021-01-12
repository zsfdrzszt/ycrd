<template>
	<view>
		<view class="status_bar">
		</view>
		<image src="../../static/text6img/county_common_rdvoice_title.png" mode="widthFix" style="width: 100%"></image>
		<wsearch class="search" @searchusers="searchusers"></wsearch>
		<dropdown v-for="(item,index) in dazslist" :key="index" :value="item" @click="title(index)">
		</dropdown>
		<zdbzslist v-for="(item,index) in pull_downlist" :key="index+1" :value="item"></zdbzslist>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wnavall from "../../components/w-navall/w-navall.vue"
	import wsearch from "../../components/w-search/w-search.vue"
	import dropdown from "../../components/z-dropdown/z-dropdown"
	import zdbzslist from "../../components/z-dbzslist/z-dbzslist"
	export default {
		components: {
			wnavall,
			wsearch,
			dropdown,
			zdbzslist
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
				}],
				pull_downlist: [{
					url: "../../static/text6img/FrgBjqcmydWIr_NLawqKufQZZWWk.jpg",
					headline: "代表访谈录",
					details: "抢抓发展新机遇 推动乡村大振兴——访区人大代表、修文镇党委书记张平平今年的政府工作报告政治站位高、目标定位准、发展举措实，科学、准确、详实地提出了全区工作的总体思路和具体目标，为农村工作提供了重要遵循，指明了具体方向。报告中提到，要围绕乡村振兴总抓手，坚持农业农村优先发展。在今后的工作中，修文镇将进一步优化农业产业布局，协调推进重点项目，完善农村基础设施，夯实美丽乡村建设，同时也将紧紧把握“五地一产”入市改革机遇，积极作为，精准施策，激活农业农村内生动力，推动全年各项工作任务落到实处，以“功成不必在我”的精神境界和“功成必定有我”的历史担当，再谋新发展，再创新辉煌。防疫教学同步抓 确保实现双胜利——访区人大代表、榆次二中校长王文清听了李军区长作的政府工作报告，备受鼓舞。报告从六个方面回顾了2019年的工作，数据详实。我区各项工作亮点纷呈，特别是在全省考核中，首次进入市辖区第二的好成绩，真正实现了“排头兵”奋斗目标；对2020年的安排部署实事求是，可操作性强，让我们对榆次的未来充满信心。近年来，榆次二中在区委、区政府的正确领导下，各项工作都取得了长足进步，在市区各项考核中名列前茅。会后，我一定会把报告精神迅速传达到每个教职工，增强全校师生抗击疫情、提高教学质量的信心。我相信在大家的共同努力下，榆次二中一定会取得抗击疫情和教育教学质量提高的双胜利。夯实基础谋发展 振兴产业促经济——访区人大代表、山西国泰中药股份有限公司总经理王翠凤听了政府工作报告后，我备感振奋，特别是报告中多次提到的夯实产业振兴基础，坚持规模化、功能化、特色化发展，对此我深表认同。作为一名从事中药材行业的人大代表，我一定会将会议精神带回去、落实好，立足于药材行业，致力产业发展，依托榆次大学城的科研优势，走产、学、研一体化发展道路，加大企业科技投入，提升产品科技含量，在产业链延伸上再做文章，把企业做大做强，促进农民就业，带动农民增收，实现中药产业发展和乡村振兴的高度融合，为区域中药产业发展作出应有的贡献。务实服务促发展 引来更强动力源——访区人大代表、区招商引资服务中心主任罗长春今年的政府工作报告让我们听到的是我区经济社会发展的主要经济指标位居全市第一、全省十强等一组组振奋人心的数据，不仅彰显了政府执政为民的施政理念，也反映了全区党员干部干劲敦实、成绩切实、目标瓷实的新作风。作为一名人大代表，我深感自豪和欣慰。区招商引资服务中心在今后的工作中，要进一步发挥区位优势，树立“开发全区、全区开发”的发展思想，招商引资抓项目，按照“四为四高两同步”要求抓落实、挖存量、提增量、补短板，确保各项指标持续领先，让招商引资工作成为全区经济社会发展的更强动力源。建设高品位楼盘 争当民企排头兵——访区人大代表、晋中红星房地产公司董事长陈二虎今年的政府工作报告中提到，2020年是全面建成小康社会和“十三五”规划收官之年，也是我区全面拓展高质量转型发展新局面的关键之年。通过这次大会，更加坚定了我们作为民营企业家为榆次实现高质量发展作出贡献的决心。为提高城中村人居环境质量和居民生活水平，促进城市经济社会发展，去年以来，在区委、区政府的领导下，城中村改造工作取得了显著的成效。作为房地产开发企业，我们承载着提升城市生活品质的特殊责任和使命。在未来的发展中，我们要不断向先进城市学习，努力打造舒适便民的楼盘小区，增强市民的获得感和幸福感，为我区城市建设贡献民营企业的力量。民生福祉大提升 疫情防控获首胜——访区人大代表、海洋液压总经理刘亚东感动和感激，是我听完政府工作报告后的切身体会。感动的是，区委、区政府坚持以人民为中心的执政理念，积极实施生态攻坚、“六帮一”精准扶贫等有力举措，使全区人民幸福感得到显著提升。感激的是，疫情防控以来，在区委、区政府的坚强领导下，各级部门日夜奋战，在保障人民安全的同时，推动多个行业有序复工复产，取得了疫情防控战的阶段性胜利。作为人大代表和企业家，既是“受益者”又是“参与者”，我们可以轻轻松松投入到全区新一轮发展建设中，快快乐乐过上幸福的日子。作为人大代表，我今后将进一步增强代表意识，提升履职能力，积极建言献策，为我区发展贡献力量。"
				}, {
					url: "../../static/text6img/FrgBjqcmydWIr_NLawqKufQZZWWk.jpg",
					headline: "代表访谈录",
					details: "代表访谈录"
				}, {
					url: "../../static/text6img/FrgBjqcmydWIr_NLawqKufQZZWWk.jpg",
					headline: "代表访谈录",
					details: "代表访谈录"
				}, {
					url: "../../static/text6img/FrgBjqcmydWIr_NLawqKufQZZWWk.jpg",
					headline: "代表访谈录",
					details: "代表访谈录"
				}, {
					url: "../../static/text6img/FrgBjqcmydWIr_NLawqKufQZZWWk.jpg",
					headline: "代表访谈录",
					details: "代表访谈录"
				}]

			}
		},
		methods: {
			title(index) {
				this.dazslist[0].name = this.dazslist[0].options[index].label
			},
			searchusers() {}
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
