<template>
	<view class="">
		<image :src="userlist.url" mode="widthFix" style="width: 100%;"></image>
		<view class="topmain">
			<view class="topbuttons">
				<view class="topbutton">回复</view>
				<view class="topbutton" @click="topage">一人一码</view>
			</view>
			<view class="topchanges">
				<view class="topchange" @click="changecor(1)">
					<image src="/static/text5/liasons_common_service_person2.png" mode="heightFix" style="height: 20px;margin: 5px 0;"
					 v-if="isActive==1"></image>
					<image src="/static/text5/liasons_common_service_person1.png" mode="heightFix" style="height: 20px;margin: 5px 0;"
					 v-if="isActive==2 || isActive==3"></image>
					<text>简介</text>
				</view>
				<view class="topchange">|</view>
				<view class="topchange" @click="changecor(2)">
					<image src="/static/text5/liasons_common_service_lvzhi2.png" mode="heightFix" style="height: 20px;margin: 5px 0;"
					 v-if="isActive==2"></image>
					<image src="/static/text5/liasons_common_service_lvzhi1.png" mode="heightFix" style="height: 20px;margin: 5px 0;"
					 v-if="isActive==1 || isActive==3"></image>
					<text>本职工作</text>
				</view>
				<view class="topchange">|</view>
				<view class="topchange" @click="changecor(3)">
					<image src="/static/text5/liasons_common_service_work2.png" mode="heightFix" style="height: 20px;margin: 5px 0;"
					 v-if="isActive==3"></image>
					<image src="/static/text5/liasons_common_service_work1.png" mode="heightFix" style="height: 20px;margin: 5px 0;"
					 v-if="isActive==2 || isActive==1"></image>
					<text>代表履职</text>
				</view>
			</view>
		</view>
		<view v-show="isActive == 1">
			<view class="upmain">
				<view class="upmainnew">
					<view class="upmainleft">届别：</view>
					<view class="upmainright">{{userlist.period}}</view>
				</view>
				<view class="upmainnew">
					<view class="upmainleft">职务：</view>
					<view class="upmainright">{{userlist.job}}</view>
				</view>
				<view class="upmainnew">
					<view class="upmainleft">电话：</view>
					<view class="upmainright">{{userlist.phone}}</view>
				</view>
				<view class="upmainnew">
					<view class="upmainleft">邮箱：</view>
					<view class="upmainright">{{userlist.email}}</view>
				</view>
			</view>
			<view class="upmain">
				<view class="upmainnew">
					<view class="upmainleft">履职承诺：</view>
					<view class="upmainright">{{userlist.service}}</view>
				</view>
			</view>
			<view class="upmain">
				<view class="upmainnew">
					<view class="upmainleft">特色服务：</view>
					<view class="upmainright">{{userlist.period}}</view>
				</view>
			</view>
		</view>
		<view v-show="isActive == 2" class="upmain upmaincon">
			<view class="">强化代表意识和履职意识是当好代表的前提条件。牢固树立“人民选我当代表，我当代表为人民”的观念，切实增强代表的政治意识和责任意识，才能自觉参加各项活动依法履行职责，有效地发挥代表作用。</view>
			<image src="http://qiniu.jza2c.com/uploads/20200528/FnQF9ZD3AWYsBrSXSFUWMBkax36Q.jpg" mode=""></image>
			<view>一定要与群众保持密切的联系，是做好代表工作的生命力之所在，人大代表要以为民办实事、办好事为已任.真正成为人民群众的代言人和根本利益的忠实代表。在与选民的接触中，我深刻感受到群众对代表的肯定、理解和支持。正是群众的热情和支持，更加激励我竭尽全力履行好自己的职责，每当群众反映的问题得到解决的时候，我心中不由产生一种激动和欣慰，既为群众欢欣而鼓舞，也为政府的工作高兴而自豪。若是问题迟迟得不到解决，我心中也会非常内疚和遗憾。</view>
			<view>在广大选民的关心、支持下，自己做了自己应做的工作，但与大家的期望还有很大差距，今后我要更加努力学习，不断提高自己的履职水平。最后，感谢大家的支持帮助，请大家对我的工作进行评议，并多提出宝贵意见。</view>
		</view>
		<view v-show="isActive == 3" class="upmain upmaincon">
			<view class="">强化代表意识和履职意识是当好代表的前提条件。牢固树立“人民选我当代表，我当代表为人民”的观念，切实增强代表的政治意识和责任意识，才能自觉参加各项活动依法履行职责，有效地发挥代表作用。</view>
			<image src="http://qiniu.jza2c.com/uploads/20200528/FnQF9ZD3AWYsBrSXSFUWMBkax36Q.jpg"></image>
			<view>一定要与群众保持密切的联系，是做好代表工作的生命力之所在，人大代表要以为民办实事、办好事为已任.真正成为人民群众的代言人和根本利益的忠实代表。在与选民的接触中，我深刻感受到群众对代表的肯定、理解和支持。正是群众的热情和支持，更加激励我竭尽全力履行好自己的职责，每当群众反映的问题得到解决的时候，我心中不由产生一种激动和欣慰，既为群众欢欣而鼓舞，也为政府的工作高兴而自豪。若是问题迟迟得不到解决，我心中也会非常内疚和遗憾。</view>
			<view>在广大选民的关心、支持下，自己做了自己应做的工作，但与大家的期望还有很大差距，今后我要更加努力学习，不断提高自己的履职水平。最后，感谢大家的支持帮助，请大家对我的工作进行评议，并多提出宝贵意见。</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive: 1,
				userlist:"",
				uesrlists: [{
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200331/lognpGjFEOAL-EG4vbdKD3IUgxoo.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "王绍泰人大代表服务岗",
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200331/FkZ3RG4lb2_itXNUg6BZcXjW-dUz.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "高振华人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200331/Fo7QA5fTyRvORkMSF1GzyV-5DyxC.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "王殿胜人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200331/Fqag1XXcgKeyvNfpwESm0BT2FoCc.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "张璟人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200331/FrhFGwt9qzyss7Q3gNI_NptlMa1o.png",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "柴永昌人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200331/FrhFGwt9qzyss7Q3gNI_NptlMa1o.png",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "霍志明人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200813/FmkcC8maRDq9gR3tfTLI_nSPhuLZ.png",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "郝慧生人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20191216/FuGdd8_Ku5kORD4-I3TBeV-OmaFP.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "郭宏爱人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200119/Fg1GNR1VdrExF7tD898uRXNZzoG8.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "荣慧颖人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200119/Fg1GNR1VdrExF7tD898uRXNZzoG8.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "周艳人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200215/Fkux7QtYLb-IX-AD-YnwS4Rd-2IJ.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "张文海人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200402/Fq4ASDu69kUMxdHN2u-yrH2gOFWZ.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "张文英人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200604/FlX4c6z3Vq2fDPG9WzV9hvdjAxjW.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "药建军人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200604/FlKBunXRD1YYgHyOqb4zCRKno-jl.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "许永丽人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200604/FiSz1RrBW2PGjSiq3iZ2kE876218.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "李爱顺人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200604/FgxSU20itA-j6KTT9QNhTXHco7Vt.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "郭靖芬人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200604/Fk7RlwAx3lHFLlUifkB9hDU8u50G.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "陈晨人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200602/Fl_lb4LrNVyrIZr5H0lk9ova3GSV.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "张保生人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200602/FqjZLZpZcFNtpFpphIYmE-U4qUmG.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "许晋文人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200114/FhJLGAdqTB9EoiFHd31iLx-g7-Lg.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "张岐明人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200114/FmgALtbvkEFE9PyTM4nPGoXqAlwM.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "桑利民人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200114/FvQ--jR3VSYPoFi7OPPm-YKfY_5I.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "程宝宏人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200114/FtVqJD5JkyRGVMZTjcW4OpR8qBVx.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "乔淑珍人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200602/FmA8LrfGfj7Y0n9q43uJnLmBcLLp.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "丁福友人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200115/FnWZviColJQSHrBcMpqqC7n2MxF6.png",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "孟广生人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200115/Fl4hBI8zv7d0e-5t1Ew4cTC7ga-5.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "秦二成人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200513/Fl0E0_fM51NDFQqJ8sfAY-uSURpb.png",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "刘雲人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200331/FoGTWCM19Hh3K2DBYXL2khK2q5iM.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "武祝琴人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200513/FkzM5MVswWbrKpurlsujAIta_UQL.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "卢胜友人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200506/FoAv8OdvCRO5w9cDUBDtZtD8MoWc.jpg",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "张爱茂人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200331/FnhiCTJ-Q-Cjqmlju7jkkOdRVwzD.png",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "郑志强人大代表服务岗"
				}, {
					liaison_id:"1",
					url: "http://qiniu.jza2c.com/uploads/20200331/FpimzeKvvKwtfEHCXQPxchHcyLpa.png",
					period: '晋中市第四届人大代表、榆次区第十六届人大代表、郭家堡乡第十七届人大代表',
					job: "榆次区安宁实业有限公司董事长",
					phone: "13903448891",
					email: "anningshiyegongsi@126.com",
					promise: "与选区选民和人民群众保持密切联系，自觉接受选民监督，履行代表职责。",
					service: "一、积极发挥人民代表的职责和作用，了解民情民意、听取意见建议、及时解决群众困难和关心的问题。 二、积极宣传党的路线、方针、政策和国家的法律、法规，根据要求传达人代会的精神。",
					space: "刘永斌人大代表服务岗"
				}, ]
			}
		},
		methods: {
			changecor(e) {
				this.isActive = e
			},
			topage(){
				uni.navigateTo({
					url:"/pages/text1/liaison/liaison"+"?id=" + this.userlist.liaison_id
				})
			}
		},
		onLoad(option) {
			this.uesrlists.filter((item)=>{
				if(item.space == option.space2){
					this.userlist = item
				}
			})
		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: #eee;
	}

	.topmain {
		position: relative;
		background-color: #fff;
		width: 90%;
		margin: 0 auto;
		border-radius: 10px;
		box-shadow: 0 0 5px #c75151;
		height: 100px;
		margin-top: -50px;
		box-sizing: border-box
	}

	.topbuttons {
		display: flex;
		justify-content: space-around;
		padding-top: 10px;
	}

	.topbutton {
		width: 30%;
		height: 30px;
		background: #c30000;
		border-radius: 5px;
		color: #fff;
		font-size: 16px;
		line-height: 30px;
		text-align: center;
	}

	.topchanges {
		display: flex;
		margin-top: 5px;
		justify-content: space-evenly;
	}

	.topchange {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.upmainnew {
		display: flex;
		line-height: 30px;
		border-bottom: 1px solid #eee;
		padding: 10px 0;
	}

	.upmainleft {
		text-align: center;
		font-weight: bold;
		flex: 1;
	}

	.upmainright {
		flex: 2;
		padding-right:10px ;
	}

	.upmain {
		width: 100%;
		margin-top: 30px;
		background-color: #fff;
	}
	.upmaincon{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 5px ;
	}
</style>
