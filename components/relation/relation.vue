<template>
	<view class="relation">
		<view class="relation_num">序号：{{num+1}}</view>
		<u-table class="table_mian" border-color="red" align="left">
			<u-tr class="table_tr" >
				<u-td width="35%">
					<view style="width: 100%;text-align: center;">
					专门委员会<br>工作委员会
					</view>
				</u-td>
				<u-td class="tr_right">{{list.space[0]}}<br>{{list.space[1]}}</u-td>
			</u-tr>
			<u-tr class="table_tr">
				<u-td width="35%">
					<view style="width: 100%;text-align: center;">
					联系对象
					</view>
					</u-td>
				<u-td class="tr_right">{{list.aim}}</u-td>
			</u-tr>
			<u-tr class="table_tr">
				<u-td width="35%">
					<view style="width: 100%;text-align: center;">
					联系次数
					</view>
					</u-td>
				<u-td>{{list.num}}</u-td>
			</u-tr class="tr_right">
			<u-tr class="table_tr">
				<u-td width="35%">
					<view style="width: 100%;text-align: center;">
					联系内容
					</view>
					</u-td>
				<u-td class="tr_right" >{{list.content}}</u-td>
			</u-tr>
		</u-table>
	</view>
</template>

<script>
	export default {
		props: {
			list: Object,
			num: Number
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.relation {
		width: 90%;
		margin: 0 auto;
		margin-top: 20px;
		box-shadow: 5px 5px 10px #e2aeae;
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
		background-color: rgba(255, 255, 255, 0.8);
	}

	.table_mian {
		width: 100%;
		width: 100%;
		border-color: red;
	}

	.table_tr {
		width: 100%;
		line-height: 30px;
	}

	.relation .relation_num {
		border: 1px solid red;
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
		border-bottom: none;
		box-sizing: border-box;
		padding: 15px 15px 5px;
	}
</style>
