<script setup lang="ts">
defineProps<{
  icon: string;
  section: string;
}>();
</script>
<template>
  <span class="d-inline-flex font-weight-regular align-center section-chip">
    <v-icon size="15" class="mr-2">{{ icon }}</v-icon
    >{{ $t(section) }}
  </span>
</template>
