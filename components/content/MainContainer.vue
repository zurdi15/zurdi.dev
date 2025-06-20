<script setup>
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
</script>
<template>
  <ContentIntroduce :class="{ 'mt-100': lgAndUp }" />
  <ContentAbout class="mt-120" />
</template>
<style scoped>
.mt-100 {
  margin-top: 100px;
}
.mt-120 {
  margin-top: 120px;
}
</style>
