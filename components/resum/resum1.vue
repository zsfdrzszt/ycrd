<template>
	<view>
		<!--上下型  type==1-下拉选择  type==2-多行文本  type==3-单选 type==4-文字展示 -->
		<view class="rdhdet_row">
			<view class="rdhdet_title">{{uptitle}}</view>
			<view class="rdhdet_view" v-if="type==1">
				<u-input v-model="value" type="select" @click="selshow=!selshow" :placeholder="placetext" style="text-align: right;" />
				<u-select v-model="selshow" :list="list" @confirm="selconfirm"></u-select>
			</view>
			<view class="rdhdet_view" v-else-if="type==2">
				<u-input v-model="newvalue" type="textarea" class="textarea" :placeholder="placetext" />
			</view>
			<view class="rdhdet_view" v-else-if="type==3">
				<u-radio-group v-model="radval" @change="radioGroupChange">
					<u-radio v-for="(item, index) in list" :key="index" :name="item.name" active-color="#5FB878">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</view>
			<view class="rdhdet_view textarea" v-else>
				{{value}}
			</view>
		</view>
	</view>
</template>

<script>
	// 下拉  		传值 type=1 标题-uptitle 下拉列表-list 提示语-placetext 展示值-value   事件selconfirm发送值 
	// textarea  	传值 type=2 标题-uptitle 提示语-placetext 	展示值-value 		事件textchange发送值
	// 单选  		传值 type=3 标题-uptitle 单选列表-list  		展示值-value  		事件radioGroupChange发送值
	// 文字展示 		传值 type=4 	标题-uptitle 	展示值-value  	
	export default {
		props:['type','uptitle','list','placetext','value'],	//type==1-下拉选择  type==2-多行文本  type==3-单选  type==4-文字展示 
		data() {
			return {
				// 下拉
				selshow: false,
				// textarea
				radval:''
			};
		},
		computed:{
			// 多行文本
			newvalue:{
				get(){
					return this.value
				},
				set(val){
					this.$emit('textchange',val)
				}
			},
		},
		methods: {
			// 下拉
			selconfirm(e) {
				// console.log(e[0].value)
				this.$emit('selconfirm',e[0])
			},
			radioGroupChange(e){
				// console.log(e)
				this.$emit('radchange',e)
			}
		}
	}
</script>

<style>
	/* 下拉 */
	.rdhdet_row {
		margin: 20rpx;
		background-color: transparent;
		box-shadow: 1px 1px 10px #ccc;
		font-size: 32rpx;
	}

	.rdhdet_title {
		line-height: 60rpx;
		padding: 0 10rpx;
		box-sizing: border-box;
	}

	.rdhdet_view {
		padding: 0 10rpx;
	}
	.textarea{
		border: none;
		width: 100%;
		resize: none;
		min-height: 200rpx;
		padding: 10rpx;
		line-height: 60rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		background-color: transparent;
	}
</style>
