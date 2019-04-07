<template>
  <div class="apple-editing container">
    <h2 class="center-align">Put the Apple in the Basket</h2>
    <form @submit.prevent="">
      
      <div class="">
        <label for="Goal">Goal</label>
        <input type="text" id="Goal" placeholder="Workout">
      </div>
     
      <div class="">
        <label for="reward">Reward</label>
        <input type="text" id="reward" placeholder="Eat two Whoppers">
      </div>

      <div class=" center-align">
        <a class="btn btn-finish" ontouchstart="" href="/">Keep Going!</a>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'AppleEditing',
  data() {
    return {
        
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.apple-editing, #Goal, #reward {
  font-family: 'Gloria Hallelujah', cursive;
}
.apple-editing > h2 {
  font-size: 2rem;
  margin: 1.25rem auto;
}
.btn-finish {
  font-family: 'Gloria Hallelujah', cursive;
  background-color: #c38455;
}
</style>
