<template>
	<div>
		<Top></Top>
		<div class="aboutbox">
			<div class="Abouttext">
				<div class="article_icon_content"></div>
				<div class="article_icon_content_right"></div>
				<p class="title">业界动态</p>
				<p class="title">专题报道</p>
				<p class="title">评测试用</p>
				<!-- <div class="aboutlbt">
					
				</div> -->
				<p class="aboutone">业界动态</p>
				
			</div>
			<div v-for="el in arr" class="allbox">
				<p class="titles">{{el.titles}}</p>
				<div class="itemimg">
					<p v-for="item in el.src">
						<img :src="item.imgurl">
					</p>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import Top from "@/views/index/Top.vue"
	export default {
		data() {
			return {
				arr: [{
						titles: "三星Galaxy Tab S7｜S7+国内发布 新一代旗舰平板耀世来袭",
						src: [{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2020/8/14/Sys/200814105330875.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2020/8/14/Sys/200814110221437.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2020/8/6/Sys/200806072916250.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2020/9/2/Sys/200902084010765.jpg"
							}
						]
					},
					{
						titles: "尽情工作 尽享生活 三星Galaxy Note20系列生态新品中国发布",
						src: [{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2020/8/14/Sys/200814105231375.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2020/8/14/Sys/200814105248875.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2020/8/14/Sys/200814105330875.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2020/8/14/Sys/20081410534231.jpg"
							},
						]
					},
					{
						titles: "3030万像素 佳能推出全画幅专微EOS R",
						src: [{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2018/9/6/Canon-EOSR-1.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2018/9/6/Canon-EOSR-2.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2018/9/6/Canon-EOSR-3.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2018/8/23/Sys/180823082058485.jpg"
							},
						]
					},
					{
						titles: "3030万像素 佳能推出全画幅专微EOS R",
						src: [{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2018/9/6/Canon-EOSR-1.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2018/9/6/Canon-EOSR-2.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2018/9/6/Canon-EOSR-3.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2018/8/23/Sys/180823082058485.jpg"
							},
						]
					},
				]
			}
		},
		components: {
			Top
		}
	}
</script>
<style>
	.aboutbox {
		width: 100%;
		/* height: 85px; */
		background-color: rgb(239, 239, 239);
		/* background-color: #e9ecf0; */
		/* background-image: url("http://static.699pic.com/newvision/images/index-banner-middle.v1.9.jpg"); */
	}

	.Abouttext {
		width: 980px;
		height: 75px;
		margin: 0 170px;
		display: flex;
		flex-wrap: wrap;
		border-bottom: 5px solid #e5e5e5;
		background-color: white;
		/* border-top: none; */
		/* background-image: url('http://www.dpnet.com.cn/Img/Article.png'); */
		background-repeat: no-repeat;
		position: relative;

	}

	.article_icon_content {
		width: 50px;
		height: 50px;
		background-image: url('http://www.dpnet.com.cn/Img/Article.png');
		background-position: -40px 10px;
		position: relative;
		left: -12px;
		top: 8px;
	}

	.article_icon_content_right {
		width: 50px;
		height: 50px;
		background-image: url('http://www.dpnet.com.cn/Img/Article.png');
		background-position: -176px 10px;
		position: absolute;
		left: 945px;
		top: 8px;
	}

	.title {
		width: 100px;
		height: 50px;
		/* border: 1px solid red; */
		font-family: "微软雅黑";
		font-size: 22px;
		padding: 10px;
		color: #c34400;
		padding-left: 10px;
		text-align: center;
		line-height: 55px;
		transition: all 0.4s;
	}

	.title:hover {
		border-bottom: 5px solid #ff4a00;
	}
	.aboutone {
		font-size: 22px;
		padding-top: 10px;
		color: #c34400;
		position: relative;
		top: 98px;
		left: -400px;
		/* text-align: center; */
	}
	.allbox {
		padding-top: 30px;
		top: 30px;
		width: 100%;
		/* height: 180px; */
		/* border: 1px solid red; */
		/* background-color: rgb(239,239,239); */
	}

	.titles {
		font-size: 20px;
		padding-left: 10px;
		/* margin-top: -10px; */
		text-align: center;
	}

	.itemimg {
		display: flex;
		justify-content: center;
		padding-top: 20px;
	}

	.itemimg img {
		border-radius: 10px;
		width: 250px;
		height: 180px;
		box-sizing: border-box;
		margin: 0px 10px 10px 10px;
		transition: all 2s;
	}

	.itemimg img:hover {
		transform: scale(1.1);
	}
</style>
