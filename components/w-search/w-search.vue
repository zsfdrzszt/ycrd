<template>
	<view class="search">
		<input type="text" @focus="changeurl" @change="searchuser" @placeholder="请输入代表姓名" v-model= "inputval" />
		<view class=" inputsearch">
		<image :src="imgurl" class="searchimg" @click="changeback"></image>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgurl: "../../static/contact/liasons_common_listpage_search.png",
				state:1,
				inputval:""
			};
		},
		methods: {
			//改变搜索栏图标X 触发父组件两栏的显示与否
			changeurl() {
				if(this.state == 1){
					this.imgurl = "../../static/contact/liasons_common_connection_search.png",
					this.$emit("changenav")
					this.state = 0
				}
			},
			//改变搜索栏图标返回？ 使输入栏为空
			changeback() {
				if(this.state == 0){
					this.imgurl = "../../static/contact/liasons_common_listpage_search.png"
					this.$emit("changenav")
					this.state = 1
				}
				this.inputval =''
			},
			//搜索
			searchuser(){
				let val = this.inputval
				this.$emit("searchusers",val)
				
			}
		}
	}
</script>

<style scoped>
	.search {
		display: flex;
		height: 45px;
		justify-content: center;
	}

	input {
		width: 60%;
		height: 100%;
		border-radius: 3px;
		border: 1px solid #971818;
		line-height: 43px;
		padding-left: 4px;
		box-sizing: border-box;
		border-right: none;
		font-size: 16px;
		letter-spacing: 1px;
		background-color: #FFFFFF;
	}

	.inputsearch {
		width: 45px;
		height: 45px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #971818;
		position: relative;
		left: -2px;

	}

	.searchimg {
		display: block;
		width: 70%;
		height: 70%;
	}
</style>
