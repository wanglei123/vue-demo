<template>
  <div>
  <p>
    <router-link to="/">首页</router-link>
    <router-link to="/about">about</router-link>
  </p>
    default layout
    <router-view />
    <p>footer</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>