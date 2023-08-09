<script setup>
import IconArcade from "@/components/icons/IconArcade.vue";
import IconAdvanced from "@/components/icons/IconAdvanced.vue";
import IconPro from "@/components/icons/IconPro.vue";

const selects = [
  {
    icon: {
      name: "IconArcade",
      comp: IconArcade,
    },
    title: "Arcade",
    text: "$9/mo",
  },
  {
    icon: {
      name: "IconAdvanced",
      comp: IconAdvanced,
    },
    title: "Advanced",
    text: "$12/mo",
  },
  {
    icon: {
      name: "IconPro",
      comp: IconPro,
    },
    title: "Pro",
    text: "$15/mo",
  },
];
</script>

<template>
  <div class="main">
    <h2 v-text="'Select your plan'" />
    <p v-text="'You have the option of monthly or yearly billing.'" />
    <div class="selects">
      <div v-for="(select, i) in selects" :key="i" class="select">
        <component :is="select.icon.comp" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
