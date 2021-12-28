<script setup lang="ts">
import { ref } from 'vue';
import VSkeletonLoader from './components';

const isLoaded = ref(false);
const loaded = () => {
  isLoaded.value = true;
};
</script>

<template>
  <div style="width: 300px">
    <VSkeletonLoader v-show="!isLoaded" type="avatar, paragraph"> </VSkeletonLoader>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
