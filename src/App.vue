<script setup>
import StepOne from './components/StepOne.vue';
import StepTwo from './components/StepTwo.vue';
import Header from './components/Header.vue';
import Bottom from './components/Bottom.vue';

import { useMainStore } from '@/stores/mainStore';

const store = useMainStore();
</script>

<template>
  <main>
    <Header />
    <StepOne v-if="store.currentStep === 1" />
    <StepTwo v-if="store.currentStep === 2" />
    <Bottom />
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: 100vh;
}
</style>
