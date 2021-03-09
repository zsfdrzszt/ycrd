<template>
	<view class="examine_center">
		<view class="examine_all">
			<view class="examine_left">
				<image src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqEfdT11cVUxRnzicVxHuqv08FHTOq3HFo3jYGDEtZ3HukvibVJkLibD5QSG616p38icvO7JXa6AV50bA/132" mode="widthFix" style="width: 100%;"></image>
			</view>
			<view class="examine_right">
				<view class="examine_rights">
					<view>标&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;题：</view>
					<view>{{list.title}}</view>
				</view>
				<view class="examine_cen examine_rights">
					<view>代表姓名：</view>
					<view>{{list.name}}</view>
				</view>
				<view class="examine_footer">
					<view class="examine_time">{{list.time}}</view>
					<view class="examine_one">{{list.tong}}</view>
					<view class="examine_two">{{list.liu}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:Object,
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.examine_center{
	height: 90%;
	overflow: auto;
	padding: 0 10px;
}
.examine_all{
	border-radius: 5px;
	border: 1px solid #ee0000;
	background-color: #fff;
	padding: 5px;
	box-sizing: border-box;
	margin: 10px 0;
	display: flex;
	justify-content: center;
	box-shadow: 1px 1px 3px #ccc;
}
.examine_left{
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.examine_right{
	width: 70%;
	font-size: 16px;
	display: inline-block;
	padding-left: 10px;
	box-sizing: border-box;
	flex: 1;
}
.examine_rights{
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.examine_rights>view:first-child{
    font-weight: 900;
    width: 72px;
    font-size: 16px;
    text-align: justify;
    text-align-last: justify;
    display: inline-block;
	margin-right: 10px;
}
.examine_rights view{
	width: 10px;
	font-weight: 300;
	font-size: 16px;
	text-align: justify;
	text-align-last: justify;
	display: inline-block;
}
.examine_cen{
	line-height: 50px;
}
.examine_footer{
	font-size: 14px;
	line-height: 20px;
	display: flex;
}
.examine_time{
	width: 42%;
}
.examine_one{
	width: 24%;
	text-align:center;
}
.examine_two{
	width: 33%;
	text-align: center;
}
</style>
