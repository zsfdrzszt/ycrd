<template>
	<view class="userindex">
		<view class="">
			<image :src="userlist.img" mode="widthFix"></image>
			<view class="">
				{{userlist.name}}
			</view>
		</view>
		<scroll-view scroll-y="true" >
			<view v-for="(item,index) in titlelist">
				<view class="">
					{{item.title}}
				</view>
				<view class="">
					<view class="" v-for="(items,index) in item.content" @click="topage(items.url)">
						<image src="items.icone" mode="widthFix"></image>
						<view class="__bdi">
							{{items.name}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			   userlist:{img:'',name:"",},
			   titlelist:[{title:"个人",content:[{name:"个人资料",icone:"",url:""}]}]
			}
		},
		methods: {
			topage(val){
				uni.navigateTo({
					url:"val"
				})
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
	}
.userindex{
	width: 100%;
	height: 100%;
}
</style>
