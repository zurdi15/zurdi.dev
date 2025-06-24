<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

defineEmits(["open:settings"]);

const sections = [
  {
    id: "introduction",
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
    id: "portfolio",
    icon: "mdi-image-filter-none",
  },
  {
    id: "skills",
    icon: "mdi-shape-outline",
  },
];

const currentSection = ref("");

function onScroll() {
  let closestSection = "";
  let closestDistance = Infinity;

  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const distance = Math.abs(rect.top - 100); // adjust threshold
      if (distance < closestDistance && rect.top < window.innerHeight) {
        closestDistance = distance;
        closestSection = section.id;
      }
    }
  }

  currentSection.value = closestSection;
}

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

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // initialize on mount
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
<template>
  <div data-aos="fade-left" data-aos-delay="60" class="main-menu text-white">
    <v-row no-gutters class="text-center py-2">
      <v-col
        v-for="section in sections"
        class="section-container"
        @click="scrollTo(section.id)"
        cols="12"
        :key="section.id"
        :class="{ current: currentSection === section.id }"
      >
        <span class="tooltip">{{ $t(`${section.id}.title`) }}</span>
        <v-icon class="section-btn my-3" size="22">{{ section.icon }}</v-icon>
      </v-col>
      <v-divider class="my-2" />
      <v-col
        id="settings-container"
        @click="$emit('open:settings', true)"
        cols="12"
      >
        <span class="tooltip">{{ $t("settings.title") }}</span>
        <v-icon id="settings-btn" class="my-3">mdi-cog</v-icon>
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
  top: calc(50dvh - 311px / 2);
  width: 55px;
  z-index: 1;
}
.section-container,
#settings-container {
  cursor: pointer;
  color: var(--v-theme-gray1);
  transition: color 0.3s, transform 0.3s;
  display: block;
  position: relative;
}
.section-container:hover,
#settings-container:hover,
.section-container.current {
  color: var(--v-theme-primary);
  transform: scale(1.15);
}
#settings-container {
  transform: rotate(-90deg);
}
.tooltip {
  background: var(--v-theme-gray2);
  border-radius: 5px;
  color: white;
  display: block;
  font-size: 12px;
  opacity: 0;
  padding: 3px 8px;
  position: absolute;
  top: 20%;
  right: 100%;
  transition: 0.3s;
  visibility: hidden;
}
.tooltip:before {
  background: var(--v-theme-gray2);
  content: "";
  height: 10px;
  margin-top: -5px;
  position: absolute;
  right: -3px;
  top: 50%;
  transform: rotate(54deg) skew(-8deg, -39deg);
  width: 10px;
  z-index: -1;
}
.section-container:hover .tooltip, #settings-container:hover .tooltip {
  opacity: 1;
  visibility: visible;
  right: calc(100% + 10px);
}
</style>
