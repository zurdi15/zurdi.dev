<script setup lang="ts">
import { useI18n } from "#imports";
import { onMounted } from "vue";
import { useDisplay } from "vuetify";

defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "update:background", value: string): void;
}>();

const { lgAndUp } = useDisplay();
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
    id: "portfolio",
    icon: "mdi-image-filter-none",
  },
];
const { locales, locale, setLocale } = useI18n();
const backgrounds = ["geometric", "rounded"];
const currentBackground = ref("");
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

function changeLocale(newLocale: "en" | "es") {
  localStorage.setItem("locale", newLocale);
  setLocale(newLocale);
}

function changeBackground(newBackground: "geometric" | "rounded") {
  localStorage.setItem("background", newBackground);
  currentBackground.value = newBackground;
  emit("update:background", newBackground);
}

onMounted(() => {
  const currentLocale = localStorage.getItem("locale") || "en";
  localStorage.setItem("locale", currentLocale);
  setLocale(currentLocale as "en" | "es");

  currentBackground.value = localStorage.getItem("background") || "geometric";
  changeBackground(currentBackground.value as "geometric" | "rounded");

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // initialize on mount
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
<template>
  <v-navigation-drawer
    id="settings-drawer"
    :model-value="modelValue"
    location="right"
    mobile
    width="300"
    class="text-white"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-row class="ma-2 text-right" no-gutters>
      <v-col>
        <v-btn
          icon="mdi-close"
          variant="text"
          rounded="0"
          @click="emit('update:modelValue', false)"
        />
      </v-col>
    </v-row>
    <template v-if="!lgAndUp">
      <v-row class="mx-16" no-gutters>
        <v-col cols="12">
          <v-list-item
            v-for="section in sections"
            @click="scrollTo(section.id)"
            class="section-item"
            :class="{ current: currentSection === section.id }"
          >
            <template #prepend>
              <v-icon class="section-icon my-3" size="22">{{
                section.icon
              }}</v-icon>
            </template>
            {{ $t(`${section.id}.title`) }}
          </v-list-item>
        </v-col>
      </v-row>
      <v-divider class="my-12 mx-6" />
    </template>
    <v-row class="pa-4" no-gutters>
      <v-col class="text-center">
        <v-list-item class="text-h6 mb-2">{{
          $t("settings.language")
        }}</v-list-item>
        <v-btn
          v-for="l in locales"
          :key="l.code"
          :class="{
            accent: l.code === locale,
            'text-grey': l.code !== locale,
          }"
          class="mx-1"
          size="small"
          variant="outlined"
          @click="changeLocale(l.code)"
        >
          {{ l.code.toUpperCase() }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="pa-4 mt-5" no-gutters>
      <v-col class="text-center">
        <v-list-item class="text-h6 mb-2">Background</v-list-item>
        <v-btn
          v-for="b in backgrounds"
          :key="b"
          :class="{
            accent: b === currentBackground,
            'text-grey': b !== currentBackground,
          }"
          class="mx-1"
          size="small"
          variant="outlined"
          @click="changeBackground(b as 'geometric' | 'rounded')"
        >
          {{ b.toUpperCase() }}
        </v-btn>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>
<style scoped>
#settings-drawer {
  backdrop-filter: blur(30px);
  background-color: rgba(0, 0, 0, 0.4) !important;
}
.section-item {
  border-radius: 10px !important;
  border: 1px solid transparent !important;
}
.section-item:hover,
.section-item.current {
  border-radius: 10px !important;
  border: 1px solid var(--v-theme-primary) !important;
}
</style>
