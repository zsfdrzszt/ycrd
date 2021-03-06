<template>
	<view class="dropmain">
		<view class="droptop">
			<text class="dropname">{{title}}</text>
			<u-icon class="dropimg"  :name="name[num]" color="#ffffff" @click="dropchange"></u-icon>
		</view>
		<view class="droplist" v-show="state" :style="{top:listtop}">
			<view v-for="(item,index) in list.list" :key="index" class="droplistone" :class="{droplisttwo:index==isActive }"  @click="changetitle(item,index)">
				{{item.content}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list : Object
		},
		data() {
			return {
				isActive:false,
				listtop:"45px",
				title:this.list.name,
				num:0,
				state:false,
				name:["arrow-down-fill","arrow-up-fill"]
			};
		},
		methods:{
			changetitle(item,index){
				this.title = item.content
				this.isActive = index
				this.dropchange()
				this.$emit("searchdrop",item)
			},
			dropchange(){
				this.isActive = false
				if(this.num == 0){					
					this.num= 1
					this.state = !this.state
					let val = parseInt(this.listtop)
					let time = setInterval(()=>{	
						val -= 1
						this.listtop = val+'px'
						if(val <= 30){
							clearInterval(time)
						}
					},10)
				}else{
					this.num =0
					this.state = !this.state
					this.listtop="45px"
				}
				
			}
		}
	}
</script>

<style>
	.dropmain{
		width: 35%;
		position: relative;
	}
	.droptop{
		display: flex;
		align-items: center;
		width: 100%;
		background-color: #B50000;
		height: 30px;
		color: white;
		border-radius: 4px;
		box-shadow: 1px 1px 5px #ccc;
	}
	.dropimg{
		
	}
	.dropname{
		display: block;
		width: 60%;
		margin: 0 10px;
	}
	.droplist{
		position: absolute;
		left: 0;
		padding: 5px 0;
		z-index: 899;
		min-width: 100%;
		border: 1px solid #d2d2d2;
		max-height: 300px;
		overflow-y: auto;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 4px rgba(0,0,0,.12);
		box-sizing: border-box;
	}
	.droplistone{
		padding: 0 10px;
		line-height: 36px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis
	}
	.droplisttwo{
		background-color: #B50000;
		color: #FFFFFF;
	}
</style>
