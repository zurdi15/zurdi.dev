<script setup lang="ts">
const { lgAndUp } = useDisplay();
defineEmits(["open:settings"]);
</script>
<template>
  <v-btn
    data-aos="fade-left" data-aos-delay="60"
    id="settings-button"
    class="text-grey"
    :class="{ desktop: lgAndUp }"
    size="small"
    variant="flat"
    color="black"
    @click="$emit('open:settings', true)"
    icon="mdi-cog"
  />
</template>
<style scoped>
#settings-button {
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 1000 !important;
  border: 1px solid var(--v-theme-gray2);
  border-radius: 30px;
  background-color: black;
  transition: color 0.3s, border-color 0.3s , transform 0.3s;
}
#settings-button:hover {
  color: var(--v-theme-primary)!important;
  border-color: var(--v-theme-primary)!important;
  transform: rotate(90deg);
}
#settings-button.desktop {
  top: 15px;
  right: 75px;
}
</style>