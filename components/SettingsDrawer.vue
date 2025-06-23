<script setup lang="ts">
import { useI18n } from "#imports";
import { onMounted } from "vue";

defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "update:background", value: string): void;
}>();

const { locales, locale, setLocale } = useI18n();
const backgrounds = ["geometric", "rounded"];
const currentBackground = ref("")

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
});
</script>
<template>
  <v-navigation-drawer
    color="black"
    :model-value="modelValue"
    location="right"
    mobile
    width="300"
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
