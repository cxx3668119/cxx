<template>
  <div class="BottomCom juzhong">
    <div class="Bottomcom juzhong">
      <div class="bottom coordination">
        <img src="../assets/img/youxiao.png" alt="">
        <h3>有效实现跨部门协同</h3>
        <p>SOC协同不同职能部门实现以用户为中心的业务运营，共同促进运营效率提升、收入增长及客户满意度提升。</p>
      </div>
      <div class="bottom coordination">
        <img src="../assets/img/latong.png" alt="">
        <h3>拉通客户需求及商业目标</h3>
        <p>对准商业目标，基于全生命周期视角识别影响用户体验的关键因素，提前改善用户体验，减少离网；通过差异化市场营销活动和客户服务，满足用户个性化体验需求，提升收入。</p>
      </div>
      <div class="bottom coordination">
        <img src="../assets/img/shineng.png" alt="">
        <h3>使能内外部变现</h3>
        <p>驱动运营商电信数据资产价值最大化。对内提升业务运营效率；对外提升自营业务和垂直行业业务体验变现能力。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomCom"
}
</script>

<style lang="scss">
@import "../assets/css/success.scss";
.Bottomcom {
  height: 400px;
  display: flex;
  margin-bottom: 95px;
}

.bottom {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 40px;
  /* background-color: blue; */
  position: relative;
  box-shadow: 0 0 10px #eeeeee;
}

.bottom:last-child {
  margin-right: 0;
}

.coordination img {
  width: 102px;
  height: 102px;
  margin-top: 52px;
}

.coordination h3 {
  color: #1c1c1c;
  font-size: 22px;
  font-weight: normal;
  margin-top: 28px;
}

.coordination p {
  font-size: 16px;
  color: #1c1c1c;
  /* letter-spacing: 2px; */
  width: 336px;
  line-height: 28px;
  margin-top: 58px;
}
</style>