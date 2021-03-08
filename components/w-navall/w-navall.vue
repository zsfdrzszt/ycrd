<template>
	<!-- //菜单 -->
	<view class="navmenus" >
	    <view  :style="{height: navHeight }" class="navmenuheight">
			<view class="navmenu" @click="topages(0)">首页</view>
			<view class="navmenu" @click="topages(1)">个人中心</view>
			<view class="navmenu" @click="topage">名词解释</view>
			<view class="navmenu"@click="topages(-1)">返回上页</view>
		</view>
		<view class="navmenu navmenubottom" @click="navshow">菜单</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navstate : false,
				navHeight: 0,
				num :0,
				url:["/pages/index/index","/pages/user/userindex/userindex"]
			};
		},
		methods:{
			topage(){
				uni.navigateTo({
					url:"/pages/nextpages/explain/explain"
				})
			},
			topages(val){
				this.navstate =false
			if(val<0){
				uni.navigateBack({
					delta: 1
				})
			}else if(val ==0){
				uni.navigateTo({
					url:this.url[val]
				})
			}else if(val == 1){
				uni.navigateTo({
					url:this.url[val]
				})
			}
				
			},
			navshow(){
				let num = 0
				if(!this.navstate){
					clearInterval("time")
					let time = setInterval(()=>{
							num +=5
							this.navHeight = num +"px"
							if(num > 300){
								clearInterval(time)
							}
					},10)
				}
				if(this.navstate){
					clearInterval("timeout")
					let timeout = setInterval(()=>{
							num=parseInt(this.navHeight)
							num -=  5
							this.navHeight = num +"px"
							if(num == 0){
								clearInterval(timeout)
							}
					},10)
				}
				this.navstate = !this.navstate
			}
		}
	}
</script>

<style>
	.navmenus{
		position: fixed;
		z-index: 999;
		bottom: 45px;
		right: 10px;
		height: 300px;
	}
	.navmenu{
		width: 60px;
		height: 60px;
		border-radius: 30px;
		background-color: rgba(0,0,0,0.4);
		line-height: 60px;
		text-align: center;
		font-size: 14px;
		color: white;
	}
	.navmenuheight{
		overflow: hidden;
	}
	.navmenubottom{
		position: absolute;
		left: 0;
		bottom: 0;
	}
</style>
