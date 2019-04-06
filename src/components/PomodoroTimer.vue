<template>
  <div>
    <!-- <p>{{remainingTime}}</p> -->
    <button @click="startTimer">Start</button>
    
    <div>
      <time>{{remainingMinute}}</time>
      <span>:</span>
      <time>{{remainingSecondWithTwoDigit}}</time>
    </div>
    
  </div>
</template>

<script>

import { setTimeout } from 'timers';
export default {
  name: 'PomodoroTimer',
  data() {
    return {
      // 25 min * 60 sec = 1500 sec
      totalTime: 1500,
      remainingTime: 1500,
      remainingMinute: 25,
      remainingSecond: 0
    }
  },
  computed: {
    remainingSecondWithTwoDigit () {
      // give the leading 0
      return (this.remainingSecond < 10) ? ("0" + this.remainingSecond) : this.remainingSecond
    }
  },
  methods: {
    startTimer () {
      let self = this
      let now = Math.floor(Date.now() * 0.001)
      setTimeout(function cb () {
        let countUp = Math.floor(Date.now() * 0.001) - now
        self.remainingTime = self.totalTime - countUp
        self.remainingMinute = Math.floor(self.remainingTime / 60)
        self.remainingSecond = self.remainingTime % 60
        setTimeout(cb, 1000)
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
