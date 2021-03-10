<template>
	<view class="perform_coll">
		<view class="perform" v-if="state==1">
			<view class="perform_mian">
				<view class="perform_tit">
					联络站
				</view>
				<view class="perform_con">
					{{list.statio}}
				</view>
			</view>
			<view class="perform_mian">
				<view class="perform_tit">
					代表姓名
				</view>
				<view class="perform_con">
					{{list.name}}
				</view>
			</view>
			<view class="perform_mian">
				<view class="perform_tit">
					时间
				</view>
				<view class="perform_con">
					{{list.time}}
				</view>
			</view>
			<view class="perform_mians">
				<view class="perform_tit">
					地点
				</view>
				<view class="perform_cons">
					{{list.space}}
				</view>
			</view>
			<view class="perform_mians">
				<view class="perform_tit">
					履职方式
				</view>
				<view class="perform_cons">
					{{list.way}}
				</view>
			</view>
			<view class="perform_mians">
				<view class="perform_tit  ">
					履职内容
				</view>
				<view class="perform_cons perform_tits">
					{{list.content}}
				</view>
			</view>
			<view class="perform_mians">
				<view class="perform_tit">
					履职成效
				</view>
				<view class="perform_cons  perform_tits">
					{{list.effect}}
				</view>
			</view>
			<view class="perform_mians">
				<view class="perform_tit">
					查看图片
				</view>
				<view class="perform_cons perform_cono">
					<image :src="item"  style="width: 91px;height: 70px;display: block;margin: 0 10px;" v-for="(item,index) in list.img" @click="magnify(item)"></image>
				</view>
			</view>
		</view>

		<view class="perform" v-if="state==2">
			 <view class="perform_mian">
			 	<view class="perform_tit">
			 		序号
			 	</view>
			 	<view class="perform_con">
			 		{{num}}
			 	</view>
			 </view>
			 <view class="perform_mian">
			 	<view class="perform_tit">
			 		会议名称
			 	</view>
			 	<view class="perform_con">
			 		{{list.title}}
			 	</view>
			 </view>
			 <view class="perform_mians">
			 	<view class="perform_tit">
			 		会期
			 	</view>
                <view class="perform_zon">
                	<view class="perform_titss">
                		开会日期
                	</view>
                	<view class="perform_con">
                		{{list.open}}
                	</view>
                </view>
				<view class="perform_zon">
					<view class="perform_titss">
						闭会日期
					</view>
					<view class="perform_con">
						{{list.close}}
					</view>
				</view>
			 </view>
			 <view class="perform_mians">
			 	<view class="perform_tit">
			 		履职情况
			 	</view>
			    <view class="perform_zon">
			    	<view class="perform_titsss">
			    		参加全体会议情况
			    	</view>
			    	<view class="perform_con">
			    		{{list.join ==1? "按规定时间参会":"缺席"}}
			    	</view>
			    </view>
				<view class="perform_zon">
					<view class="perform_titsss">
						分团审议发言情况
					</view>
					<view class="perform_con">
						发言{{list.say}}次
					</view>
				</view>
				<view class="perform_zon">
					<view class="perform_titsss">
						投票表决情况
					</view>
					<view class="perform_con">
						{{list.vote==1?"参加投票表决":"未参加投票表决"}}
					</view>
				</view>
				<view class="perform_zon">
					<view class="perform_titsss">
						提出意见建议情况
					</view>
					<view class="perform_con">
						提出建议{{list.suggest}}次
					</view>
				</view>
			 </view>
			 <view class="perform_mian">
			 	<view class="perform_tita">
			 		参会考勤情况
			 	</view>
			 	<view class="perform_con">
			 		{{list.check==0 ?"全勤":"缺勤"+list.check +"次"}}
			 	</view>
			 </view>
		</view>
	</view>
	
</template>

<script>
	export default {
		props:{
			list:Object,
			state:Number,
			num:Number,
		},
		data() {
			return {
				
			};
		},
		
		methods:{
			magnify(val){
				this.$emit("magnify",val)
			}
		}
	}
</script>

<style>
	.perform_coll{
		width: 100%;
	}
.perform{
	    width: 95%;
	    border-radius: 8px;
	    border: 1px solid red;
		margin: 10px auto;
}
.perform_mian{
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
	    line-height: 30px;
	    padding-bottom: 5px;
		margin: 10px;
		font-size: 16px;
	}
	.perform_zon{
		display: flex;
		justify-content: space-between;
		line-height: 30px;
		padding-bottom: 5px;
		font-size: 16px;
	}
	.perform_tit{
		font-size: 16px;
		font-weight: 700;
		width: 20%;
		text-align-last: justify;
	}
	.perform_tita{
		font-size: 16px;
		font-weight: 700;
		text-align-last: justify;
	}
	.perform_titss{
		font-size: 16px;
		width: 20%;
		color: #777777;
		text-align-last: justify;
	}
	.perform_titsss{
		font-size: 16px;
		color: #777777;
		text-align-last: justify;
	}
	.perform_titssss{
		font-size: 16px;
		color: #777777;
		text-align-last: justify;
	}
.perform_mians{
		border-bottom: 1px solid #ccc;
		margin: 10px;
		font-size: 16px;
		    line-height: 30px;
	}
.perform_con{
	color: #777777;
	flex: 1;
	text-align: right;
}
.perform_cons{
	color: #777777;
	text-indent: 2em;
}
.perform_cono{
	display: flex;
}
.perform_tits{
	border-top: 1px solid #ccc;
}
</style>
