<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'VueVideoTalk',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  background-color: antiquewhite;
}
</style>
