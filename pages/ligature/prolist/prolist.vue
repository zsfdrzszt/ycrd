<template>
		<view class="maincontent">
			<view class="status_bar"></view>
			<view class="contentindex">
				<image src="@/static/contact/county_common_connection_title.png"style="width: 100%; margin-bottom: 5px;"  mode="widthFix">
				</image>
				<wsearch @changenav="changenav" @searchusers="searchusers" placeholder="请输入代表姓名"></wsearch>
				<view class="probuttoncont">
					<view  class="searchlist" >
						{{massage}}
						<wuserlist v-for=" (item,index) in userlist " :key="index" :value="item" > </wuserlist>
					</view>
				</view>
			</view>
			<wnavall></wnavall>
		</view>
</template>

<script>
	import wnavall from "@/components/w-navall/w-navall.vue"
	import wsearch from "@/components/w-search/w-search"
	import wcontacts from "@/components/w-contacts/w-contacts"
	import wuserlist from "@/components/w-userlist/w-userlist.vue"
	export default {
		components: {
			wnavall,
			wsearch,
			wcontacts,
			wuserlist
		},
		data() {
			return {
				userlist:[],
				userslist: [{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"新建街道"
				}, {
					name: "李四",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"县，区代表",
					job:"山西省有限责任公司",
					space:"新建街道"
				}, {
					name: "王五",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"城，镇，区代表",
					job:"山西省有限责任公司",
					space:"新建街道"
				},{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"郭家堡乡"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"郭家堡乡"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"乌金山镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"乌金山镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"乌金山镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"乌金山镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"张庆乡"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"张庆乡"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"修文镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"修文镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"修文镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"修文镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"修文镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东阳镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东阳镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东阳镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东阳镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东阳镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东阳镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东阳镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东阳镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东阳镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"长凝镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"西南街道"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"庄子乡"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"路西街道"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"路西街道"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"路西街道"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"西南街道"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"安宁街道"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"北关街道"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"锦纶街道"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"经纬街道"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"晋华街道"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"使赵社服中心"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"什贴镇"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东赵乡"
				},
				{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东赵乡"
				}],
				massage:""
			}
		},
		methods: {
			changenav() {
				if(this.userlist.length == 0){
					this.massage ="请输入内容"
				}else{
					this.massage = ""
				}
				this.userlist=[]
			},
			searchusers(val){
				this.userlist=[]
				if(val){
					this.massage =""
					this.userslist.filter((item)=>{
						if(item.name.match(val)){
					       this.userlist.push(item)
						}
					})
				}else{
					this.massage = "请输入内容"
				}
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			this.userslist.filter((item)=>{
				if(item.space  == option.space){
					this.userlist.push(item)
				}
			})
		}
	}
</script>

<style>
.searchlist {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 10px;
		line-height: 40px;
		background-color: #f6f8fa;
		border-radius: 10px;
		text-align: center;
	}
</style>
