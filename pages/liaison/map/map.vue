<template>
	<view class="map">
		<map style="width: 100%; height: 100%;" :latitude="latitude" :longitude="longitude" :markers="covers">
	     </map>
		 <wnavall></wnavall>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 0,
				longitude: 0,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}]
			}
	},
	mounted() {
		uni.getLocation({
		    type: 'gcj02 ',
		    success: function (res) {
		        console.log('当前位置的经度：' + res.longitude);
		        console.log('当前位置的纬度：' + res.latitude);
				this.latitude=res.latitude
				this.longitude=res.longitude
		    }
		});
	},
	methods: {

	}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
	}
.map{
	width: 100%;
	height: 100%;
	position: relative;
}
</style>
