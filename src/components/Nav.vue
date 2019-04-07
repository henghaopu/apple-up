<template>
  <div class="nav-container">
    <nav>
      <!-- <a href="/">Apple Up</a> -->
      <router-link to="/">Apple Up</router-link>
      <ul>
        <li>Sign Up</li>
        <li>Log In</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
// .nav-container {
  
// }
nav > a {
  // float: left;
  
  display: block;
  width: fit-content;
  padding: 10px;
  text-decoration: none;

}
nav > ul {
  float: right;
}
nav > ul > li {
  float: left;
}

</style>
