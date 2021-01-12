<template>
	<view class="maincontent">
		<view class="status_bar"></view>
		<view class="contentindex">
			<image src="../../static/contact/county_common_connection_title.png"style="width: 100%; margin-bottom: 5px;"  mode="widthFix">
			</image>
			<wsearch @changenav="changenav" @searchusers="searchusers" placeholder="请输入代表姓名"></wsearch>
			<view class="probuttoncont">
				<view v-show="warterfall" class="wcontent">
					<wcontacts class="wcontacts" :context="item.name" v-for="(item, index) in flowList" ></wcontacts>
				</view>
				<view v-show="!warterfall" class="searchlist" >
					{{massage}}
					<wuserlist v-for=" (item,index) in userlist " :key="index" :value="item" > </wuserlist>
				</view>
			</view>
		</view>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wnavall from "../../components/w-navall/w-navall.vue"
	import wsearch from "../../components/w-search/w-search"
	import wcontacts from "../../components/w-contacts/w-contacts"
	import wuserlist from "../../components/w-userlist/w-userlist.vue"
	export default {
		components: {
			wnavall,
			wsearch,
			wcontacts,
			wuserlist
		},
		data() {
			return {
				massage: "",
				loadStatus: 'loadmore',
				flowList: [],
				list: [{
					name: "郭家堡乡"
				}, {
					name: "乌金山镇"
				}, {
					name: "张庆乡"
				}, {
					name: "修文镇"
				}, {
					name: "东阳镇"
				}, {
					name: "长凝镇"
				}, {
					name: "庄子乡"
				}, {
					name: "东赵乡"
				}, {
					name: "什贴镇"
				}, {
					name: "使赵社服中心"
				}, {
					name: "晋华街道"
				}, {
					name: "经纬街道"
				}, {
					name: "锦纶街道"
				}, {
					name: "北关街道"
				}, {
					name: "新建街道"
				}, {
					name: "安宁街道"
				}, {
					name: "西南街道"
				}, {
					name: "路西街道"
				}],
				warterfall: true,
				userlist: [],
				userslist: [{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东乡镇"
				}, {
					name: "李四",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"县，区代表",
					job:"山西省有限责任公司",
					space:"东乡镇"
				}, {
					name: "王五",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"城，镇，区代表",
					job:"山西省有限责任公司",
					space:"东乡镇"
				},{
					name: "张三",
					url: "https://qiniu.jza2c.com/uploads/20200515/FgXTZ-_5sUQgwzLykuJ3A_BWU1aY.png",
					classspace:"区代表",
					job:"山西省有限责任公司",
					space:"东乡镇"
				}]
			}
		},
		onLoad() {
			this.addRandomData();
		},
		onReachBottom() {
			// this.loadStatus = 'loading';
			// // 模拟数据加载
			// setTimeout(() => {
			// 	this.addRandomData();
			// 	this.loadStatus = 'loadmore';
			// }, 1000)
		},
		methods: {
			addRandomData() {
				let num = this.list.length
				// console.log(num)
				for (let i = 0; i < num; i++) {
					let item = JSON.parse(JSON.stringify(this.list[i]))
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			changenav() {
				this.warterfall = !this.warterfall
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
		}
	}
</script>

<style>
	page {
		height: 100%;
		background-image: url(../../static/contact/county_common_connection_bg.png) ;
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
	} 
	.maincontent {
		width: 100%;
		height: 100%;
		
	}

	.contentindex {
		width: 100%;
		height: 100%;
	}

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
	.probuttoncont{
		width: 100%;
		flex: 1;
		}
	.wcontent{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 100%;
	}
	.wcontacts{
		width: 40%;
	}
</style>
