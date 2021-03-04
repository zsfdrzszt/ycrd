<template>
	<view>
		<view class='activity_index_title'>
			{{index_title}}
		</view>
		<view class='three_liacon'>
			<view class='liacon_activt_item'>
				<navigator url='/pages/activity_room/activity_introduction/activity_introduction' class="liacon_activt_item_a">
					<img src="../../static/activity_room/activityroom_common_index_gk.png" alt="">
					<span>活动室概况</span>
				</navigator>
			</view>
			<view class='liacon_activt_item'>
				<navigator url='/pages/activity_room/activity_list/activity_list' class="liacon_activt_item_a">
					<img src="../../static/activity_room/activityroom_common_index_xj.png" alt="">
					<span>宣讲</span>
				</navigator>
			</view>
			<view class='liacon_activt_item'>
				<navigator url='/pages/activity_room/activity_list/activity_list' class="liacon_activt_item_a">
					<img src="../../static/activity_room/activityroom_common_index_lx.png" alt="">
					<span>联系</span>
				</navigator>
			</view>
			<view class='liacon_activt_item'>
				<navigator url='/pages/activity_room/activity_list/activity_list' class="liacon_activt_item_a">
					<img src="../../static/activity_room/activityroom_common_index_zf.png" alt="">
					<span>走访</span>
				</navigator>
			</view>
			<view class='liacon_activt_item'>
				<navigator url='/pages/activity_room/activity_list/activity_list' class="liacon_activt_item_a">
					<img src="../../static/activity_room/activityroom_common_index_xmjd.png" alt="">
					<span>选民接待</span>
				</navigator>
			</view>
			<view class='liacon_activt_item'>
				<navigator url='/pages/activity_room/activity_list/activity_list' class="liacon_activt_item_a">
					<img src="../../static/activity_room/activityroom_common_index_sqmyfk.png" alt="">
					<span>社情民意反馈</span>
				</navigator>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				index_title:'郭家堡安宁活动室'
			}
		},
		onLoad() {
			this.index_title = this.$route.query.space1
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	page{
		padding-top:30px;
		height: 100%;
		background: url(@/static/text5/common_bg.jpg);
		background-size:100% 100%;
		background-repeat:no-repeat ;
	}
	.activity_index_title{
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		color: red;
		letter-spacing: 2px;
		margin-bottom: 30px;
	}
	.three_liacon{
		display: flex;
		flex-wrap: wrap;
		padding: 15px;
		justify-content: space-between;
	}
	.liacon_activt_item{
		width: 30%;
		box-shadow: 1px 1px 4px #ccc;
		margin-bottom: 10px;
		border-radius: 10px;
	}
	.liacon_activt_item img{
		width: 60%;
	}
	.liacon_activt_item_a{
		display: flex;
		flex-direction: column;
		padding: 10px 3px;
		border-radius: 10px;
		justify-content: center;
		align-items: center;
	}
	.liacon_activt_item_a>span{
		padding-top:10px;
	}
	
</style>
