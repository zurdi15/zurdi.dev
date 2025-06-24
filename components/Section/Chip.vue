<script setup lang="ts">
defineProps<{
  icon: string;
  section: string;
}>();
</script>
<template>
  <span data-aos="fade-up" class="d-inline-flex font-weight-regular align-center section-chip glass">
    <v-icon size="15" class="mr-2">{{ icon }}</v-icon
    >{{ $t(`${section}.title`) }}
  </span>
</template>
