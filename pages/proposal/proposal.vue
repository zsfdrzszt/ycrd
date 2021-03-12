<template>
	<!-- 代表建议 -->
		<view class="textfour">
			<view class="status_bar">
			</view>
			<!-- 顶部图片 -->
			<image class="textfourimg" src="../../static/surveyimg/banner-rdgk.png" mode="widthFix"></image>
			<view class="textnavs">
				<text class="textnav" :class="{textnavchange:1==isActive }" @click="changestate(1)">人代会期间</text>
				<text class="textnav" :class="{textnavchange:2==isActive }" @click="changestate(2)">闭会期间</text>
			</view>
			<scroll-view class="textmaincon" scroll-y>
				<view class="textcontentone" v-show="1 == isActive">
					<wdropdown :list= "droplist" @searchdrop="searchdrop"></wdropdown>
				</view>
				<view class="textcontentone" v-show="2 == isActive">
					<view class="wdroplist">
						<wdropdown :list= "droplist1"  @searchdrop="searchdrop1"></wdropdown>
						<wdropdown :list= "droplist2" @searchdrop="searchdrop2"></wdropdown>
					</view>
					<text class="textfourbar">{{val1}}{{val2}}</text>
				</view>
				<view class="textmainlist">
					<text class="textmassage" v-show="text4list.length == 0">暂无数据</text>
					<wtextcard v-for="(item,index) in text4list" :list="item" :key="index" v-if="1 == isActive" @click="nextpage"></wtextcard>
					<wtextcards v-for="(item,index) in text4list" :list="item" :num="index" :key="index" v-if="2== isActive"></wtextcards>
				</view>
			</scroll-view>
			<wnavall></wnavall>
		</view>
</template>

<script>
	import wtextcard from "../../components/w-text4card/w-text4card.vue"
	import wtextcards from "../../components/w-text4cards/w-text4cards.vue"
	import wnavall from "../../components/w-navall/w-navall.vue"
	import wdropdown from "../../components/w-dropdown/w-dropdown.vue"
	export default {
		components: {
			wtextcards ,
			wtextcard ,
			wnavall,
			wdropdown,
		},
		data() {
			return {
				val:'',
				val1:'2021年',
				val2:'第一季度',
				isActive:1,
				droplist:{name:"全部",list:[{content:"2019"},{content:"2020"},{content:"2021"}]},
				droplist1:{name:"全部",list:[{content:"2019"},{content:"2020"}]},
				droplist2:{name:"全部",list:[{content:"第一季度"},{content:"第二季度"},{content:"第三季度"},{content:"第四季度"}]},
				text4list:[],
				text4lists:[{content:"关于整合基础设施资金改善农村人居环境的建议",state:"回复",time:"2019.3.3"},
				{content:"关于东阳镇创建国家卫生镇项目后期运行维护的建议",state:"回复",time:"2019.3.2"},
				{content:"关于维护建设长凝镇西长凝至庄子乡六台村道路的建议 ",state:"已回复",time:"2019.1.13"},
				{content:"关于规范使用代课教师的建议",state:"回复",time:"2021.1.13"},
				{content:"关于保护利用文物古建筑的建议",state:"已受理",time:"2021.1.13"},
				{content:"关于加强文物保护的建议",state:"回复",time:"2019.1.13"},
				{content:"关于小东关段兴建一所中小学的建议",state:"回复",time:"2020.1.13"},
				{content:"关于区第十六届人大四次会议第017建议的答复",state:"回复",time:"2021.1.13"},
				{content:"关于中郝村申请覆盖干渠的建议",state:"回复",time:"2021.1.13"},
				{content:"关于整体加高郭村学校操场的建议",state:"回复",time:"2021.1.13"},
				{content:"关于区第十六届人大四次会议第017建议的答复",state:"回复",time:"2021.1.13"},
				{content:"关于打造东阳蔬菜品牌的建议",state:"回复",time:"2021.1.13"},
				{content:"关于加强文物保护的建议",state:"回复",time:"2021.1.13"}
				],
				text4listss:[{suggest:"关于为一线教师制作工作服的建议",name:"赵建梅",time:"2020.1.13",condition:"为一线教师制定工作服事宜，各级部门和《山西省总工会关于服务职工经费支出的若干问题的具体规定》中均未见明确的相关政策规定，如有明确规定，区教育局一定做好贯彻落实。"},
				{suggest:"关于在庄子乡津水河冯家局段新建塘坝的建议",name:"崔宴杰",time:"2019.1.13",condition:"我区将积极争取津水河塘坝建设项目的资金投入，将津水河塘坝建设项目纳入2019年水利发展规划建设项目储备库。同时督促庄子乡人民政府加快制定该项目的可行性研究报告及相关申报手续的办理。"},
				{suggest:"关于恢复改建长凝镇永丰干渠的建议",name:"俞国栋",time:"2019.1.13",condition:"由于丘陵山区地形复杂，水资源条件不够稳定，工程实施难度大，建设投资相对多，难以一下子全面解决。下一步，将引导民营企业家联手开发、合力推进完成。"},
				{suggest:"关于维护建设长凝镇西长凝至庄子乡六台村道路的建议",name:"李爱兰",time:"2020.1.13",condition:"区交通运输局研究决定对此路段进行修建。已对该项目进行勘察设计，并报发改局进行立项审批，审批完成后列入2020年施工计划，目前正在办理前期手续，施工图设计已完成并送审查。"},
				{suggest:"关于请求区政府帮助完善南合流村新小区道路的建议",name:"魏巨生",time:"2020.1.13",condition:"长凝镇政府和村委会已经向区政府和交通部门申请项目资金，共同想办法解决。"},
				{suggest:"关于解决低龄学生上下学“接送难”问题的建议",name:"王霞",time:"2019.1.13",condition:"成立“校内托管机构”涉及到相关政策的出台，需多方统筹规划与研究。"},
				{suggest:"关于加大美容美发行业市场监管力度的建议",name:"郝春梅",time:"2020.1.13",condition:"建议中提出的问题，区市场监管局开展了一系列专项检查，包括：“A型肉毒素”等医学美容用药品的使用；重点监测“注射用透明质酸钠”；开展化妆品、美容美发机构检查。上报化妆品不良反应67例，上级采纳评价64例。2019年2月，机构整合后，榆次区市场监督管理局行政执法权已上划市综合执法队。区市场监管局将加大监管力度，与市综合执法队密切配合，推动我区美容美发行业市场规范发展。"},
				{suggest:"关于取缔潇河湾小区院内潇河湾社区南侧的露天垃圾池的建议",name:"王国欣",time:"2020.1.13",condition:"2019年3月3日通过区人大议案组审查，区人大常委会移交有关机关和组织办理。在区人大的大力支持下，多次上报、协调各上级部门，于2019年10月取缔了潇河湾小区院内潇河湾社区南侧的露天垃圾池，并配备了70个垃圾桶。"},
				{suggest:"关于在杨头村新建水井及配套设施的建议",name:"郎培珍",time:"2020.1.13",condition:"已将界牌沟集中供水备用水源工程列入了2019年农村饮水安全巩固提升项目予以实施，在杨头打深井1眼并配套其他供水设施，该工程已于2019年底完工投入使用。"},]
			}
		},
		onLoad() {
			this.text4list= this.text4lists 
		},
		methods: {
			nextpage(val){
				uni.navigateTo({
					url:"/pages/proposal/proposalson"+"?con="+val
				})
			},
			changestate(n){
				this.isActive = n
				this.text4list=[]
			},
			searchdrop(val){
				this.text4list=[]
				this.val = val.content
				this.text4lists.filter((item)=>{
					if(item.time.match(this.val)){
						this.text4list.push(item)
					}
				})
			},
			searchdrop1(val){
				this.val1 = val.content+'年'
				this.text4list=[]
				this.text4listss.filter((item)=>{
					if(item.time.match(val.content)){
						this.text4list.push(item)
					}
				})
			},
			searchdrop2(val){
				this.val2 = val.content
			}
		}
	}
</script>

<style>
	page{
		height: 100%;
	}
	.textfour{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #FFFFFF;
	}
	.textfourimg{
		width: 100%;
	}
	.textnavs{
		display: flex;
		justify-content: center;
		border-bottom: #e6e6e6 solid 1px;
	}
	.textnav{
		width: 45%;
		text-align: center;
		font-weight: bold;
		line-height: 40px
	}
	.textnavchange{
		color: #b50000;
		border-bottom: #b50000 solid 2px;
	}
	.textcontentone{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10px 0;
	}
	.wdroplist{
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}
	.textfourbar{
		font-weight: bold;
		font-size: 18px;
		margin: 10px 0;
	}
	.textmaincon{
		height:70%;
		flex: 1;
	}
	.textmassage{
		display: block;
		margin-top: 50px;
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		font-family: 黑体;
		color: red;
	}
	.textmainlist{
		padding-bottom: 10px;
	}
</style>
