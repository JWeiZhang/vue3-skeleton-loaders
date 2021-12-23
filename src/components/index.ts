import { App } from '@vue/runtime-core';
import VSkeletonLoader from './VSkeletonLoader.vue';

VSkeletonLoader.install = (Vue: App) => {
  Vue.component('VSkeletonLoader', VSkeletonLoader);
};

export default VSkeletonLoader;
