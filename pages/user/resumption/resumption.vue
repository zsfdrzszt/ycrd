<template>
	<view class="all">
		<view class="status_bar"></view>
		<view class="rdhjydet_ti">闭会期间履职档案</view>
		<resum2 :type="2" :lrtitle='"标题"' :value='titleval' :placetext='"请输入标题"' @textchange="titlechange"></resum2>
		<resum1 :type="2" :uptitle='"工作情况"' :placetext='"请输入工作情况"' :value="contentval" @textchange="contentchange"></resum1>
		<resum2 :type="2" :lrtitle='"地点"' :value='positionval' :placetext='"请输入地点"' @textchange="positionchange"></resum2>
		<resum2 :type="1" :lrtitle='"时间"' :value='time' @datechange="datechange"></resum2>
		<resum1 :type="3" :uptitle='"紧急程度"'  :list='radioList' :value="degreeval" @radchange="degreechange"></resum1>
		<view class="upload">
			<view class="pics"><view>图片</view><view  class="number">{{img_number}}/9</view></view>
			<u-upload ref="uUpload" :action="action" :auto-upload="false" max-count="9" @on-choose-complete="uplodesuccess" @on-remove='onremove'></u-upload>
		</view>
		<resum1 :type="2" :uptitle='"成效"' :placetext='"请输入成效"' :value="effectval" @textchange="effectchange"></resum1>
		<resum1 :type="2" :uptitle='"驳回意见"' :placetext='"如需驳回,请在此输入驳回理由"' :value="rejectval" @textchange="rejectchange"></resum1>
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
				rejectval:'',		// 驳回意见
				effectval:'',		// 成效
				degreeval:'',		// 紧急程度
				contentval:'',		// 工作情况
				titleval:'',		// 标题
				positionval:'',		// 地点
				time:currentDate,	// 时间
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
			// 驳回意见
			rejectchange(val){
				this.rejectval=val
				console.log(this.rejectval)
			},
			// 成效
			effectchange(val){
				this.effectval=val
				console.log(this.effectval)
			},
			// 紧急程度
			degreechange(val){
				var srr = this.radioList.filter(p=>p.name==val)
				this.degreeval= srr[0].id
				console.log(this.degreeval)
			},
			// 地点
			positionchange(val){
				this.positionval=val
				console.log(this.positionval)
			},
			// 工作情况
			contentchange(val){
				this.contentval=val
				console.log(this.contentval)
			},
			// 标题
			titlechange(val){
				this.titleval=val
				console.log(this.titleval)
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
