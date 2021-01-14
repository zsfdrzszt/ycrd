<template>
	<view>
		<zqrservice v-for="(item,index) in liaisonList" :key="index" :value="item"></zqrservice>
	</view>
</template>

<script>
	import zqrservice from "../../../components/z-qrservice/z-qrservice.vue"
	export default {
		components: {
			zqrservice
		},
		data() {
			return {
				liaisonList:[],
				liaisonLists:[{
					liaison_id:"1",
					url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",
					name:"李鹏飞人大代表",
					thedont:"晋中市第四届人大代表、榆次区第十六届人大代表",
					duty:"榆次区人大常委会主任",
					mill:"zqxrdllz@163.com",
					promise:"坚持和完善人民代表大会制度，尽心履职、开拓创新、扎实工作，保证人民当家作主具体地、现实地落实到榆次的政治生活和社会生活之中。"
				},{
					liaison_id:"2",
					url:"http://qiniu.jza2c.com/uploads/20190727/FiEh0Z1x_YLq6WpN1fchOxH3zNtN.jpg",
					name:"武跃勇人大代表",
					thedont:"晋中市第四届人大代表榆次区第十六届人大代表",
					duty:"榆次区人大常委会副主任",
					mill:"ycrd618@163.com",
					promise:"履职尽责，创新担当，服务群众。"
				},{
					liaison_id:"3",
					url:"http://qiniu.jza2c.com/uploads/20190727/Fv9QbXyM7S558IUlNiPTKw4OtiEB.jpg",
					name:"石山爱人大代表",
					thedont:"榆次区第十六届人大代表",
					duty:"榆次区人大常委会副主任、榆次区总工会主席",
					mill:"gjbxrdb@163.com",
					promise:"常下基层、从细调研、善代民言。"
				},{
					liaison_id:"4",
					url:"http://qiniu.jza2c.com/uploads/20190727/Fm83br3hTxnqdMdOD_8S-jfSmpik.jpg",
					name:"李玉忠人大代表",
					thedont:"榆次区第十六届人大代表",
					duty:"榆次区人大常委会副主任、榆次区总工会主席",
					mill:"szsgzxrd@126.com",
					promise:"积极联系选民，为老百姓排忧解难，为群众办实事、做好事。"
				}]
			}
		},
		methods: {
			
		},
		onLoad(option) {
			this.liaisonLists.filter((item)=>{
				// console.log(item.liaison_id)
				if(item.liaison_id == option.id){
					this.liaisonList.push(item)
				}
			})
			// console.log(this.liaisonList)
			// console.log(this.liaisonLists)
		}
	}
</script>

<style>

</style>
