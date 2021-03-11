<template>
	<view class="text4" style="background-image: url(../../static/text4/common_articlebg.jpg);background-size: cover;">
		<view class="status_bar"></view>
		<view class="textsontitle">{{title}}</view>
		<view class="textsoncon">
			<view :style="{fontSize:textSize}">代表建议：</view>
			<view :style="{fontSize:textsize}">十九大报告中提出三年人居环境行动和今年全市学习浙江“千村示范、万村整治”经验。打造美丽宜居农村人居环境，需配套基础设施，包括农村道路硬化、安全饮水管网、污水收集管网、集中供热管网等。修文镇农村人居环境基础设施建设现况如下:我镇下辖21个行政村，已全部实施街巷硬化。修文村、东长寿村等6村完成了煤改气管网改造。中郝村、东郝村等8村完成了集中供热管网改造。现我镇自行配备生活污水管网的共有9个行政村，其中东郝、郭村、修文、东长寿四个村建有污水排放处理站。大部分村安全饮水管网已达到设计使用最高年限，需对管网进行更新。</view>
			
			<view class="" :style="{fontSize:textsize}">2019年上级政府部门将投资对我镇陈侃、陈胡等13个村实施集中供热工程。我镇计划利用此次契机，引导各村将污水处理管网、安全饮水管网、村道硬化与集中供热工程统筹改造，实现各方资金的有效利用，避免农村道路拉链式重复开挖，达到人居环境基础设施效用的最大化。</view>
			<view class="" :style="{fontSize:textsize}">建议:农业局作为改善农村人居环境的牵头单位，结合乡村基础设施实际情况，协调水利、环保、交通等部门，统筹、整合各项涉农基础设施利好政策、资金、资源等优势，高效、利民改善农村人居环境。</view>
			<view class="" :style="{fontSize:textSize}">办理答复情况：</view>
			<view class="" :style="{fontSize:textsize}">我区组织区、乡、村三级干部分四批前往浙江省学习“四村示范、万村整治”经验，同时，制定了全区《农村人居环境整治三年行动实施方案》。</view>
		</view>
		<wtextsize @click="changetextsize"></wtextsize>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wnavall from "../../components/w-navall/w-navall.vue"
	import wtextsize from "../../components/w-textsize/w-textsize.vue"
	export default {
		components: {
			wnavall,
			wtextsize
		},
		data() {
			return {
				title:"",
				textsize: "16px",
				textSize: "20px",
			}
		},
		methods: {
			changetextsize(e) {
				let num = parseInt(this.textsize)
				let numtitle = parseInt(this.textSize)
				if (e == 1) {
					num++
					numtitle++
				} else if (e == 0) {
					num--
					numtitle--
					if (num < 14) {
						num = 14
					}
					if (numtitle < 14) {
						numtitle = 14
					}
				}
				this.textsize = num + 'px'
				this.textSize = numtitle + 'px'
				// console.log(num)
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数 //打印出上个页面传递的参数。
			this.title = option.con
		}
	}
</script>

<style scoped>
	page{
		height: 100%;
	}
	.text4{
		height: 100%;
	}
.textsontitle{
	margin: 20px 30px;
	text-align: center;
	font-size: 18px;
	font-weight: bold;
}
.progressbar{
	width: 100%;
	height: 50px;
	margin: 0 10px;
}
.progressbartop{
	display: flex;
	justify-content: space-evenly;
}
.progressbartop>text{
	flex: 1;
	text-align: center;
}
.progressbardown{
	display: flex;
	justify-content: space-evenly;
}
.progressbardown >text{
	flex: 1;
	text-align: center;
}
.textsoncon{
	margin: 10px;
	padding-bottom:50px ;
}
</style>
