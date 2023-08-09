<script setup>
// import { ref, computed } from "vue";
// import { useStepOneStore } from "@/stores/mainStore";
import { watch, ref } from 'vue';

// const store = useStepOneStore();
const name = ref('');
const email = ref('');
const phone = ref('');

const submit = () => {
  console.log('aaa');
};

watch(
  () => [name, email, phone],
  (val) => {
    console.log(val);
  }
);
</script>

<template>
  <div class="main">
    <div class="form">
      <h2 class="title" v-text="'Personal info'" />
      <p
        class="subtitle"
        v-text="'Please provide your name, email address, and phone number.'"
      />
      <form class="form" @submit.prevent="submit">
        <label class="label" for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          placeholder="e.g. Stephen King"
        />
        <label class="label" for="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <label class="label" for="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          v-model="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-weight: bold;
  margin-bottom: 16px;
  color: $marineBlue;
}
.subtitle {
  color: $coolGray;
  margin-bottom: 20px;
  line-height: 1.4;
}
.form {
  display: flex;
  flex-direction: column;
  .label {
    font-size: 12px;
    color: $marineBlue;
    margin-bottom: 3px;
  }
  input {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid $lightGray;
    border-radius: 3px;
  }
}
</style>
