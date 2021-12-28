<template>
  <div>
    <div class="preload">
      <div v-for="element in preloadElements" :key="`element_${element}`" :class="element" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { type } = defineProps({
  type: String,
});

const preloadElements = computed(() =>
  type?.split(',').reduce((acc, item) => {
    const currentType = item.trim();

    let result = [...acc];
    if (currentType === 'sentences') {
      result = [...result, 'text', 'text'];
    } else if (currentType === 'paragraph') {
      result = [...result, 'text', 'text', 'text'];
    } else {
      result = [...result, currentType];
    }

    return result;
  }, [] as string[]),
);
</script>

<style lang="scss" scoped>
.preload {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  div {
    width: 100%;
    height: 100%;
    background: lightgray;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0) 80%
      ),
      lightgray;
    background-repeat: repeat-y;
    background-size: 200px 200px;
    background-position: 0 0;
    animation: shine 1.5s infinite;
    &.avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    &.text {
      width: auto;
      height: 1.5rem;
    }
  }
}

@keyframes shine {
  to {
    background-position: 150% 0, 0 0;
  }
}
</style>
