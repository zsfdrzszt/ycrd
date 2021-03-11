<template>
	<view class="all">
		<view class="rdhjydet_ti">人代会期间提出的意见建议</view>
		<resum2 :type="1" :lrtitle='"提出时间"' :value='presentime' @datechange="datechange"></resum2>
		<resum2 :type="2" :lrtitle='"标题"' :value='title' :placetext='"请输入标题"' @textchange="titlechange"></resum2>
		<resum1 :type="1" :uptitle='"意见建议分类 (请下拉选择 必选)"' :list='sellist' @selconfirm='selconfirm' :placetext='"请选择"' :value="seltext"></resum1>
		<resum1 :type="2" :uptitle='"意见建议内容"' :placetext='"请输入意见建议内容"' :value="textareaval" @textchange="contentchange"></resum1>
		<resum2 :type="2" :lrtitle='"承办单位"' :value='bank' :placetext='"请输入承办单位"' @textchange="bankchange"></resum2>
		<resum1 :type="2" :uptitle='"办理答复情况"' :placetext='"请输入办理答复情况"' :value="reply" @textchange="replychange"></resum1>
		<resum1 :type="3" :uptitle='"满意度"'  :list='radioList' :value="satisfy" @radchange="radchange"></resum1>
		<view class="upload">
			<view class="pics"><view>图片</view><view  class="number">{{img_number}}/9</view></view>
			<u-upload ref="uUpload" :action="action" :auto-upload="false" max-count="9" @on-choose-complete="uplodesuccess" @on-remove='onremove'></u-upload>
		</view>
	</view>
</template>

<script>
	import resum1 from "../../../components/resum/resum1.vue"	//上下型  type==1-下拉选择  type==2-多行文本  type==3-单选  type==4-文字展示
	import resum2 from "../../../components/resum/resum2.vue"	//左右型   type==1-时间  type==2-input  type==3-文字展示
	import resum3 from "../../../components/resum/resum3.vue"	//上左右型   type==1-单选   type==2-下拉  type==3-文字展示
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				img_number:0,
				action: 'http://www.example.com/upload',
				satisfy:'',		//满意度
				reply:'',	//办理答复
				bank:'',	//承办单位
				textareaval:'',	//建议内容
				presentime:currentDate, // 时间
				title:'',		//标题
				seltext:'',		//展示下拉框值
				selval:'',		//提交下拉框值
				sellist:[
					{
						value: '1',
						label: '市场监督'
					},
					{
						value: '2',
						label: '其它'
					},
					{
						value: '3',
						label: '财税金融'
					},
					{
						value: '4',
						label: '工信交运'
					},
					{
						value: '5',
						label: '商贸旅游'
					}
				],
				radioList:[
					{
						id:'1',
						name: '满意',
					},
					{
						id:'2',
						name: '基本满意',
					},
					{
						id:'3',
						name: '不满意',
					},
					{
						id:'4',
						name: '办理中',
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
			// 满意度
			radchange(val){
				var srr = this.radioList.filter(p=>p.name==val)
				this.satisfy= srr[0].id
				console.log(this.satisfy)
			},
			// 办理答复
			replychange(val){
				this.reply=val
				console.log(this.reply)
			},
			// 承办单位
			bankchange(val){
				this.bank=val
				console.log(this.bank)
			},
			// 建议内容
			contentchange(val){
				this.textareaval=val
				console.log(this.textareaval)
			},
			// 标题
			titlechange(val){
				this.title=val
				console.log(this.title)
			},
			// 下拉
			selconfirm(value){
				this.seltext = value.label
				this.selval = value.value
				console.log(this.selval)
			},
			// 时间
			datechange(val){
				this.time = val
				console.log(val)
			},
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
			}
		},
		components:{
			resum1,
			resum2,
			resum3
		}
	}
</script>

<style>
	page{
		width: 100%;
		box-sizing: border-box;
		background-image: url(../../../static/create/common_bg.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.all{
		padding-bottom: 20rpx;
	}
	.rdhjydet_ti {
	    margin: 40rpx 0;
	    text-align: center;
	    font-weight: bold;
	    font-size: 36rpx;
	}
	.upload{
		margin: 20rpx;
		background-color: transparent;
		box-shadow: 1px 1px 10px #ccc;
		font-size: 32rpx;
	}
	.pics{
		display: flex;
		line-height: 90rpx;
		padding: 0 20rpx;
		justify-content: space-between;
		align-items: center;
	}
	.number{
		text-align: right;
		line-height: 90rpx;
		padding: 0 10rpx;
		font-size: 35rpx;
		font-weight: bold;
	}
</style>
