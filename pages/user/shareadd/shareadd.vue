<template>
	<!-- 个人中心/履职共享页添加页 -->
	<view class="shareadd">
		<view class="status_bar"></view>
		<wnavall></wnavall>
		<!-- 标题 -->
		<resum2 :type="2" :lrtitle='"标题"' :value='title' :placetext='"请输入标题"' @textchange="titlechange"></resum2>
		<!-- 工作情况 -->
		<resum1 :type="2" :uptitle='"工作情况"' :placetext='"请输入工作情况"' :value="textareaval" @textchange="contentchange"></resum1>
		<!-- 地址 -->
		<resum2 :type="2" :lrtitle='"地址"' :value='site' :placetext='"请输入地址"' @textchange="sitechange"></resum2>
		<!-- 时间 -->
		<resum2 :type="1" :lrtitle='"时间"' :value='presentime' @datechange="datechange"></resum2>
		<!-- 紧急程度 -->
		<resum1 :type="3" :uptitle='"紧急程度"'  :list='radioList' :value="satisfy" @radchange="radchange"></resum1>
		<!-- 履职方式 -->
		<view class="shareaddu_item shareaddu_item1" >履职方式</view>
		<view class="shareaddu_item shareaddu_item2">
			<view class="uni-list">
			    <radio-group @change="radioChange">
			        <label class="shareadd_label" v-for="(item, index) in items" :key="item.value" :class="{radioborder:current==index}">
						<view>
							<radio :value="item.value" :checked="index === current" class="shareadd_input"/>
						</view>
						<view>{{item.name}}</view>
			        </label>
			    </radio-group>
			</view>
		</view>
		<!-- 上传图片 -->
		<view class="upload">
			<view class="number">{{img_number}}/9</view>
			<u-upload ref="uUpload" :action="action" :auto-upload="false" max-count="9" @on-choose-complete="uplodesuccess" @on-remove='onremove'></u-upload>
		</view>
		<!-- 添加 -->
		<view class="submit_btn">
			  <button type="default" @click="" class="submit_btn1">添加</button>
		</view>
	</view>
</template>

<script>
	import wnavall from "@/components/w-navall/w-navall.vue"
	import resum1 from "../../../components/resum/resum1.vue"	//上下型 
	import resum2 from "../../../components/resum/resum2.vue" //左右型
	export default {
		components:{
			wnavall,
			resum1,
			resum2,
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				img_number:0,//上传图片
				action: 'http://www.example.com/upload',//上传图片接口
				title:'',		//标题
				textareaval:'',	//建议内容
				site:'', //地址
				presentime:currentDate, // 时间
				satisfy:'',		//紧急程度
				radioList:[
					{
						id:'1',
						name: '正常',
					},
					{
						id:'2',
						name: '紧急',
					},
					{
						id:'3',
						name: '非常紧急',
					}
				],
				way:'',
				current: 2,
				items: [{
							value: '1',
							name: '学习培训教育'
						},
						{
							value: '2',
							name: '工作评议',
							checked: 'true'
						},
						{
							value: '3',
							name: '宣讲、联系、走访'
						},
						{
							value: '4',
							name: '为民服务'
						},
						{
							value: '5',
							name: '接待选民'
						},
						{
							value: '6',
							name: '奖励表彰'
						},
						{
							value: '7',
							name: '接受监督(向选民报告)'
						},
						{
							value: '8',
							name: '调研、视察、执法检查、会议'
						}
				    ]
			}
		},
		 methods: {
			 // 图片上传成功时回调
			 uplodesuccess(res, index, lists, name){
			 	this.img_number = res.length
			 },
			 // 删除图片时的回调on-remove
			 onremove(index, lists, name){
			 	this.img_number = lists.length
			 },
			 // 日期
				getDate(type) {
					const date = new Date();
					let year = date.getFullYear();
					let month = date.getMonth() + 1;
					let day = date.getDate();
				 
					if (type === 'start') {
						year = year - 60;
					} else if (type === 'end') {
						year = year + 2;
					}
					month = month > 9 ? month : '0' + month;;
					day = day > 9 ? day : '0' + day;
					return `${year}-${month}-${day}`;
				 },
				 // 履职方式
		        radioChange: function(evt) {
		            for (let i = 0; i < this.items.length; i++) {
		                if (this.items[i].value === evt.target.value) {
		                    this.current = i;
		                    break;
		                }
		            }
					this.way=evt.detail.value;
					console.log(this.way)
		        },
				// 标题
				titlechange(val){
					this.title=val
					console.log(this.title)
				},
				// 建议内容
				contentchange(val){
					this.textareaval=val
					console.log(this.textareaval)
				},
				// 地址
				sitechange(val){
					this.site=val
					console.log(this.site)
				},
				// 时间
				datechange(val){
					this.time = val
					console.log(val)
				},
				// 紧急程度
				radchange(val){
					var srr = this.radioList.filter(p=>p.name==val)
					this.satisfy= srr[0].id
					console.log(this.satisfy)
				},
		    }
	}
</script>

<style scoped>
	page{width: 100%;box-sizing: border-box;background-image: url('../../../static/create/common_bg.jpg');background-size: 100% 100%;background-repeat: no-repeat;background-attachment: fixed;}
	.shareadd{width: 100%;}
	.shareaddu_item1{background-color: transparent;box-shadow: 1px 1px 10px #ccc;line-height: 44px;padding: 0 5px;font-size: 16px;color: #000000;margin: 11px;}
	.shareaddu_item{margin-bottom: 10px;}
	.shareadd_label {border: 1px solid #CCC;color: #666;padding: 2px 10px 2px 5px;line-height: 28px;min-width: 95%;text-align: center;float: left;margin: 2px;border-radius: 4px;display: flex;justify-content: center;align-items: center;}
	.uni-radio-input-checked{background: url('/static/user/user_share_add.png') no-repeat right bottom;border: 1px solid red;background-size: 21px 21px;color: red;}
	.shareadd_input {display: none;}
	.radioborder{border: 1px solid red!important;background-image:url(../../../static/user/shareadd_ico_checkon.png);background-size: 21px 21px;color: red;background-repeat: no-repeat;background-position: right bottom; }
	.timetitle{font-size: 16px;}
	.uni-list{margin:0px 10px;}
	.shareaddu_item2{display: flex;}
	/* 上传图片 */
	.upload{margin: 20rpx;background-color: transparent;box-shadow: 1px 1px 10px #ccc;font-size: 32rpx;}
	.number{text-align: right;line-height: 90rpx;padding: 0 10rpx;font-size: 35rpx;font-weight: bold;}
	.submit_btn{padding: 20px 0;}
	.submit_btn1{background-color: #ce1717;height: 38px;line-height: 38px;color: #fff;font-size: 14px;width: 64px;}
</style>
