<template>
    <div>
        <Banner></Banner>
        <Navbar></Navbar>
        <Newlist></Newlist>
    </div>
</template>

<script>
//require('./assets/js/flexible.js')
import Banner from '../components/banner.vue'
import Navbar from '../components/navbar.vue'
import Newlist from '../components/newslist.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Banner,Navbar,Newlist
  },
}
</script>

<style lang='scss'>
@import "../assets/style/b.scss";</style>
