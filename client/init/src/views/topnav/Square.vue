<template>
    <div>
		<Top></Top>
        <div class="touxiang">

        </div>
        <div class="shequ">
            <h2>广场</h2>
            <div class="tubiao">
                <img src="@/assets/jiantou.png" style="margin: auto;">
            </div>
        </div>
        <div class="zuopin">
            <div v-for="(al,index) in arr" :key="index" style="margin: 10px 40px;">
                <p> {{al.txt}}</p>
                <img :src="al.img">
                <div class="tubiao2">
                    <img src="@/assets/love.png">
                    <div>
                        <span>喜欢：{{al.xihuan}}</span>
                    </div>
                    <img src="@/assets/liulan.png" style="margin-left: 10px;">
                    <div>
                        <span>浏览量：{{al.liulan}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="luntan">
            <div style="text-align: center;">
                <h1>论坛 / luntan</h1>
            </div>
            <div style="width: 1224px; height: 2px;background-color: khaki;margin-left: 38px;"> </div>
            
            <div style="display: flex;">
                <div class="luntan1">
                    <div>
                        <div>
                            <span>|</span>
                            <span>索尼相机</span>
                            <span>|</span>
                            <span>2020/9/12</span>
                        </div>

                        <img
                            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=126958151,1056147179&fm=26&gp=0.jpg">
                    </div>
                    <div>
                        <div>
                            <span>|</span>
                            <span>laika相机</span>
                            <span>|</span>
                            <span>2020/9/12</span>
                        </div>

                        <img
                            src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00670-4263.jpg">
                    </div>
                    <div>
                        <div>
                            <span>|</span>
                            <span>尼kang相机</span>
                            <span>|</span>
                            <span>2020/9/14</span>
                        </div>

                        <img
                            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1921866217,1774386020&fm=26&gp=0.jpg">
                    </div>
                    <div>
                        <div>
                            <span>|</span>
                            <span>SAMSUNG相机</span>
                            <span>|</span>
                            <span>2020/9/18</span>
                        </div>

                        <img
                            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2501344271,2858374089&fm=26&gp=0.jpg">
                    </div>
                </div>
                <div>
                    <ul style="margin: 50px 0;">
                        <li style="font-size: 30px; margin-left: 150px;">\二手论坛/</li>
                        <li><a href="#">1.[北京]出尼康D3s，24-70一代，70-200二代，600 f4/G</a></li>
                        <li><a href="#">2.出一手自用佳能EOS 1DX一代旗舰</a></li>
                        <li><a href="#">3.尼康40-400 1:4-5.6 G ED （二代）个人一手状况好包装附件全</a></li>
                        <li><a href="#">4.富士 X-T3 机身 + 35mm f2</a></li>
                        <li><a href="#">5.尼康  55  2.8  ais版微距镜头  媲美百微  超越  55   3.5</a></li>
                        <li><a href="#">6.成像出色 机动性强 佳能RF100-500mm F4.5-7.1 L IS USM试用</a></li>

                    </ul>
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
                arr: [{ img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1828635773,2025381406&fm=26&gp=0.jpg", txt: "这是一段描述", xihuan: 1250, liulan: 5651 },
                { img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1828635773,2025381406&fm=26&gp=0.jpg", txt: "这是一段描述", xihuan: 1250, liulan: 5651 },
                { img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1828635773,2025381406&fm=26&gp=0.jpg", txt: "这是一段描述", xihuan: 1250, liulan: 5651 },
                { img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1828635773,2025381406&fm=26&gp=0.jpg", txt: "这是一段描述", xihuan: 1250, liulan: 5651 },]
            }
        },
		components: {
			Top
		}
    }
</script>

<style scoped>
    .touxiang {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        border-radius: 50%;
        background: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3495753411,3600431550&fm=26&gp=0.jpg");
        background-position: center;
        background-size: cover;
    }

    .xiantian {
        width: 400px;
        height: 2px;
        background-color: grey;

    }

    .zuopin {
        width: 1300px;
        margin: 0 auto;
        /* background-color: bisque; */
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }


    .tubiao {
        width: 40px;
        height: 40px;
        background-color: palevioletred;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }

    .tubiao2 {
        width: 400px;
        display: flex;
    }

    .tubiao2 img {
        width: 20px;
        height: 20px;
    }

    .tubiao img {
        width: 30px;
        height: 30px;
    }

    .shequ {
        width: 50px;
        margin: 0 auto;
    }
.luntan{
    width: 1300px;
    margin: 200px auto;
}
    .luntan1 {
        width: 700px;
        display: flex;
        flex-wrap: wrap;
        margin: 0 20px;
        
    }
    .luntan1 div{
        margin: 10px;
    }
    .luntan1 img {
        width: 300px;
        height: 200px;
        transition: all .5s;
    }
    .luntan1 img:hover{
        transform: scale(1.07);
    }
    li{
        list-style: none;
        margin: 40px 0;
        font-size: 20px;
    }
    a{
        text-decoration: none;
        color: gray;
    }
    
</style>