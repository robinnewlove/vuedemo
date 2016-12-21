<template>
    <div>
    <router-view></router-view>    
  </div>
</template>

<script>
//require('./assets/js/flexible.js')
import Navbar from './components/navbar.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Navbar
  },
}
</script>

<style lang='scss'>
@import "./assets/style/b.scss";</style>
