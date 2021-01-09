<template>
	<view>
		<u-dropdown ref="uDropdown" @open="open">
			<u-dropdown-item :v-model="value.number" :title=valueData :options="value.options" @change="change">
			</u-dropdown-item>
			
		</u-dropdown>

	</view>
</template>

<script>
	export default {
		props: {
			value: Object
		},
		data() {
			return {
				valueData: this.value.name,
			}
		},
		methods: {
			change(index) {
				// 更多的细节，如有需要请自行根据业务逻辑进行处理
				this.$refs.uDropdown.highlight(index);
				this.valueData = this.value.options[index - 1].label
				// console.log(this.value.name);
				this.$emit("click")
			},
			open(index) {
				// 展开某个下来菜单时，先关闭原来的其他菜单的高亮
				// 同时内部会自动给当前展开项进行高亮
				this.$refs.uDropdown.highlight();
			},
			close(index) {
				// 关闭的时候，给当前项加上高亮
				// 当然，您也可以通过监听dropdown-item的@change事件进行处理
				this.$refs.uDropdown.highlight(index);
			}

		}
	}
</script>

<style lang="scss">
	* {
		margin: 0px;
		padding: 0px;
	}
</style>
