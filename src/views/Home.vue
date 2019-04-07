<template>
  <div class="home">
    <!-- <Nav/> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <PomodoroTimer/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Nav from '@/components/Nav.vue'
import PomodoroTimer from '@/components/PomodoroTimer.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
    // Nav,
    PomodoroTimer
  }
}
</script>

<style lang="scss" scoped>

</style>

