<template>
	<view>
		<!-- type==3  上下 左右 单选 -->
		<view class="rdhdet_radrow">
			<view class="radtitle">参加全体会议情况</view>
			<view class="radview">
				<view class="radleft">是否参加全体会议</view>
				<view class="radright">
					<u-radio-group v-model="radio">
						<u-radio v-for="(item, index) in radioList" :key="index" :name="item.name">
							{{ item.name }}
						</u-radio>
					</u-radio-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				// 下拉
				selval: '',
				selshow: false,
				sellist: [{
						value: '1',
						label: '2020年5月29日东赵乡第十七届人民代表大会第七次会议'
					},
					{
						value: '2',
						label: '2020年5月29日东赵乡第十七届人民代表大会第七次会议'
					}
				],
				// 时间
				date: currentDate,
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
					radio: '',
			};
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			// 下拉
			selconfirm(e) {
				console.log(e[0].value)
				this.selval = e[0].label
			},
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
</style>
