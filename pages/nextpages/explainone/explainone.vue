<template>
	<view class="explain">
		<view class="status_bar">
		</view>
		<view class="explainmain">
			<view class="explainnum">
				{{this.num != {} ? this.num +1 : 0}}/{{list.length}}
			</view>
			<view class="explaincon">
				<view class="explaintitle">
					{{list[this.num]}}
				</view>
				<view class="explaincontent">
					智慧人大平台由“三端两平台构成”，（三端：交流互动手机端、电脑管理PC端、信息展示触控端，两平台：人大常委信息化平台、三级体系信息化平台）。“三端”从多个维度实现对榆次人大常委会信息化平台、三级体系信息化平台的管理与展示。
				</view>
			</view>
			<view class="explainzans">
				<view class="explainzan" @click="changezan">
					<image src="/static/nextpages/common_mingci_zan1.png" mode="widthFix"class="explainimg" style="width: 20%;" v-if="zan"></image>
					<image src="/static/nextpages/common_mingci_zan2.png" mode="widthFix" class="explainimg"  style="width: 20%;" v-if="!zan"></image>
					<text>有用</text>
				</view>
				<view class="explainzan" @click="changelow">
					<image src="/static/nextpages/common_mingci_cont0.png" mode="widthFix" class="explainimg"  style="width: 20%;" v-if="low"></image>
					<image src="/static/nextpages/common_mingci_cont1.png" mode="widthFix" class="explainimg"  style="width: 20%;" v-if="!low"></image>
					<text>有用</text>
				</view>
				<view class="" @click="topage">
					查看全部名词解释&nbsp;>
				</view>
			</view>
		</view>
		<view class="explainnext">
			<image src="/static/nextpages/common_mingci_zuo.png" mode="widthFix" style="width: 30%;margin-right: 20px;" @click="tonext(-1)"></image>
			<image src="/static/nextpages/common_mingci_you.png" mode="widthFix" style="width: 30%;" @click="tonext(1)"></image>	
		</view>
		<u-toast ref="uToast" />
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default {
		components:{
			wnavall
		},
		data() {
			return {
				zan:true,
				low:true,
				list:[],
				num:{},
				content:{}
			}
		},
		methods: {
			tonext(n){
				this.zan = true
				this.low =true
				this.num +=n
				if(this.num == -1){
					this.num =0
					this.$refs.uToast.show({
						title: '前面没有了',
					})
				}
				if(this.num == this.list.length){
					this.num =this.list.length-1 
					this.$refs.uToast.show({
						title: '后面没有了',
					})
				}
			},
			changezan(){
				this.state(this.zan)
				this.zan =false
				this.low =true
				
			},
			changelow(){
				this.state(this.low)
				this.low =false
				this.zan =true
			},
			state(val){
				if(val){
					this.$refs.uToast.show({
						title: '点击成功',
					})
				}else{
					this.$refs.uToast.show({
						title: '点击成功 ,请勿重复点击',
					})
				}
			},
			topage(){
				uni.navigateTo({
					url:"/pages/nextpages/explain/explain"
				})
			}
		},
		onLoad(option) {
			var vallist = this.$store.state.smartlist
			vallist.filter((item,index)=>{
				if(item == option.val){
					this.content = item;
					this.num = index
				}
			})
			this.list = vallist
		}
	}
</script>

<style>
	page{
		height: 100%;
	}
	.explain{
		width: 100%;
		height: 100%;
		background-image: url(@/static/nextpages/common_mingci_bg.jpg);
	}
	.explainnum{
		width: 42px;
		height: 35px;
		line-height: 30px;
		background-color: brown;
		text-align: center;
		color: white;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
		position: absolute;
		top: 0;
		left: 20px;
	}
	.explainmain{
		box-sizing: border-box;
		border-radius: 10px;
		background-color: white;
		display: flex;
		flex-direction: column;
		padding: 15px;
		width: 90%;
		margin: 0 auto ; 
		position: relative;
		top:30px;
		height: 70%;
	}
	.explaincon{
		display: flex;
		flex: 1;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding-top: 15px;
	}
	.explaintitle{
		color: brown;
		font-weight: bold;
		font-size: 24px;
		text-align: center;
		width: 100%;
	}
	.explaincontent{
		font-family: 仿宋;
		font-size: 18px;
		flex: 1;
		color: brown;
		line-height: 35px;
		text-indent: 2em;
		text-align: justify;
		margin-top: 10px;
		height: 80%;
		overflow: auto;
	}
.explainzans{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.explainzan{
	display: flex;
	flex: 1;
}
.explainimg{
	display: block;
}
.explainnext{
	display: flex;
	justify-content: center;
	width: 100%;
	height: 40px;
	margin-top: 60px;
	margin-bottom: 40px;
}
</style>
