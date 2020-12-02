<template>
<!-- 尾部组件 -->
  <footer>
    <!-- <div class="container"> -->
    <div class="footertop ">
      <div class="textArr">
        <a>华为官网</a>
        <a>华为商城</a>
        <a>华为云</a>
        <a>Support</a>
        <a>GSMA</a>
        <a>联系我们</a>
        <img src="../assets/img/zixun1.png" alt="" class="img1">
        <img src="../assets/img/youjian2.png" alt="" class="img2">
      </div>
    </div>
    <div class="footerbottom">
      <div class="juzhong" :style="{
        'height': '70px',
        'position': 'relative'}">
        <p class="footerbottomleft ">
          版权所有©华为软件技术有限公司2020保留一切 苏ICP备17040376号-32 苏B2-20130048号
        </p>
        <p class="footerbottombottom">苏公网备案32011402010008号</p>
        <a href="javascript::" class="footerbottomright">法律声音 | 隐私政策</a>
        <!-- <a class="footerbottomright">法律声音 | 隐私政策</a> -->
      </div>
    </div>
    <!-- </div> -->
  </footer>
</template>

<script>
export default {
  name: 'NavFooter',
}
</script>

<style lang="scss">
@import "../assets/css/base.scss";
footer {
  width: 100%;
  height: 200px;
  .footertop {
    height: 130px;
    background-color: #f4f4f4;
  }

  .footerbottom {
    height: 70px;
    background-color: #eeeeee;
  }

  .textArr {
    position: relative;
    width: 1145px;
    height: 24px;
    margin: 0px auto;
  }
  .textArr a {
    display: inline-block;
    margin-top: 57px;
    margin-right: 126px;
    color: #646464;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
  }
  .textArr a:hover {
    text-decoration: underline;
  }

  .textArr a:last-child {
    margin-right: 0px;
  }
  .img1 {
    width: 22px;
    height: 24px;
    float: left;
    position: absolute;
    top: 55px;
    right: 84px;
  }

  .img2 {
    width: 22px;
    height: 24px;
    float: left;
    position: absolute;
    top: 55px;
    right: 30px;
  }

  .footerbottomleft {
    height: 34px;
    font-size: 14px;
    color: #cecece;
    padding-top: 19px;
  }

  .footerbottombottom {
    height: 34px;
    font-size: 14px;
    color: #cecece;
    position: absolute;
    top: 38px;
    left: 0;
  }

  .footerbottomright {
    height: 34px;
    font-size: 14px;
    color: #cecece;
    position: absolute;
    top: 19px;
    right: 0;
    text-decoration: none;
  }
  .footerbottomright:hover {
    text-decoration: underline;
  }
}
</style>