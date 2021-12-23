<template>
  <div>
    <div v-show="!isLoaded" class="preload">
      <div v-for="element in preloadSetting.count" :key="`element_${element}`" :class="preloadSetting.type" />
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots, computed, App } from 'vue';

const { default: slots } = useSlots();
const { type } = defineProps({
  type: String,
});

const preloadSetting = computed(() => {
  const setting = { type, count: 1 };
  if (type === 'sentences') {
    setting.count = 2;
    setting.type = 'text';
  } else if (type === 'paragraph') {
    setting.count = 3;
    setting.type = 'text';
  }

  return setting;
});

const isLoaded = ref(false);

const loaded = () => {
  isLoaded.value = true;
};

if (slots) {
  const slotsElements = slots();
  if (slotsElements) {
    slotsElements.forEach((item) => {
      if (item && item.props) {
        item.props.onLoad = loaded;
      }
    });
  }
}
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
