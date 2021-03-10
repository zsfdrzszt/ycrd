<template>
	<view class="message_all">
		<view class="status_bar"></view>
		<view class="message_top">
			<image src="../../static/liaison/common_lmessage_back.jpg" mode="widthFix"></image>
		</view>
		<view class="message_center">
			<u-form :model="form" ref="uForm">
				<view class="message_list">
					<text class="xing">*</text>
					<u-form-item label="标题"  class="message_flex">
						<u-input v-model="title" placeholder="请输入标题" />
					</u-form-item>
				</view>
				<view class="message_te">
					<text class="xing">*</text>
					请选择意见类型
				</view>
				<u-form-item prop="radio">
					<u-radio-group v-model="radio" >
						<u-radio  style="width: 40%; margin: 5px 10px 5px 5px;"  v-for="(item, index) in radioList" :key="item.id" :name="item.id">
							{{ item.name }}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<view class="photo">
					<view class="left">
						<text class="xing">*</text>
						<text>内容</text>
					</view>
					<!-- <view class="right">
						<button size="mini" type="warn" class="upload" @click="uploads">上传图片</button>
					</view> -->
				</view>
				<view class="message_img">
					<u-form-item>
						<u-input class="test" v-model="textar" type="textarea" :border='true' :auto-height='true' />
					</u-form-item>
					<u-upload ref="uUpload" :action="action" :auto-upload="false"></u-upload>
					<!-- <u-upload ref="uUpload" :action="action" :auto-upload="true" :file-list="fileList" max-count="9"></u-upload> -->
				</view>
				<view class="message_list">
					<text class="xing">*</text>
					<u-form-item label="姓名" class="message_flex">
						<u-input v-model="name" placeholder="请输入您的姓名" />
					</u-form-item>
				</view>
				<view class="message_list">
					<text class="xing">*</text>
					<view class="idcard">
						身份证号
					</view>
					<u-form-item  class="message_flex">
						<u-input v-model="identity" placeholder="请输入您的身份证号" />
					</u-form-item>
				</view>
				<view class="message_list">
					<text class="xing">*</text>
					<view class="idcard">
						联系电话
					</view>
					<u-form-item class="message_flex">
						<u-input v-model="phone" placeholder="请输入您的联系电话" />
					</u-form-item>
				</view>

				<view class="message_list message_lists">
					<view class="message_yan">
						<view>
							<text class="xing">*</text>
							<text class="idcard">
								验证码
							</text>
						</view>
						<u-form-item class="message_flex">
							<u-input v-model="yanz" placeholder="请输入验证码" />
						</u-form-item>
					</view>
					<view>
						<u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-verification-code>
						<u-button @tap="getCode" size="mini" type="warn">{{tips}}</u-button>
					</view>
				</view>
				<view class="tishi">
					带<text class="xing">*</text>为必填项
				</view>
				<button type="warn" class="submit" shape="circle" @click="submit">提交</button>
			</u-form>
			<u-toast ref="uToast"></u-toast>
		</view>
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
				action:'',
				tips: '',		//验证码按钮文字
				seconds: 60,	//验证码倒计时时间
				title: '',		//标题
				radio: '',		//类型
				textar: '',		//内容
				name: '',		//姓名
				identity: '',	//身份证号
				phone:'',		//联系电话
				yanz:'',		//验证码
				radioList: [{
						id:1,
						name: '科教文卫',
						disabled: false
					},
					{
						id:2,
						name: '社会综合',
						disabled: false
					},
					{
						id:3,
						name: '民族宗教',
						disabled: false
					},
					{
						id:4,
						name: '三农',
						disabled: false
					},
					{
						id:5,
						name: '证法监察',
						disabled: false
					},
					{
						id:6,
						name: '城建环资',
						disabled: false
					},
					{
						id:7,
						name: '社保民政',
						disabled: false
					},
					{
						id:8,
						name: '商贸旅游',
						disabled: false
					},
					{
						id:9,
						name: '公信交运',
						disabled: false
					},
					{
						id:10,
						name: '财税金融',
						disabled: false
					},
					{
						id:11,
						name: '其它',
						disabled: false
					},
					{
						id:12,
						name: '市场监督',
						disabled: false
					}
				],
				action: 'http://www.example.com/upload',
				fileList: [{
					url: '',
				}],
				filesArr: [],
				form: {},
				rules:{
					title:[
						{
							required:true,
							message:'标题不能为空',
							trigger:['change','blur']
						}
					],
					textar:[
						{
							required:true,
							message:'内容不能为空',
							trigger:['change','blur']
						}
					],
					name:[
						{
							required:true,
							message:'姓名不能为空',
							trigger:['change','blur']
						}
					],
					identity:[
						{
							required:true,
							message:'身份证号不能为空',
							trigger:['change','blur']
						}
					],
					phone:[
						{
							required:true,
							message:'手机号不能为空',
							trigger:['change','blur']
						}
					],
					yanz:[
						{
							required:true,
							message:'验证码不能为空',
							trigger:['change','blur']
						}
					],
				},
				switchVal: false,
				uid:'',	//用户id
			};
		},
		onLoad(options) {
			this.uid=options.id			//用户id
			
		},
		methods: {
			// 上传图片
			uploads() {},
			// 获取验证码按钮
			codeChange(text) {
				this.tips = text;
			},
			// 获取验证码
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 向后端请求验证码
					this.$refs.uToast.show({
						title: '发送验证成功',
						type: 'success',
					})
					this.$refs.uCode.start();
				} else {
					// this.$u.toast('倒计时结束后再发送');
				}
			},
			// 倒计时开始
			start() {},
			// 倒计时结束
			end() {},
			// 提交
			submit(){
				if(this.title==''){	
					this.checked('请输入标题')
					return;
				}
				if(this.radio==''){
					this.checked('请选择意见类型')
					return;
				}
				if(this.textar==''){
					this.checked('请输入内容')
					return;
				}
				if(this.name==''){
					this.checked('请输入姓名')
					return;
				}
				if(this.identity==''||!this.IDCard(this.identity)){
					this.checked('请输入正确的身份证号')
					return;
				}
				if(this.phone==''||!this.PhoneNum(this.phone)){
					this.checked('请输入正确的联系电话')
					return;
				}
				var obj = {}
				obj.user_id = this.uid// 用户id
				obj.images='',
				obj.title=this.title
				obj.messcate_ids = this.radio
				obj.question = this.textar
				obj.name = this.name
				obj.idcard=this.identity
				obj.phone=this.phone
				// obj.uid = this.$store.state.userData.id//留言人id
				var time = new Date()
				obj.creatsstime = time.getFullYear()+'-'+((time.getMonth()+1)<10?('0'+(time.getMonth()+1)):(time.getMonth()+1))+'-'+(time.getDate()<10?('0'+time.getDate()):time.getDate())
				// this.api.postMessage.query(obj).then(res => {
				// 	if(res.data.code==1){
						this.$refs.uToast.show({
							title: '留言成功',
							type: 'success', 
							duration:2000
						})
				// 		setTimeout(function(){
				// 			uni.navigateBack({
				// 			    delta: 1
				// 			});
				// 		},2000)
				// 	}
				// })
			},
			checked(text){
				this.$refs.uToast.show({
					title: text,
					type: 'warning', 
					duration:2000
				})
			},
			// 身份证号
			IDCard(value) {
				var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
				regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]] /im;
				if(regEn.test(value) || regCn.test(value)) {
					return false;
				}
				if(value.length==18){
					var arr = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
					var gud=[1,0,'x',9,8,7,6,5,4,3,2];//对应值
					var val = value
					var arr1 = val.split('')
					var num  = 0;
					for(var y=0;y<arr.length;y++){
					 num+=(arr[y]*arr1[y]);
					}
					var num1 = num%11;//2
					var find = gud[num1]
					if(find != val[val.length-1].toLowerCase()){
						return false;
					}else{
						return true
					}
				}else if(value.length>18){
					return false;
				}
			},
			PhoneNum(value) {
				return /^[1][3-9][0-9]{9}$/.test(value);
			}
		},
		onReady() {
			// 设置表单校验规则 否则表单校验无效
			this.$refs.uForm.setRules(this.rules);
		},
	}
</script>

<style lang="scss">
	.message_top {
		width: 100%;
		image {
			width: 100%;
		}
	}
	.message_center {
		padding: 20rpx;
		box-sizing: border-box;

		.message_te {
			margin: 10rpx 0;
		}

		.message_list {
			display: flex;
			align-items: center;
			color: #CCCCCC;
			&.message_lists{
				display: flex;
				justify-content: space-between;
			}
			.message_flex{
				flex: 1;
			}
			.message_yan{
				display: flex;
				align-items: center;
			}
			.idcard {
				color: black;
				margin-right: 10rpx;
			}

			.xing {
				color: red;
				display: inline-block;
				margin-right: 10rpx;
			}
		}

		.photo {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 10rpx 0;

			.left {
				.xing {
					color: red;
					display: inline-block;
					margin-right: 10rpx;
				}
			}
		}

	}
	.tishi{
		margin: 10rpx 0;
	}
	.submit{
		color: white;
		margin: 20rpx 0;
	}
	.xing {
		color: red;
		display: inline-block;
		margin-right: 10rpx;
	}
</style>
