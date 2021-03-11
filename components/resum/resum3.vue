<template>
	<view>
		<!-- 上左右型  type==1-单选  type==2-下拉  type==3--文字展示 -->
		<view class="rdhdet_radrow">
			<view class="radtitle">{{uptitle}}</view>
			<view class="radview" v-if="type==1">
				<view class="radleft">{{downtitle}}</view>
				<view class="radright">
					<u-radio-group v-model="radval" @change="radioGroupChange">
						<u-radio v-for="(item, index) in list" :key="index" :name="item.name" active-color="#5FB878">
							{{ item.name }}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			<view class="radview" v-else-if="type==2">
				<view class="radleft">{{downtitle}}</view>
				<view class="radright">
					<u-input v-model="value" type="select" @click="selshow=!selshow" :placeholder="placetext" style="text-align: right;" />
					<u-select v-model="selshow" :list="list" @confirm="selconfirm"></u-select>
				</view>
			</view>
			<view class="radview" v-else>
				<view class="radleft">{{downtitle}}</view>
				<view class="radright">{{value}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 单选   type==1  uptitle-上文字   downtitle-下文字  list-单选列表   value -展示值	事件radchange发送值
	// 下拉   type==2  uptitle-上文字   downtitle-下文字  list-下拉列表  placetext-提示文字  value -展示值  事件selconfirm发送值 
	// 文字展示   type==3  uptitle-上文字   downtitle-下文字   value -展示值
	export default {
		props:['type','uptitle','downtitle','list','placetext','value'],	//type==1-单选  type==2-下拉  type==3--文字展示
		data() {
			return {
				// 单选
				radioList: [
					{
						name: '鲜甜',
						disabled: false
					},
					{
						name: '麻辣',
						disabled: false
					}
				],
				radval: '',
				// 下拉
				selshow: false,
			};
		},
		methods: {
			// 下拉
			selconfirm(e) {
				// console.log(e[0].value)
				this.$emit('selconfirm',e[0])
			},
			radioGroupChange(e){
				this.$emit('radchange',e)
			}
		}
	}
</script>

<style>
	.rdhdet_radrow{
		margin: 20rpx;
		background-color: transparent;
		box-shadow: 1px 1px 10px #ccc;
		font-size: 32rpx;
		line-height: 60rpx;
	}
	.radtitle{
		padding: 0 10rpx;
		box-sizing: border-box;
	}
	.radview{
		display: flex;
	}
	.radleft{
		flex: 1;
		padding: 0 10rpx;
	}
	.radright{
		flex: 1;
		padding: 0 10rpx;
		text-align: right;
	}
</style>
