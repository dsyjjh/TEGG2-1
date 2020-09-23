<template>
	<div class="Personal-right">
		<div class="btn">
			<div class="upfile-box" >
				<p>+</p>
				<input type="file" @change="uploadchange($event)" class="filebox"/>
			</div>
			<div class="int-box">
				<input v-model="uploadpic[0].imgtitle" type="text" placeholder="图片标题" />
				<input v-model="uploadpic[0].imgname" type="text" placeholder="图片名字" />
				<input v-model="uploadpic[0].imgtype" type="text" placeholder="图片分类" />
				<input v-model="uploadpic[0].description" type="text" placeholder="图片描述" />
			</div>
			<button @click="upload()">上传</button>
		</div>
		<div v-show="uptextshoe" id="updescription">
			<span>{{info}}</span>
			<button @click="hidden">&#10006</button>
		</div>
		<div class="line"></div>
		<div class="content">
			<div v-for="(el,index) in data2" class="img-box" :key="index">
				<img :src="el.upimgsrc" />
				<p>{{el.imgtitle}}</p>
				<p>{{el.description}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: "",
				file1: "",
				login: false,
				info: "提示信息", //图片上传成功提示文字
				uptextshoe: false,
				uploadpic: [{
					imgtitle: "",
					imgname: "",
					imgtype: "",
					description: "",
				}, ],
				data2: [
				],
			};
		},
		mounted() {
			this.$axios.get("/userinfo").then((res) => {
				//   this.xxupload = res.data;
				// console.log("传了吗？", res.data[0]);
				var a = res.data;
				if (a) {
					this.login = true;
					this.id = res.data[0].id;
					console.log("已登录");
				} else {
					this.login = false;
					console.log("未登录");
				}
			});

			this.$axios.get("/allproduction").then((res) => {
				// console.log("获取所有作品", res.data);
				// console.log(res.data[0].id);
				var arr = [];
				for (let i = 0; i < res.data.length; i++) {
					//console.log(res.data[i].userid);
					if (res.data[i].userid == this.id) {
						arr.push(res.data[i]);
					}
				}
				this.data2 = arr;
			});
		},
		methods: {
			//提交上传作品
			upload() {
				// console.log(this.login);
				if (this.login) {
					console.log("已经登录");
					if (
						this.uploadpic[0].imgtitle &&
						this.uploadpic[0].imgname &&
						this.uploadpic[0].imgtype &&
						this.uploadpic[0].description
					) {
						var f = new FormData();
						f.append("file1", this.file1);
						f.append("username", this.username);
						f.append("imgtitle", this.uploadpic[0].imgtitle);
						f.append("imgname", this.uploadpic[0].imgname);
						f.append("imgtype", this.uploadpic[0].imgtype);
						f.append("description", this.uploadpic[0].description);
						var res = this.$axios
							.post("/uploadImg", f, {
								header: {
									"content-Tyoe": "application/x-www-form-urlencoded"
								},
							})
							.then((res) => {
								console.log(res);
								if ((res.data.code = 2004)) {
									//上传成功
									this.info = res.data.info;
									this.uptextshoe = true;
									this.$axios.get("/allproduction").then((res) => {
										console.log("获取所有作品", res.data);
										// console.log(res.data[0].id);
										var arr = [];
										for (let i = 0; i < res.data.length; i++) {
											//console.log(res.data[i].userid);
											if (res.data[i].userid == this.id) {
												arr.push(res.data[i]);
											}
										}
										this.data2 = arr;
									});
								}
							});
					} else {
						alert("图片信息尚未填写完整！");
					}
				} else {
					alert("请先登录！");
				}
			},
			uploadchange(e) {
				//   console.log(e.target.files[0]);
				this.file1 = e.target.files[0];
			},
			//隐藏提示框
			hidden() {
				this.uptextshoe = false;
			},
		},
	};
</script>

<style scoped>
	.Personal-right {
		width: 80%;
		/* border: 1px solid #F4A460; */
		box-sizing: border-box;
	}

	.btn {
		width: 900px;
		height: 55px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.line {
		width: 90%;
		height: 1px;
		box-sizing: border-box;
		border: 0.5px solid #b8bbba;
		background-color: #b8bbba;
		margin-top: 10px;
	}

	#xuanzhong {
		background-color: #66a6e0;
		color: #dee1b5;
	}

.upfile-box{
	width: 50px;
	height: 50px;
	border: 1px solid cadetblue;
	box-sizing: border-box;
	border-radius: 40px;
	/* display: flex;
	align-items: center;
	justify-content: center; */
	cursor: default;
	position: relative;
}
.upfile-box p{
	width: 25px;
	height: 25px;
	line-height: 25px;
	text-align: center;
	border-radius: 15px;
	font-size: 30px;
	margin: 0;
	left: 12.5px;
	top: 12.5px;
	position: absolute;
}
.upfile-box input {
	width: 25px;
	height: 25px;
	position: absolute;
	left: 10px;
	top: 10px;
	opacity: 0;
	z-index: 9999;
}

.int-box{
	width: ;
}
	.content {
		margin-top: 20px;
		width: 90%;
		height: 400px;
		/* background-color: #B8BBBA; */
		box-sizing: border-box;
		padding: 5px 10px;
		/* float: left; */
		display: flex;
		flex-wrap: wrap;
	}

	.img-box {
		width: 24%;
		height: 200px;
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
	/* 图片上传成功的提示文字 */
	#updescription {
		position: absolute;
		right: 300px;
		width: 200px;
		background-color: #d19b70;
	}
</style>
