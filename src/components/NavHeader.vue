<template>
<!-- 头部组件 -->
  <header class="content">
    <div class="container">
      <img src="../assets/img/logo.png" alt="" class="logo">

      <div class="username fonts right " >用户名</div>
      <div class="contact fonts right ">联系我们</div>
      <div class="chinese fonts right ">简体中文
        <img src="../assets/img/xiala.png" alt="" class="xiala">
      </div>
      <div class="search ">
        <input type="text">
        <!-- 搜索小图标 -->
        <div class="search1"></div>
      </div>
    </div>
    <div class="test"></div>
  </header>
</template>

<script>
export default {
  name: 'NavHeader',
}
</script>

<style lang="scss">
@import "../assets/css/base.scss";
.content {
  width: 100%;
  height: 50px;
  background-color: #152033;
  .container {
    position: relative;
    height: 50px;
    .logo {
      float: left;
      width: 162px;
      margin-top: 15px;
      margin-left: 0;
    }

    .search {
      position: relative;
      float: right;
      margin-right: 20px;
      input {
        width: 200px;
        height: 50px;
        background-color: #444d5c;
        outline: none;
        color: #fff;
        font-size: 26px;
      }
    }
    /* 搜索小图标 */
    .search1 {
      position: absolute;
      top: 15px;
      right: 12px;
      width: 21px;
      height: 21px;
      background: url("../assets/img/sousuo.png");
      z-index: 2;
    }

    .username {
      height: 50px;
      margin-right: 0px;
    }

    .chinese {
      margin-right: 20px;
    }
    .contact {
      margin-right: 20px;
    }

    .fonts {
      display: inline-block;
      color: #fff;
      font-size: 14px;
      line-height: 50px;
      text-align: center;
    }

    .xiala {
      margin-left: 8px;
      width: 15px;
      height: 8px;
      cursor: pointer;
    }
  }
}
.test {
  height: 2000px;
}
</style>