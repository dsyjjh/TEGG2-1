<template>
	<div id="goods">
		<p>商品展示</p>
		<div class="content">
			<div v-for="(el,index) in data1" class="img-box" :key="index">
				<img :src="el.upimgsrc" />
				<button @click="collection(el.id,$event)">收藏</button>
				<span>{{el.imgtitle}}</span>
				<span style="position: relative;right: -100px;">类型:{{el.imgtype}}</span>
				<div>{{el.description}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data1: [],
			};
		},
		mounted() {
			this.$axios.get("/allproduction").then((res) => {
				console.log("获取所有作品", res.data);
				this.data1 = res.data;
			});
		},
		methods: {
			collection(e, event) {
				console.log("收藏31", event.target);
				this.$axios
					.get("/collectionProduction", {
						params: {
							id: e
						}
					})
					.then((res) => {
						console.log("收藏接口", res.data);
						if (res.data.code == 4006) {
							alert("您还未登录!");
						} else {
							alert("收藏成功！");
							event.target.disabled = true;
						}
					});
			},
		},
	};
</script>

<style scoped>
	#goods{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding:  0 3%;
	}
	#goods p{
		width: 100px;
		height: 40px;
		display: inline-block;
		text-align: center;
		line-height: 40px;
		font-size: 20px;
		font-weight: 600;
		margin-left: 50px;
	}
	.content {
		margin-top: 20px;
		width: 90%;
		box-sizing: border-box;
		padding: 5px 10px;
		/* float: left; */
		display: flex;
		flex-wrap: wrap;
	}

	.img-box {
		width: 24%;
		height: 250px;
		box-sizing: border-box;
		margin: 2px 3px;
	}

	.img-box img {
		width: 100%;
		height: 200px;
	}

	.img-box:hover {
		box-shadow: 0 3px 8px rgba(0, 0, 0, 0.48), 0 5px 12px rgba(0, 0, 0, 0.34);
	}
</style>
