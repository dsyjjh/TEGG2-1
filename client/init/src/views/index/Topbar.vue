<template>
  <div class="box">
    <div class="nav-top" v-if="!showname">
      <div class="logo-box">
        <img class="logoimg" src="@/assets/TEGG.png" />
        <span>{{title}}</span>
      </div>

      <div class="login-box">
        <router-link to="/login" class="p1" @click="showUser">{{msg}}</router-link>
        <img :src="imgurl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      title: "鸵鸟摄影网",
      imgurl: "",
      showname: false,
    };
  },
  components: {},
  methods: {
    showUser() {},
  },
  mounted() {
    // this.$root.$off('isadmin');
    // this.$root.$on('isadmin',(val)=>{
    // 	if(val=='admin'){
    // 		this.showUser = true;
    // 	}else{
    // 		this.showUser = false;
    // 	}
    // })

    console.log("导航栏6666666");
    this.$axios.get("/userinfo").then((res) => {
      console.log("6666666", res.data);
      if (res.data[0]) {
        this.imgurl = res.data[0].img;
        this.msg = res.data[0].username;
      } else {
        this.imgurl = "http://localhost:7001/public/upload/touxiang.jpg";
        this.msg = "未登录";
      }
    });
  },
};
</script>

<style>
.box {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
}
.nav-top {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background-color: #cccccc;
  border: 1px solid #cccccc;
  padding: 0 8%;
  display: flex;
  justify-content: space-between;
}
.logo-box {
  width: 140px;
  height: 40px;
  box-sizing: border-box;
  text-align: center;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.logo-box span {
  display: inline-block;
  height: 40px;
  line-height: 50px;
  /* color: #2CAEFF; */
  /* font-size: 14px; */
}
.logo-box img {
  height: 50px;
  width: 50px;
  padding-top: 8px;
  /* opacity: 0.5; */
  border-radius: 30%;
}

.login-box {
  width: 150px;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.login-box img {
  width: 45px;
  height: 45px;
  border-radius: 20px;
  margin-top: 8px;
}
.p1 {
  font-size: 14px;
  text-decoration: none;
  padding-top: 8px;
  position: relative;
  left: 15px;
}
</style>
