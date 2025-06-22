<script setup lang="ts">
import { useI18n } from "#imports";
import { defineEmits } from "vue";
import { onMounted } from "vue";

defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const { locales, locale, setLocale } = useI18n();

function changeLocale(newLocale: "en" | "es") {
  localStorage.setItem("locale", newLocale);
  setLocale(newLocale);
}

onMounted(() => {
  // This code now runs _after_ the component is mounted in the browser
  const currentLocale = localStorage.getItem("locale") || "en";
  localStorage.setItem("locale", currentLocale);
  setLocale(currentLocale as "en" | "es");
});
</script>
<template>
  <v-navigation-drawer
    color="black"
    :model-value="modelValue"
    location="right"
    mobile
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
  </v-navigation-drawer>
</template>
