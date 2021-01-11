<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	.uni-page-body{
		height: 100%;
	}
	.status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
		  background-color: #FFFFFF;
	  }
</style>
