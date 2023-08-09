<script setup>
import { useMainStore } from '@/stores/mainStore';

const store = useMainStore();
</script>

<template>
  <header class="main-header">
    <div class="image">
      <img src="@/assets/images/bg-sidebar-mobile.svg" />
    </div>
    <div class="steps">
      <div
        class="step"
        :class="{ active: store.currentStep === step }"
        v-for="step in 4"
        :key="step"
      >
        {{ step }}
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.main-header {
  position: relative;
  .image {
    position: relative;
    z-index: 1;
    img {
      width: 100%;
    }
  }
  .steps {
    display: flex;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    > *:not(:last-child) {
      margin-right: 12px;
    }
    .step {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      border: 1px solid #fff;
      color: white;
      font-size: 14px;
    }
    .active {
      color: black;
      background-color: $lightBlue;
    }
  }
}
</style>
