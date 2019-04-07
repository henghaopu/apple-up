<template>
  <div class="background">
    <!-- <p>{{remainingTime}}</p> -->
    <section class="tree-container">
      <a @click="startTimer" href=""><img src="../assets/creep-tree.svg" alt=""></a>
    </section>
    <!-- <div class="tree-shape"></div> -->
    <section class="basket-container">
      <a href=""><img src="../assets/basket.svg" alt=""></a>
    </section>

    <section class="time-container">
      <time>{{remainingMinuteWithTwoDigit}}</time>
      <span>:</span>
      <time>{{remainingSecondWithTwoDigit}}</time>
    </section>
    
  </div>
</template>

<script>
// 25 min * 60 sec = 1500 sec
const defaultTotalTimeInSecond = 1500
import { setTimeout, clearTimeout } from 'timers';
export default {
  name: 'PomodoroTimer',
  data() {
    return {
      remainingTime: defaultTotalTimeInSecond,
      remainingMinute: null,
      remainingSecond: null
    }
  },
  computed: {
    remainingMinuteWithTwoDigit () {
      let min = Math.floor(this.remainingTime / 60)
      return (min < 10) ? ("0" + min) : min
    },
    remainingSecondWithTwoDigit () {
      // give the leading 0
      let sec = this.remainingTime % 60
      return (sec < 10) ? ("0" + sec) : sec
    }
  },
  methods: {
    startTimer () {
      let self = this
      let now = Math.floor(Date.now() * 0.001)
      let timeout = setTimeout(function cb () {
        let countUp = Math.floor(Date.now() * 0.001) - now
        self.remainingTime = defaultTotalTimeInSecond - countUp
        self.remainingMinute = Math.floor(self.remainingTime / 60)
        self.remainingSecond = self.remainingTime % 60
        if (self.remainingTime === 0) {
          clearTimeout(timeout)
        } else {
          setTimeout(cb, 1000)
        }
      }, 1000)
    }

  }
}
</script>

<style lang="scss" scoped>

// .tree-container {
//   width: 100%;
//   text-align: center;
// }
.background {
  // display: grid;
  position: relative;
  background-color: #4dd8e6;
  height: 100vh; 
  // background-image: url("../assets/background.svg");
}

.tree-container {
  display: grid;
  // position: relative;  
  height: 100%; 
}
.tree-container:hover {

}
.tree-container > a {
  display: table-cell;
  place-self: center;
}
.tree-container > a > img {
  
  // height: 100%;
  width: 100%;
  // display: block;
  // width: 305px;
  // margin: 0 auto;
}
.tree-shape {
  
}
.basket-container {
  position: absolute;
  bottom: 80px; 
  right: 50px;
}
.basket-container > a > img {
  width: 80px;
}

.time-container { 
  z-index: 101;
  position: absolute;
  bottom: 50px; 
  text-align: center;
  font-family: 'Gloria Hallelujah', cursive;
  // color: #ffc6ce;
  color: #744b44;
  font-size: 26px;
  margin: 0 auto;
  width: 100%;
  // right: 50%;
  
  // margin: 0 auto;
}

@media screen and (min-width: 375px) {
  .tree-container > a > img {
    display: block;
    width: 360px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 425px) {
  .tree-container > a > img {
    z-index: 100;
    display: block;
    width: 410px;
    margin: 0 auto;
  }
  .time-container {
    font-size: 32px;
  }
}

@media screen and (min-width: 768px) {
  .tree-container > a > img {
    display: block;
    width: 700px;
    margin: 0 auto;
  }
  .time-container {
    // font-size: 36px;
  }
}

</style>
