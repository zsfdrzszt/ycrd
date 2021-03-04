<template>
	<view>
		<view class='gkdet_title'>
			{{gkint_title}}
		</view>
		<u-parse :html="content" class='gkdet_center'>
			
		</u-parse>
		<wtextsize @click="changetextsize"></wtextsize>
	</view>
</template>

<script>
	import wtextsize from "../../../components/w-textsize/w-textsize.vue"
	export default {
			components: {
				wtextsize
			},
			data() {
				return {
					gkint_title:'郭家堡安宁活动室概况',
					content: `
						<p>露从今夜白，月是故乡明</p>
						<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
					`,
					textsize: "16px",
					textSize: "20px"
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
		background: url(@/static/text4/common_articlebg.jpg);
		background-size:100% 100%;
		background-repeat:no-repeat ;
	}
	.gkdet_title{
		font-size: 20px;
		font-weight: bold;
		text-align: center;
		margin-bottom: 30px;
	}
	.gkdet_center{
		margin: 20px 10px;
		text-align: justify;
		margin-bottom: 60px;
	}
</style>
