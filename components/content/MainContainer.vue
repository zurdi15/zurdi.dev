<script setup>
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
</script>
<template>
  <ContentIntroduce :class="{ 'mt-100': lgAndUp }" />
  <ContentAbout class="mt-150" />
  <ContentResume class="mt-150" />
</template>
