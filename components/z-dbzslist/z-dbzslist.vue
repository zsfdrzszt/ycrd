<template>
	<view>
		<view class="rdvoice_con">
			<navigator class="rdvoice_conrow" url="../w-contacts/w-contacts">
				<view class="rdvoice_conleft">
					<image :src="value.url" mode="widthFix"></image>
				</view>
				<view class="rdvoice_conright">
					<view class="rdvoice_conrighttop">
						{{value.headline}}
					</view>
					<view class="rdvoice_conrightsec">
						{{value.details}}
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			value:Object
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.rdvoice_con {
		margin: 0px 15px 20px ;
	}
	.rdvoice_conrow {
		    background-color: #f6f8fa;
		    padding: 10px 0px;
		    box-sizing: border-box;
		    display: flex;
		    box-shadow: 1px 1px 10px #ccc;
		    width: 100%;
		    margin-top: 20px;
	}
	.rdvoice_conleft {
		width: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		.image {
			width: 90%;
			border: none;
		}
	}
	.rdvoice_conright {
		flex: 1;
		width: 35%;
		padding: 0 5px;
		box-sizing: border-box;
	}
	.rdvoice_conrighttop {
		    border-bottom: 1px solid #ccc;
		    font-size: 18px;
		    font-weight: bold;
		    line-height: 35px;
		    width: 100%;
		    overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
	}
	.rdvoice_conrightsec {
		position: relative;
		    line-height: 1.5em;
		    overflow: hidden;
		    text-align: justify;
		    display: -webkit-box;
		    -webkit-box-orient: vertical;
		    -webkit-line-clamp: 3;
	}
</style>
