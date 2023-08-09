import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useMainStore = defineStore('mainStore', () => {
  const currentStep = ref(1);

  const nextStep = () => {
    if (currentStep.value == 4) return;
    currentStep.value++;
  };
  const prevStep = () => {
    currentStep.value--;
  };

  return {
    nextStep,
    currentStep,
    prevStep,
  };
});

export const useStepOneStore = defineStore('stepOneStore', () => {
  const name = ref('');
  const email = ref('');
  const phone = ref('');

  const validate = computed(() => {
    return !!(name.value && email.value && phone.value);
  });

  return {
    // firstInputValidate,
    // secondInputValidate,
    // thirdInputValidate,
    validate,
    name,
    email,
    phone,
  };
});
