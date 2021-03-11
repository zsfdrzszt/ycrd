<template>
	<view>
		<view class='act_det_title'>
			{{acdet_title}}
		</view>
		<view class="det_content">
			<u-parse :html="content" class='gkdet_center'>
				
			</u-parse>
			<view class='acitvity_det_footer'>
				<view>
					<text>{{address}}</text>
					<text>{{time}}</text>
				</view>
			</view>
		</view>
		<wtextsize @click="changetextsize"></wtextsize>
		<wnavall></wnavall>
	</view>
</template>

<script>
	import wtextsize from "../../../components/w-textsize/w-textsize.vue"
	import wnavall from "@/components/w-navall/w-navall.vue"
	export default{
		components: {
			wtextsize,
			wnavall
		},
		data(){
			return{
				acdet_title:'人大代表第一活动小组宣讲活动',
				content: `
					<p>露从今夜白，月是故乡明</p>
					<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
				`,
				address:'郭家堡安宁活动室',
				time:'2019年12月02日',
				
			}
		},
		methods: {
				changetextsize(e) {
					let num = parseInt(this.textsize)
					let numtitle = parseInt(this.textSize)
					if (e == 1) {
						num++
						numtitle++
					} else if (e == 0) {
						num--
						numtitle--
						if (num < 14) {
							num = 14
						}
						if (numtitle < 14) {
							numtitle = 14
						}
					}
					this.textsize = num + 'px'
					this.textSize = numtitle + 'px'
					// console.log(num)
				}
			},
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
		background: url("@/static/text4/common_articlebg.jpg");
		background-size:100% 100%;
		background-repeat:no-repeat ;
		font:14px Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;
	}
	.act_det_title{
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		margin: 20px;
	}
	.det_content{
		padding: 10px;
	}
	.acitvity_det_footer{
		display: flex;
		justify-content: flex-end;
	}
	.acitvity_det_footer>view{
		width: 160px;
		text-align: center;
		display: flex;
		flex-direction: column;
	}
</style>
