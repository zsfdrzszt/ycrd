<template>
	<view class="all">
		<view class="status_bar"></view>
		<view class="rdhjydet_ti">人代会期间参会情况</view>
		<resum1 :type="1" :uptitle='"会议名称 (请下拉选择 必选)"' :list='meetlist' @selconfirm='meetconfirm' :placetext='"请选择"' :value="meettext"></resum1>
		<resum2 :type="1" :lrtitle='"开始时间"' :value='starttime' @datechange="startchange"></resum2>
		<resum2 :type="1" :lrtitle='"结束时间"' :value='endtime' @datechange="endchange"></resum2>
		<resum3 :type="1" :uptitle='"参加全体会议情况"' :downtitle='"是否参加全体会议"' :list='radioList' :value='wholeval' @radchange="wholechange"></resum3>
		<resum3 :type="2" :uptitle='"分团审议发言情况"' :downtitle='"发言次数"' :list='speaklist' :value='speaktext' :placetext='"请选择"'  @selconfirm='speakconfirm'></resum3>
		<resum3 :type="1" :uptitle='"投票表决情况"' :downtitle='"是否投票表决"' :list='radioList' :value='voteval' @radchange="votechange"></resum3>
		<resum3 :type="2" :uptitle='"提出建议意见情况"' :downtitle='"提出条数"' :list='sugglist' :value='suggtext' :placetext='"请选择"'  @selconfirm='suggconfirm'></resum3>
		<resum3 :type="2" :uptitle='"参会考勤情况"' :downtitle='"全勤/请假天数"' :list='attendlist' :value='attendtext' :placetext='"请选择"'  @selconfirm='attendconfirm'></resum3>
		<view class="btns">
			<u-button size="medium" :ripple="true" :custom-style="customStyle">上一步</u-button>
			<u-button size="medium" :ripple="true" :custom-style="customStyle">提交</u-button>
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
				customStyle: {
					backgroundColor: '#ce1717',
					borderRadius:'100rpx',
					color:'#fff'
				},
				attendval:'',		//考勤情况提交值
				attendtext:'',		//考勤情况展示值
				suggval:'',		//建议意见情况提交值
				suggtext:'',		//建议意见情况展示值
				voteval:'',		//表决情况
				speakval:'',		//发言情况提交值
				speaktext:'',		//发言情况展示值
				wholeval: '',			//全体会议情况
				// 单选
				radioList: [
					{
						id:'1',
						name: '是',
					},
					{
						id:'2',
						name: '否',
					}
				],
				endtime:currentDate,	//开始时间
				starttime:currentDate,	//结束时间
				// 会议下拉
				meettext:'',
				meetval:'',
				meetlist: [{
						value: '1',
						label: '2020年5月29日东赵乡第十七届人民代表大会第七次会议'
					},
					{
						value: '2',
						label: '2020年5月29日东赵乡第十七届人民代表大会第七次会议'
					}
				],
				speaklist:[
					{
						value: '0',
						label: '0次'
					},
					{
						value: '1',
						label: '1次'
					}
				],
				sugglist:[
					{
						value: '0',
						label: '0条'
					},
					{
						value: '1',
						label: '1条'
					}
				],
				attendlist:[
					{
						value: '0',
						label: '全勤'
					},
					{
						value: '1',
						label: '请假一天'
					},
					{
						value: '2',
						label: '请假两天'
					},
					{
						value: '3',
						label: '请假三天'
					}
				],
			}
		},
		methods: {
			// 考勤
			attendconfirm(value){
				this.attendtext = value.label
				this.attendval = value.value
				console.log(this.attendval)
			},
			// 建议情况
			suggconfirm(value){
				this.suggtext = value.label
				this.suggval = value.value
				console.log(this.suggval)
			},
			// 表决情况
			votechange(val){
				var srr = this.radioList.filter(p=>p.name==val)
				this.voteval= srr[0].id
				console.log(this.voteval)
			},
			// 发言情况
			speakconfirm(value){
				this.speaktext = value.label
				this.speakval = value.value
				console.log(this.speakval)
			},
			//全体会议情况
			wholechange(val){
				var srr = this.radioList.filter(p=>p.name==val)
				this.wholeval= srr[0].id
				console.log(this.wholeval)
			},
			// 会议
			meetconfirm(value){
				this.meettext = value.label
				this.meetval = value.value
				console.log(this.meetval)
			},
			// 开始时间
			startchange(val){
				this.starttime = val
				console.log(val)
			},
			// 结束时间
			endchange(val){
				this.endtime = val
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
	.btns{
		display: flex;
		justify-content: space-around;
		padding-top: 30rpx;
	}
</style>
