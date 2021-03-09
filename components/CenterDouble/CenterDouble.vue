<template>
	 <navigator url="" hover-class="none"  class="double">
		<view class="double_cont">
			<view class="double_topcont">
				<text class="double_topleftcont">
					{{title}}
				</text>
				<text class="double_toprightcont">
					{{time}}
				</text>
			</view>
			<view class="double_botcont">
				{{cont}}
			</view>
		</view>
	</navigator>
</template>

<script>
	export default {
		props:{
			title:String,
			time:String,
			cont:String
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	page{width: 100%;height: 100%;}
	.double{margin-bottom: 10px;display: block;}
	.double_cont{border-radius: 5px;background: #fff;padding: 10px;width: 100%;font-size: 16px;margin-bottom: 10px;box-shadow: 1px 1px 3px #ccc;}
	.double_topcont{line-height: 30px;display: flex;justify-content: space-between;}
	.double_topleftcont{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 48%;font-size: 15px;color: #333333;font-weight: bold;}
	.double_toprightcont{flex: 1;color: #333333;font-weight: bold;text-align: right;font-size: 15px;}
	.double_botcont{text-indent: 2em;text-align: justify;font-size: 14px;font-size: 14px;}
</style>
