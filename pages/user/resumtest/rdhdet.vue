<template>
	<view>
		<view class="status_bar"></view>
		<resum1 :type="1" :uptitle='"会议名称 (请下拉选择 必选)"' :list='sellist' @selconfirm='selconfirm' :placetext='"请选择"' :value="seltext"></resum1>
		<resum1 :type="2" :uptitle='"办理答复情况"' :placetext='"请选择"' :value="textareaval" @textchange="textchange"></resum1>
		<resum1 :type="3" :uptitle='"紧急程度"'  :list='radioList' :value="radioval" @radchange="radchange"></resum1>
		<resum1 :type="4" :uptitle='"工作情况"' :value="value"></resum1>
		
		<resum2 :type="1" :lrtitle='"开始时间"' :value='time' @datechange="datechange"></resum2>
		<resum2 :type="2" :lrtitle='"承办单位"' :value='textval' :placetext='"请输入承办单位"' @textchange="bankchange"></resum2>
		<resum2 :type="3" :lrtitle='"承办单位"' :value='showval' ></resum2>
		
		<resum3 :type="1" :uptitle='"参加全体会议情况"' :downtitle='"是否参加全体会议"' :list='radioList' :value='radioval' @radchange="radchange"></resum3>
		<resum3 :type="2" :uptitle='"分团审议发言情况"' :downtitle='"发言次数"' :list='sellist' :value='seltext' :placetext='"请选择"'  @selconfirm='selconfirm'></resum3>
		<resum3 :type="3" :uptitle='"分团审议发言情况"' :downtitle='"发言次数"' :value='showval' ></resum3>
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
				// 展示
				showval:'东赵乡人大主席团',
				// 文本：
				textval:'',
				// 时间
				time:currentDate,
				// 下拉
				sellist: [{
						value: '1',
						label: '2020年5月29日东赵乡第十七届人民代表大会第七次会议'
					},
					{
						value: '2',
						label: '2020年5月29日东赵乡第十七届人民代表大会第七次会议'
					}
				],
				seltext:'',
				selval:'',
				// textarea
				textareaval:'',
				// 单选
				radioList: [
					{
						id:'1',
						name: '鲜甜',
						disabled: false
					},
					{
						id:'2',
						name: '麻辣',
						disabled: false
					}
				],
				radioval: '',
				// 文本
				value:'按照区乡党委政府人大的安排部署从防控疫情摸排，严查外省入晋人员，特别是高闪区回来，学生放假，外省打工人员，测健康码，和行程码，去作核酸检测等，保护人民身体健康。'
			}
		},
		methods: {
			// 文本
			bankchange(val){
				this.textval=val
				console.log(this.textval)
			},
			// 下拉
			selconfirm(value){
				this.seltext = value.label
				this.selval = value.value
				console.log(this.selval)
			},
			// 多行文本
			textchange(val){
				this.textareaval=val
				console.log(this.textareaval)
			},
			// 单选
			radchange(val){
				var srr = this.radioList.filter(p=>p.name==val)
				this.radioval= srr[0].id
				console.log(this.radioval)
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
		height: 100%;
		box-sizing: border-box;
		background-image: url(../../../static/create/common_bg.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
