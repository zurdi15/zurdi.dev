<script setup lang="ts">
defineEmits(["open:settings"]);

const sections = [
  {
    id: "introduce",
    icon: "mdi-home-outline",
  },
  {
    id: "about",
    icon: "mdi-account-outline",
  },
  {
    id: "resume",
    icon: "mdi-briefcase-outline",
  },
  {
    id: "skills",
    icon: "mdi-shape-outline",
  },
  {
    id: "projects",
    icon: "mdi-image-filter-none",
  },
];

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
      <v-col class="section-btn" cols="12" v-for="section in sections" :key="section.id">
        <v-icon class="my-3" @click="scrollTo(section.id)" size="22">{{
          section.icon
        }}</v-icon>
      </v-col>
      <v-divider class="my-2" />
      <v-col id="settings-button" cols="12">
        <v-icon
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
  backdrop-filter: blur(8px);
  border: 1px solid var(--v-theme-gray2);
  border-radius: 30px;
  position: fixed;
  right: 70px;
  top: calc(50dvh - 311px/2);
  width: 55px;
  z-index: 1;
}
.section-btn,
#settings-button {
  cursor: pointer;
  color: var(--v-theme-gray1);
  transition: color 0.3s, transform 0.3s;
}
.section-btn:hover,
#settings-button:hover {
  color: var(--v-theme-primary);
  transform: scale(1.15);
}
#settings-button {
  transform: rotate(-90deg);
}
</style>
