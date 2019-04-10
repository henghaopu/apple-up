<template>
  <div class="background">
    <!-- <p>{{remainingTime}}</p> -->
    <a href="/">Apple Up</a>
    <div class="record">
      <img src="../assets/apple-25-minute.svg" alt="">
      <p>x {{appleAmount}}</p>
    </div>

    <section class="tree-container">
      <a @click="startTimer"><img src="../assets/creep-tree.svg" alt=""></a>
    </section>
    <section class="apple-container">
      <!-- <a href="" v-if="remainingTime === 5 || remainingTime === 4"><img src="../assets/apple-15-minute.svg" alt="" :width="appleSize"></a>
      <a href="" v-if="remainingTime === 3 || remainingTime === 2"><img src="../assets/apple-20-minute.svg" alt="" :width="appleSize"></a> -->
      <!-- <a href="" v-if="remainingTime === 1 || remainingTime === 0"><img src="../assets/apple-25-minute.svg" alt="" :width="appleSize"></a> -->
      <a v-if="(remainingTime === 1 || remainingTime === 0) && (isStudyTime === false)" @click="addOne"><img src="../assets/apple-25-minute.svg" alt=""></a>
    </section>

    <!-- <section class="bubble-container">
      <img src="../assets/talk-bubble.svg" alt="">
    </section> -->

    <!-- <div class="tree-shape"></div> -->
    <section class="basket-container">
      <!-- <a href=""><img src="../assets/basket.svg" alt=""></a> -->
      <router-link :to="{name: 'apple-editing'}"><img src="../assets/basket.svg" alt=""></router-link>
    </section>
    <section class="basket-container-loca2">
      <router-link :to="{name: 'apple-editing'}"><img src="../assets/basket.svg" alt=""></router-link>
    </section>
    <section class="basket-container-loca3">
      <router-link :to="{name: 'apple-editing'}"><img src="../assets/basket.svg" alt=""></router-link>
    </section>


    <section class="time-container" @click="setUpStudyTime">
      <time>{{remainingMinuteWithTwoDigit}}</time>
      <span>:</span>
      <time>{{remainingSecondWithTwoDigit}}</time>
    </section>
    
    <button class="dev" @click="toZero">ZERO</button>

  </div>
</template>

<script>
// 25 min * 60 sec = 1500 sec
let defaultTotalTimeInSecond = 1500
import { setTimeout, clearTimeout } from 'timers';
export default {
  name: 'PomodoroTimer',
  data() {
    return {
      isStudyTime: true,
      // defaultTotalTimeInSecond: 1500,
      remainingTime: defaultTotalTimeInSecond,
      remainingMinute: null,
      remainingSecond: null,
      appleAmount: 0,
      timeout: null,
      appleSize: 0,
      // dom
      growingApple: null
    }
  },
  computed: {
    // remainingTime () {
    //   return this.defaultTotalTimeInSecond
    // },
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
  mounted () {
    this.growingApple = document.querySelector(".apple-container>a>img") 
    // console.log(this.growingApple)
  },
  methods: {
    startTimer () {
      // if (this.isStudyTime) {
      //   defaultTotalTimeInSecond = 1500
      //   this.remainingTime = 1500
      // } else {
      //   defaultTotalTimeInSecond = 300
      //   this.remainingTime = 300
      // }
      let self = this
      let now = Math.floor(Date.now() * 0.001)
      // set a condition to avoid triggering multiple times
      if (self.remainingTime === defaultTotalTimeInSecond) {
        this.timeout = setTimeout(function cb () {
          let countUp = Math.floor(Date.now() * 0.001) - now
          self.remainingTime = defaultTotalTimeInSecond - countUp
          self.remainingMinute = Math.floor(self.remainingTime / 60)
          self.remainingSecond = self.remainingTime % 60
          if (self.remainingTime === 0) {
            // take turn between studying and resting time
            if (this.isStudyTime) {
              this.isStudyTime = false
            } else {
              this.isStudyTime = true
            }
            // stop the timer
            clearTimeout(this.timeout)
          } else {
            // keep counting down
            self.timeout = setTimeout(cb, 1000)
          }
        }, 1000)
      }
    },
    // fiveSecondAnimation (second) {
    //   switch (second) {
    //     case 5: 
    //     case 4:
    //       this.appleSize = '15px'
    //       // eslint-disable-next-line
    //       console.log('test')
    //       // this.growingApple.src = '../assets/apple-5-minute.svg'
    //       // this.growingApple.style.width = '5px'
    //       break
    //     case 3:
    //     case 2:
    //       this.appleSize = '35px'
    //       // this.growingApple.src = '../assets/apple-15-minute.svg'
    //       // this.growingApple.style.width = '25px'
    //       break
    //     case 1:
    //     case 0:
    //       this.appleSize = '45px'
    //       // this.growingApple.src = '../assets/apple-20-minute.svg'
    //       // this.growingApple.style.width = '45px'
    //       break;
        
    //       // this.growingApple.src = '../assets/apple-25-minute.svg'
    //       // this.growingApple.style.width = '55px'
    //       // break;
    //   }
    // }
    addOne () {
      this.appleAmount++
      defaultTotalTimeInSecond = 300
      this.remainingTime = 300
    },
    toZero () {
      // only work when counting is still proceeding
      if (this.remainingTime !== 0 && this.remainingTime !== defaultTotalTimeInSecond) {
        if (this.isStudyTime) {
          this.isStudyTime = false
        } else {
          this.isStudyTime = true
        }
        // this.defaultTotalTimeInSecond = 0
        this.remainingTime = 0
        // *** doesn't work
        clearTimeout(this.timeout)
      }
    },
    setUpStudyTime () {
      if (this.remainingTime === 0 && this.isStudyTime) {
        defaultTotalTimeInSecond = 1500
        this.remainingTime = 1500
      }
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
  z-index: 100;
  // display: grid;
  position: relative;
  background-color: #4dd8e6;
  height: 100vh; 
  // background-image: url("../assets/background.svg");
}
.background > a {
  color: #000000;
  position: absolute;
  left: 0px;
  top: 0px;
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 24px;
  display: block;
  width: fit-content;
  padding: 15px;
  text-decoration: none;
}
.background > a:hover {
  color: green;
}
.background > a:active {
  color: orange;
}
// .background > a:link, .background > a:visited {
//   color: #b43b42;
// }

.record {
  position: absolute;
  right: 0px;
  top: 0px;
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 24px;
  margin-right: 15px;
}
.record > img {
  width: 50px;
}
.record > p {
  display: inline-block;
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
  cursor: pointer;
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
.apple-container {
  z-index: 1000;
  position: absolute;
  top: 30%;
  left: 50%;
}
.apple-container > a > img {
  width: 45px;
}
// .apple-container > a:first-child > img {
//   width: 20px;
// }
// .apple-container > a:nth-child(2) > img {
//   width: 35px;
// }
// .apple-container > a:nth-child(3) > img {
//   width: 45px;
//     // animation-name: growing-apple;
//   /* 25 min */
//   // animation-duration: 1500s;
// }
// @keyframes growing-apple {
// }
.bubble-container {
  position: absolute;
  bottom: 55vh;
  left: 52%;
}
.bubble-container > img {
  width: 160px;
}
.basket-container {
  position: absolute;
  bottom: 90px; 
  left: 55%;
}
.basket-container-loca2 {
  position: absolute;
  bottom: 85px; 
  left: 72%;
}
.basket-container-loca3 {
  position: absolute;
  bottom: 70px; 
  left: 63%;
}
.basket-container > a > img,
.basket-container-loca2 > a > img,
.basket-container-loca3 > a > img {
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
  font-size: 36px;
  margin: 0 auto;
  width: 100%;
  // right: 50%;
  
  // margin: 0 auto;
}
.dev {
  position: absolute;
  left: 0px;
  bottom: 0px;
  display: block;
  width: fit-content;
  background-color: transparent;
  border: 0px;
  color: transparent;

}
@media screen and (min-width: 375px) {
  .tree-container > a > img {
    display: block;
    width: 360px;
    margin: 0 auto;
  }
  .bubble-container {
    bottom: 55vh;
    left: 55%;
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
  .bubble-container > img {
    width: 200px;
  }
  .basket-container {
    bottom: 90px; 
    left: 65%;
  }
  .basket-container-loca2 {
    bottom: 85px; 
    left: 75%;
  }
  .basket-container-loca3 {
    bottom: 70px; 
    left: 70%;
  }
}

@media screen and (min-width: 768px) {
  .background > a { 
    font-size: 36px;
  }
  .tree-container > a > img {
    display: block;
    width: 700px;
    margin: 0 auto;
  }
  .time-container {
    font-size: 52px;
  }

  .apple-container > a > img {
    width: 75px;
  }  
  .bubble-container {
    position: absolute;
    bottom: 52vh;
    left: 60%;
  }
  .bubble-container > img {
    width: 360px;
  } 
  .basket-container {
    bottom: 10%;   
    left: 62%;      
  }
  .basket-container-loca2 {
    bottom: 8%; 
    left: 71%;
  }
  .basket-container-loca3 {
    bottom: 5%; 
    left: 66%;
  }
  .basket-container > a > img,
  .basket-container-loca2 > a > img,
  .basket-container-loca3 > a > img {
    width: 140px;
  }
}

</style>
