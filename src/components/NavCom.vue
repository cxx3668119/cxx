<template>
  <!-- Nav导航组件 -->
  <div class="content1">
    <nav class="clear juzhong">
      <div class="navcontent clear">
        <div class="regard " @mouseenter="iteamArrShow()" @click="gotoindex()" @mouseleave="iteamArrHid() ">关于华为SmartCare
          <div class="iteamArr iteamArr1">
            <a href="#"> HUAWEI SmartCare</a>
            <a href="#" style="width:150px"> 快讯 </a>
            <a href="#"> 成功案例</a>
          </div>
        </div>
        <div class="regard " @mouseenter="iteamArrShow1()" @mouseleave="iteamArrHid1()" @click="gotoexperience()">应用市场</div>
        <div class="iteamArr iteamArr2" style="margin-left:212px">
          <a href="#"> 所有商品</a>
          <a href="#" style="width:150px"> 新品 </a>
          <a href="#" style="width:150px"> 梅品</a>
        </div>
        <div class="regard " @click="gotoDevelopment()">应用开发中心</div>
        <div class="regard " @click="gotoforum()">社区论坛</div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavCom",
  methods: {
    iteamArrShow() {
      document.querySelector('.iteamArr1').style.display = "block";
    },
    iteamArrHid() {
      document.querySelector('.iteamArr1').style.display = "none";
    },
    iteamArrShow1() {
      document.querySelector('.iteamArr2').style.display = "block";
    },
    iteamArrHid1() {
      document.querySelector('.iteamArr2').style.display = "none";
    },
    gotoexperience() {
      this.$router.replace('/experience')
    },
    gotoDevelopment() {
      this.$router.replace('/development')
    },
    gotoforum() {
      this.$router.replace('/forum')
    },
    gotoindex() {
      this.$router.replace('/index')

    }
  },
}
</script>

<style lang="scss">
@import "../assets/css/base.scss";
@import "../assets/css/font.scss";
.content1 {
  width: 100%;
  .navcontent {
    width: 1280px;
    height: 68px;
    margin: 0 auto;
    position: relative;
    z-index: 5;
  }

  .iteamArr {
    width: 212px;
    background: #fff;
    position: absolute;
    top: 60px;
    padding-left: 22px;
    left: 0px;
    display: block;
    a {
      font: 400 16px/20px "fzltxh";
      padding: 26px 0;
      cursor: pointer;
      color: #707070;
      display: block;
      text-decoration: none;
      float: left;
    }
    a:hover {
      color: #366bfc;
    }
  }
  .regard {
    float: left;
    height: 68px;
    color: #1c1c1c;
    font-size: 20px;
    line-height: 68px;
    font-weight: 500;
    font-family: "fzltxh";
    margin-right: 90px;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
  }

  .regard:hover {
    color: #c7000b;
    border-bottom: 2px solid #c7000b;
  }

  .iteamArr1,
  .iteamArr2 {
    display: none;
  }
}
</style>