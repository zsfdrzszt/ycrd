<template>
	<view class="form">
		<view class="status_bar"></view>
		<image src="../../../static/object/county_common_classTakeMember_top.jpg" mode="widthFix" style="width: 100%;"></image>
		<scroll-view class="scroll-view" scroll-y="true" >
		    <organization :list="item" v-for="(item,index) in list"></organization>
		</scroll-view>
		<wnavall></wnavall>
	</view>
	
</template>

<script>
	import organization  from "../../../components/organization/organization.vue" 
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default {
		components:{
			organization,
			wnavall
		},
		data() {
			return {
				list:[{url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",name:"李鹏飞",
				next:[{url:"http://qiniu.jza2c.com/uploads/20200317/Ftydof5N_vQ8_ADuLq5CRraQZWE3.png",name:"张爱茂",},
					{url:"http://qiniu.jza2c.com/uploads/20190727/Fr_DhCtKGmHAsQYFeXL_LPdTbe98.jpg",name:"杨文华",},
					{url:"http://qiniu.jza2c.com/uploads/20190727/Fh2AXYHJM7SUT9VcTWMKiyrxq4dV.jpg",name:"庞 煜",}]},
				{url:"http://qiniu.jza2c.com/uploads/20190727/FiEh0Z1x_YLq6WpN1fchOxH3zNtN.jpg",name:"武跃勇",
				next:[{url:"http://qiniu.jza2c.com/uploads/20190727/FhyxLLLN6J1lJBaNC9fzijvBpYkB.jpg",name:"张岐明",},
				{url:"http://qiniu.jza2c.com/uploads/20190727/FiB6bhxRcZH241CUAUk03PhDmPMI.jpg",name:"王秀娥",},
				{url:"http://qiniu.jza2c.com/uploads/20190727/FjAwLKCTQ8iNIIZdq5X4bt_kV04U.jpg",name:"侯粉叶",}]}]
			}
		},
		methods: {

			
		}
	}
</script>

<style>
page {
	height: 100%;
	width: 100%;
}
.form{
	width: 100%;
	height: 100%;
}
.scroll-view{
	height: 80%;
}
</style>
