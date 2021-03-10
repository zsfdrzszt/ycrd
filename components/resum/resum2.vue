<template>
	<view>
		<!--左右型   type==1-时间  type==2-input  type==3-文字展示-->
		<view class="rdhdet_rowtime">
			<view class="timetitle">{{lrtitle}}</view>
			<view class="timeform" v-if="type==1">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
			</view>
			<view class="timeform" v-if="type==2">
				<u-input v-model="value"  class="timeform_word uni-input" input-align="right   " />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['type','lrtitle','value'],
		data() {
			return {
			};
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			},
			date:{
				get(){
					return this.value
				},
				set(val){
					this.$emit('datechange',val)
				}
			}
		},
		methods: {
			// 时间选择器
			bindDateChange: function(e) {
				this.date = e.target.value
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
	/* 时间 */
	.rdhdet_rowtime {
		display: flex;
		margin: 20rpx;
		background-color: transparent;
		box-shadow: 1px 1px 10px #ccc;
		font-size: 32rpx;
		line-height: 80rpx;
	}

	.timetitle {
		width: 200rpx;
		padding: 0 10rpx;
	}

	.timeform {
		flex: 1;
		padding: 0 10rpx;
	}
	.uni-input{
		text-align: right;
		line-height: 80rpx;
	}
	
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
	.timeform_word{height: 80rpx;line-height: 80rpx;}
</style>
