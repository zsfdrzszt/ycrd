<template>
	<view class="userindex">
		<view class="index_top">
			<image :src="userlist.img" mode="widthFix"></image>
			<view class="user_name">
				{{userlist.name}}
			</view>
		</view>
		<view class="ad_space">
			<image :src="adimg" mode="widthFix"></image>
		</view>
		<scroll-view class="user_scroll" scroll-y="true" >
			<view v-for="(item,index) in titlelist" class="user_list" :class="{list_imgboxs:(index+1)%2 ==0,list_imgboxss:(index+1)%3 ==0}">
				<view class="userlist_title">
					{{item.title}}
				</view>
				<view class="userlist" >
					<view class="list_box"  v-for="(items,index) in item.content" @click="topage(items.url)">
						<view class="list_imgbox" >
							<image class="list_img" :src="items.icone" mode="widthFix"></image>
						</view>
						<view class="list_imgtit">
							{{items.name}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
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
			   userlist:{img:'https://thirdwx.qlogo.cn/mmopen/vi_32/0K9JHnppgBZNrSiblnKdjn3ia9NibrSDvvpmSOzmr88mNNN0uw3I5pianBudSyVUEdTvibYib4B1K8PD8MLW8jxakYaQ/132',name:"南北",},
			   titlelist:[{title:"个人",content:[{name:"个人资料",icone:"/static/user/grzl.png",url:"/pages/user/user_personal/user_personal"},{name:"通讯录",icone:"/static/user/txl.png",url:"/pages/user/user_delegation/user_delegation_list"},{name:"全区统计",icone:"/static/user/qqtj.png",url:"/pages/uploading/uploading"}]},
			   {title:"联络站",content:[{name:"我的联络站",icone:"/static/user/grzl.png",url:"/pages/liaison/index"},{name:"联络站履职",icone:"/static/user/txl.png",url:"/pages/ligature/prolist/prolist"},{name:"数据统计",icone:"/static/user/qqtj.png",url:"/pages/uploading/uploading"}]},
			   {title:"双联系",content:[{name:"联系常委",icone:"/static/user/grzl.png",url:"/pages/user/recommend/recommend"},{name:"我的留言",icone:"/static/user/txl.png",url:"/pages/user/myMessages/myMessages"},{name:"我的回复",icone:"/static/user/qqtj.png",url:"/pages/user/myMessage/myMessage"}]},
			   {title:"履职",content:[{name:"履职档案",icone:"/static/user/grzl.png",url:"/pages/user/duty/duty"},{name:"履职共享",icone:"/static/user/txl.png",url:"/pages/user/share/share"},{name:"履职排名",icone:"/static/user/qqtj.png",url:"/pages/user/userall/userall"}]},
			   {title:"审批",content:[{name:"群众留言",icone:"/static/user/grzl.png",url:"/pages/user/examine/examine"},{name:"代表回复",icone:"/static/user/txl.png",url:"/pages/user/people/people"},{name:"履职",icone:"/static/user/qqtj.png",url:"/pages/user/duties/duties"}]},
			   {title:"其他",content:[{name:"名次解释",icone:"/static/user/grzl.png",url:"/pages/nextpages/explain/explain"},{name:"意见反馈",icone:"/static/user/txl.png",url:"/pages/user/feedback/feedback"},{name:"关于我们",icone:"/static/user/qqtj.png",url:"/pages/user/about/about"},{name:"版本更新",icone:"/static/user/qqtj.png",url:"/pages/user/edition/edition"}]}
			   ],
			   adimg:"/static/user/adimg.png"
			}
		},
		methods: {
			topage(val){
				uni.navigateTo({
					url:val
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
	background: url(../../../static/user/download.png) no-repeat;
	background-size: contain;
    overflow: hidden;
	display: flex;
    flex-direction: column;
	position: relative;
}
.index_top{
	height: 130px;
	display: flex;
	/* align-items: center; */
	width: 90%;
	margin: 0 auto;
	padding: 30px 15px 15px;
	border-radius: 10px;
	background-color: white;
	margin-top: 17%;
}
.index_top image{
	width: 70px;
}
.user_name{
	font-size: 20px;
	font-weight: bold;
	padding-left: 20rpx;
}
.ad_space{
	width: 100%;
}
.ad_space image{
	display: block;
	width: 90%;
	margin: 0 auto;
}
.user_scroll{
	flex: 1;
	overflow: hidden;
	margin-bottom: 20rpx;
}
.userlist_title{
	    font-size: 18px;
	    border-left: 4px solid #d01a0c;
	    padding-left: 10px;
	    margin-top: 15px;
}
.user_list{
	width: 90%;
	margin:  0 auto;
}
.userlist{
	    display: flex;
	    align-items: center;
	    flex-wrap: wrap;
	    border-bottom: 1px solid #CCCCCC;
}
.list_box{
	/* margin: 20rpx 30rpx 20rpx 20rpx; */
	width: 25%;
	margin: 20px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.list_imgbox{
	width: 50px;
	height: 50px;
	background-color: red;
	margin: 0 auto;
	border-radius: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.list_img{
      width: 23px;
}
.list_imgtit{
	margin-top: 5px;
	font-size: 14px;
	color: #000000;
}
.list_imgboxs .list_imgbox{
	background-color: rgb(250, 199, 20);
}
.list_imgboxss .list_imgbox{
	background-color:rgb(45, 151, 251);
}
</style>
