<template>
	<view class="form">
		<view class="status_bar"></view>
		<image src="../../../static/object/county_common_classTakeMember_top.jpg" mode="widthFix" style="width: 100%;"></image>
		<scroll-view class="scroll-view" scroll-y="true" >
		    <organization :list="item" v-for="(item,index) in list"></organization>
		</scroll-view>
	</view>
	
</template>

<script>
	import organization  from "../../../components/organization/organization.vue"  
	export default {
		components:{
			organization
		},
		data() {
			return {
				list:[{url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",name:"氨基酸",next:[{url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",name:"氨基酸",},{url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",name:"氨基酸",},{url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",name:"氨基酸",}]},
				{url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",name:"氨基酸",next:[{url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",name:"氨基酸",},{url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",name:"氨基酸",},{url:"http://qiniu.jza2c.com/uploads/20190727/Fkw9oHU_XEOwLnFM5-41s8zFj5RG.jpg",name:"氨基酸",}]}]
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
