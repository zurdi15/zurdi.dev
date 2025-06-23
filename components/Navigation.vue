<script setup lang="ts">
defineEmits(["open:settings"]);

function scrollTo(section: string) {
  let scrollNegativeOffset = 50;
  if (import.meta.client) {
    const el = document.getElementById(section);
    if (el) {
      const y =
        el.getBoundingClientRect().top + window.scrollY - scrollNegativeOffset;
      window.scrollTo({ top: y });
    }
  }
}
</script>
<template>
  <div data-aos="fade-left" data-aos-delay="60" class="main-menu text-white">
    <v-row no-gutters class="text-center py-2">
      <v-col cols="12">
        <v-icon class="my-3" @click="scrollTo('intro')" size="22"
          >mdi-home-outline</v-icon
        >
      </v-col>
      <v-col cols="12">
        <v-icon class="my-3" @click="scrollTo('about')" size="22"
          >mdi-account-outline</v-icon
        >
      </v-col>
      <v-col cols="12">
        <v-icon class="my-3" @click="scrollTo('resume')" size="22"
          >mdi-briefcase-outline</v-icon
        >
      </v-col>
      <v-col cols="12">
        <v-icon class="my-3" @click="scrollTo('skills')" size="22"
          >mdi-shape-outline</v-icon
        >
      </v-col>
      <v-col cols="12">
        <v-icon class="my-3" @click="scrollTo('projects')" size="22"
          >mdi-image-filter-none</v-icon
        >
      </v-col>
      <v-divider class="my-2" />
      <v-col cols="12">
        <v-icon
          id="settings-button"
          class="my-3"
          @click="$emit('open:settings', true)"
          >mdi-cog</v-icon
        >
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.main-menu {
  background-color: var(--v-theme-gray3);
  border: 1px solid var(--v-theme-gray2);
  border-radius: 30px;
  position: fixed;
  right: 70px;
  /* 132px is based on the height of the menu divided by 2 */
  top: calc(50dvh - 132px);
  width: 55px;
  z-index: 1;
}
.main-menu .v-icon,
#settings-button {
  cursor: pointer;
  color: var(--v-theme-gray1);
  transition: color 0.3s, transform 0.3s;
}
.main-menu .v-icon:hover,
#settings-button:hover {
  color: var(--v-theme-primary);
  transform: scale(1.2);
}
#settings-button {
  transform: rotate(-90deg);
}
</style>
