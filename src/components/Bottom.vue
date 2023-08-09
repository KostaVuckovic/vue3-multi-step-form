<script setup>
import { useMainStore } from '@/stores/mainStore';

const store = useMainStore();
</script>

<template>
  <div class="bottom-section">
    <button
      class="back-btn"
      @click="store.prevStep"
      v-if="store.currentStep > 1"
    >
      Go Back
    </button>
    <button
      class="next-btn"
      @click="store.nextStep"
      v-if="store.currentStep < 4"
    >
      Next Step
    </button>
  </div>
</template>

<style lang="scss" scoped>
.bottom-section {
  position: fixed;
  bottom: 0;
  background-color: #fff;
  padding: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    padding: 10px 15px;
    border-radius: 5px;
  }
  .next-btn {
    background-color: $marineBlue;
    color: white;
    border: none;
    margin-left: auto;
  }
  .back-btn {
    background-color: $magnolia;
    border: none;
    color: $coolGray;
    margin-right: auto;
  }
}
</style>
