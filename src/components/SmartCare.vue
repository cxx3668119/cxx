<template>
  <div class="SmartCare juzhong">
    <div class="news " style="padding-bottom: 15px;">
      <div class="anli juzhong" style="width: 350px;margin-top: 120px;">HUAWEI SmartCare®</div>
      <div class="hengxian1 juzhong"></div>
    </div>
    <p class="juzhong">HUAWEI SmartCare® SOC解决方案旨在建立以C.P.P.P（标准，人员，流程，平台）为基础的业务运营中心（SOC：Service Operations
      Center），帮助运营
      商实现向以利润为导向和以用户为中心的业务运营转型。</p>
    <div class="video juzhong">
      <img src="../assets/img/shipin.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartCare'
}
</script>

<style lang="scss">
@import "../assets/css/base.scss";

.SmartCare {
  position: relative;
}

.SmartCare p {
  color: #1c1c1c;
  font-size: 18px;
  margin-bottom: 35px;
}

.video img {
  height: 720px;
  cursor: pointer;
  padding-bottom: 45px;
}
</style>