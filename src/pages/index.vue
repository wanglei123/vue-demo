<template>
  <div ref="target" class="green">
    <HelloWorld msg="" />
    <h1 className="text-3xl font-bold underline">这是首页</h1>
    <div>{{ msg }}</div>
  </div>
  <div>{{ x }} {{ y }} {{ isOutside }}</div>
  <icon-account-box style="font-size: 2em; color: red" />
  <!-- A basic anchor icon from Phosphor icons -->
  <div class="i-ph-anchor-simple-thin" />
  <!-- An orange alarm from Material Design Icons -->
  <div class="i-mdi-alarm text-orange-400" />
  <!-- A large Vue logo -->
  <div class="i-logos-vue text-3xl" />
  <!-- Sun in light mode, Moon in dark mode, from Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- Twemoji of laugh, turns to tear on hovering -->
  <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
  <!--  自定义图标-->
  <div class="i-ion:add-circle-sharp" style="font-size: 2rem; color: red"></div>
</template>
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import IconAccountBox from '~icons/mdi/account-box'

const msg = ref('123')
const target = ref(null)
const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>
