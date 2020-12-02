<template>
  <div>
    <div class="lunbo">
      <div>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide>
            <img src="../assets/img/banner1.png" alt="" width="100%">
            <!-- 轮播内框 -->
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/img/banner2.png" alt="" width="100%">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/img/banner3.png" alt="" width="100%">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/img/banner4.png" alt="" width="100%">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="product product1 clear">
        <div class="boutique">
          <div class="jingpin">精品推荐</div>
          <div class="hengxian"></div>
        </div>
        <!-- 管理模块 -->
        <div class="manage">
          <div class="OTT manage1 left">
            <img src="../assets/img/zu29.png" alt="" class="manageimg">
            <div class="tit">OTT体验管理</div>
            <div class="titl">“OTT体验管理”方案是面向互联网热点OTT（浏览类、视频类、IM类等），进行业务质量管理、监控、告警、分析的整体解决方案。</div>
            <a href="#" class="title">了解详情></a>
          </div>

          <div class="VOLTE manage1 left">
            <img src="../assets/img/zu30.png" alt="" class="manageimg">
            <div class="tit">VOLTE体验管理</div>
            <div class="titl">通过可视、可管、可回溯、可闭环的VoLTE体验保障方案，构建VoLTE高清体验的最佳管理抓手，保障VoLTE用户增长和用户满意度。</div>
            <a href="#" class="title">了解详情></a>
          </div>

          <div class="CCA manage1 left">
            <img src="../assets/img/zu31.png" alt="" class="manageimg">
            <div class="tit">CCA</div>
            <div class="titl">提供投诉处理“速定界引擎”，并与客服中心投诉系统集成，帮助客服人员快速准确界定影响用户体验的端、管、云问题。</div>
            <a href="#" class="title">了解详情></a>
          </div>

          <div class="loT manage1 left">
            <img src="../assets/img/IoT.png" alt="" class="manageimg">
            <div class="tit">loT业务质量管理</div>
            <div class="titl">建立一套物联网的指标体系，将从单纯的网络指标，向业务侧细化。打造物联网场景下四大核心能力（业务识别、指标体系、异常检测、快速定界），解决客户“看不全面”</div>
            <a href="#" class="title">了解详情></a>
          </div>
        </div>
      </div>

      <!-- 查看更多 -->
      <div class="moremo juzhong">
        <div class="more">查看更多</div>
      </div>

      <!-- 新品推荐 -->
      <div class="product clear">
        <div class="boutique">
          <div class="jingpin">新品推荐</div>
          <div class="hengxian"></div>
        </div>
        <!-- 管理模块 -->
        <div class="manage clear">
          <div class="OTT manage1 left">
            <img src="../assets/img/zu61.png" alt="" class="manageimg">
            <div class="tit">Smart Insight</div>
            <div class="titl">通过统一的网络洞察解决方案—Smart insight，为运营商提供可快速交付的交互式地理可视化网络洞察解决方案。通过在全球的运营经验总结，为运营商在用户/业务</div>
            <a href="#" class="title">了解详情></a>
          </div>

          <div class="VOLTE manage1 left">
            <img src="../assets/img/z330.png" alt="" class="manageimg ">
            <div class="tit">CWR-精准规划</div>
            <div class="titl">引入话务预测，结合价值排序等关键技术，网络规划从漫灌到滴灌，由投资驱动转向价值驱动。</div>
            <a href="#" class="title">了解详情></a>
          </div>

          <div class="CCA manage1 left">
            <img src="../assets/img/z31.png" alt="" class="manageimg">
            <div class="tit">小区一体化体验管理</div>
            <div class="titl">通过小区级用户体验与网络性能的监控与分析，KQI与KPI异常事件关联对告警进行关联分析，关联结果将协助网优工程师定位问题并闭环。</div>
            <a href="#" class="title">了解详情></a>
          </div>

          <div class="loT manage1 left">
            <img src="../assets/img/zu32.png" alt="" class="manageimg">
            <div class="tit">数字化自动投诉</div>
            <div class="titl">面向终端用户的数字化自助投诉解决方案，方案采用独特的双引擎架构（自助微引擎和速定界引擎）以及DCC移动端、DCC服务端和SEQ大平台（可选）三位一体相结合的</div>
            <a href="#" class="title">了解详情></a>
          </div>
        </div>
      </div>
      <!-- 查看更多 -->
      <div class="moremo juzhong">
        <div class="more">查看更多</div>
      </div>

      <!-- 快讯 -->
      <div class="product product1 clear" style="height:728px">
        <div class="boutique" style="margin-bottom:30px">
          <div class="jingpin" style="width">快讯</div>
          <div class="hengxian"></div>
        </div>

        <div class="juzhong clear" style="height:728px">

          <div class="zuo  left">
            <img src="../assets/img/has2020_banner.png" alt="" class="has2020">
          </div>

          <div class="you  left">
            <div class="shang">
              <h4>HAS 2020 全球分析师大会</h4>
              <p>共创共赢，构建万物互联的智能世界 </p>
              <div class="btn">了解更多</div>
            </div>
            <div class="xia">
              <img src="../assets/img/02.png" alt="" style=" width: 280px;" class="left">
              <div class="Anti left">
                <img src="../assets/img/infobanner3.png" alt="">
                <p>共克时艰，科技抗疫</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- 成功案例 -->

      <div class="success clear">
        <div class="successtit">成功案例</div>
        <div class="successbr"></div>
        <div class="successpot juzhong">
          <div class="sucontent">
            <a href="#" class="aa">
              <img src="../assets/imageSuccess/success1.jpg" alt="">

              <div class="sutext">马来西亚</div>
              <div class="sutext2">马来Celcom创新UC获得价值认可</div>
            </a>

          </div>
          <div class="sucontent">
            <a href="#" class="aa">
              <img src="../assets/imageSuccess/success2.jpg" alt="">
              <div class="sutext">土耳其</div>
              <div class="sutext2"> 土耳其Turkcell长话路由优选入生产流</div>
            </a>
          </div>
          <div class="sucontent">
            <a href="#" class="aa">
              <img src="../assets/imageSuccess/success3.jpg" alt="">

              <div class="sutext">科威特</div>
              <div class="sutext2"> 科威特VIVA持续改进提升投诉处理效率</div>
            </a>
          </div>
          <div class="sucontent">
            <a href="#" class="aa">
              <img src="../assets/imageSuccess/success4.jpg" alt="">

              <div class="sutext">埃及</div>
              <div class="sutext2">埃及ET SOC项目通过已建立的客户粘性，成功引导完成扩容</div>
            </a>
          </div>
        </div>
      </div>

      <smart-care></smart-care>
      <bottom-com></bottom-com>
      <!-- ----------------------------------------------------- -->
    </div>
  </div>

</template>

<script>
import SmartCare from "../components/SmartCare"
import BottomCom from "../components/BottomCom"
export default {
  name: 'Index',
  name: 'carrousel',
  components: {
    SmartCare,
    BottomCom,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        // Some Swiper option/callback...
        loop: true,//
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(1, 1000, true)
  }
}
</script>

<style lang="scss">
@import "../assets/css/success.scss";
.sucontent {
  display: flex;
  height: 422px;
  flex: 1;
  margin-right: 4px;
  background: url("../assets/imageSuccess/bg-success.jpg") no-repeat center
    center / 100% 100%;
}

.lunbo {
  position: relative;
  .swiper-slide {
    img {
      float: left;
    }
  }
}
.product {
  width: 1280px;
  height: 520px;
  margin: 64px auto 0px;
  .boutique {
    width: 133px;
    margin: 0px auto;
  }
  .hengxian {
    height: 20px;
    width: 80px;
    margin: 0px auto !important;
    border-bottom: 1px solid #c7000b;
  }
}

.product1 {
  margin-bottom: 84x;
}

.jingpin {
  color: #1c1c1c;
  font-size: 32px;
  font-weight: 500;
  font-family: "fzlt";
  text-align: center;
}

.manage {
  width: 1280px;
  /* height: 440px; */
  margin: 30px auto 126px;
  a {
    color: #2ca84b;
  }
}

/* 精品推荐小模块 */
.manage1 {
  width: 308.75px;
  height: 440px;
  margin-right: 15px;
  border: 1px solid #ececec;
  box-sizing: border-box;
}

.manage1:last-child {
  margin-right: 0;
}

.manageimg {
  width: 100%;
  height: 200px;
}

/* 推荐模块第一行文字 */
.tit {
  position: absolute;
  top: 245px;
  left: 24px;
  color: #333333;
  font-size: 18px;
  font-weight: 700;
}

.OTT {
  position: relative;
}

.VOLTE {
  position: relative;
}

.CCA {
  position: relative;
}

.loT {
  position: relative;
}

/* 推荐模块第2行文字 */
.titl {
  color: #707070;
  position: absolute;
  font-size: 14px;
  top: 285px;
  left: 24px;
  width: 270px;
  height: 110px;
}

/* 推荐模块第3行文字 */
.title {
  color: #1c1c1c;
  font-size: 16px;
  position: absolute;
  top: 400px;
  left: 24px;
}

.moremo {
  .more {
    display: inline-block;
    text-decoration: none;
    width: 119px;
    height: 40px;
    border: 1px solid #333;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 400 16px/16px "微软雅黑";
    color: #313131;
    margin: 40px auto 45px;
    cursor: pointer;
  }
  .more:hover {
    background-color: #c7000b;
    color: #fff;
  }
}

.kuaixun {
  width: 65px;
  height: 50px;
  font-size: 32px;
  line-height: 26px;
  color: #1c1c1c;
  box-sizing: border-box;
  border-bottom: 1px solid #c7000b;
}

.zuo {
  width: 658px;
  height: 728px;
  overflow: hidden;
  img {
    transition: 0.4s;
  }
  img:hover {
    transform: scale(1.1);
  }
}

.zuo img {
  width: 658px;
  height: 335px;
}

.you {
  width: 622px;
  height: 728px;
}

.shang {
  margin-left: 32px;
  width: 622px;
  height: 335px;
}

.shang h4 {
  font-size: 36px;
  font-weight: normal;
  color: #333333;
  line-height: 30px;
  margin-bottom: 45px;
}

.shang p {
  color: #707070;
  font-size: 18px;
  margin-bottom: 98px;
}

.btn {
  width: 110px;
  height: 40px;
  border: 1px solid;
  border-radius: 20px;
  color: #333333;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}

.xia {
  width: 622px;
  height: 380px;
  margin-left: 32px;
}

.Anti {
  margin-left: 32px;
}

.Anti img {
  width: 280px;
  height: 160px;
}

.Anti p {
  color: #333333;
  font-size: 18px;
  margin-top: 24px;
}
</style>