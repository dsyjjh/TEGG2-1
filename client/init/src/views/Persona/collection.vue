<template>
  <div class="Personal-right">
    <div class="btn">
      <!-- <p id="xuanzhong" @click="fn('register')">我的收藏库</p> -->
      <!-- <p>我的上传作品</p> -->
    </div>
    <div class="line"></div>
    <div class="content">
      <div v-for="(el,index) in data1" class="img-box" :key="index">
        <img :src="el.upimgsrc" />
        <span>{{el.imgtitle}}</span>
        <span style="position: relative;
  right: -50px;">类型:{{el.imgtype}}</span>
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
    this.$axios.get("/getcollectionProduction").then((res) => {
      console.log("用户所有收藏的图片", res.data);
      this.data1 = res.data;
    });
  },
};
</script>

<style scoped>
.Personal {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  box-sizing: border-box;
  padding-top: 20px;
}
.Personal-left {
  width: 200px;
  height: 688px;
  background-color: #f4f8f7;
  border-radius: 5px;
  transition: all 0.5s;
}
.Personal-left:hover {
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.48), 0 6px 14px rgba(0, 0, 0, 0.32);
}
.Personal-ties {
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  padding-top: 30px;
  font-family: "arial black";
  margin-bottom: 10px;
}
.Personal-info {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Personal-info img {
  width: 120px;
  height: 120px;
  border-radius: 60px;
}

.hooby {
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button-content {
  width: 100px;
  height: 30px;
  background-color: #5cd36c;
  font-size: small;
  line-height: 30px;
  text-align: center;
  position: relative;
  margin-bottom: 10px;
}
.button-content:before {
  content: "";
  width: 20px;
  height: 0%;
  border: 15px solid;
  border-color: transparent #d19b70 transparent transparent;
  position: absolute;
  right: 100px;
  top: 0px;
}

.Personal-right {
  width: 80%;
  /* border: 1px solid #F4A460; */
  box-sizing: border-box;
}
.btn {
  width: 400px;
  height: 55px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btn p {
  display: inline-block;
  width: 160px;
  height: 50px;
  border-radius: 25px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  background-color: #eff2f2;
  color: #b8bbba;
  cursor: pointer;
}
.btn p:hover {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.49), 0 2px 5px rgba(0, 0, 0, 0.44);
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