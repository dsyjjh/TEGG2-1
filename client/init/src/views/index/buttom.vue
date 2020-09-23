<template>
	<div class="bottombox">
		<!-- 第一行 -->
		<ul class="buttom-box-1">
			<li v-for="(el,index) in title" :key="index">{{el}}</li>
		</ul>
	
		<!-- 第二行 -->
		<ul class="buttom-box-2">
			<li v-for="(i,index) in wangzhan" :key="index">{{i}}</li>
		</ul>
	
		<!-- 第三行 -->
		<ul class="buttom-box-3">
			<img :src="imgsrc" style="vertical-align:middle">
			<li v-for="(j,index) in jing" :key="index">{{j}}</li>
		</ul>
	
		<!-- 最后一行 -->
		<ul class="buttom-box-4">
			<li v-for="(x,index) in last" :key="index">{{x}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: ["网站地图", "相关链接", "影响授权", "隐私政策", "版权声明", "在线咨询", "联系我们", "关于我们", ],
				wangzhan: ["网站维护：鸵鸟摄影网资料信息部", "联系方式：jianglaoshi@123.com", ],
				jing: ["京公网安备 11010102004165号", "京ICP备05067311号-1"],
				last: ["@2001-现在 鸵鸟摄影网", "网站建设：成都TEGG小组"],
				imgsrc: "https://img.dpm.org.cn/Public/static/ico.png",
			};
		},
	};
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.bottombox {
		height: 120px;
		width: 100%;
		background-color: #272727;
		text-align: center;
	}

	li {
		list-style: none;
		display: inline-block;
		/* 字体公共样式 */
		color: #a5aaad;
		font-size: 12px;
		margin: 2px 15px;
	}

	#app ul {
		margin: 0px;
	}

	.buttom-box-1 li {
		color: #ffffff;
		margin: 12px 15px;
		margin-bottom: 5px;
		font-size: 14px;
	}

	.buttom-box-3 li {
		margin-left: 5px;
	}
</style>
