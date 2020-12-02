<template>
  <div class="home">
    <nav-header></nav-header>
    <nav-com></nav-com>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'
import NavCom from '../components/NavCom.vue'

export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter,
    NavCom
  }
}
</script>
