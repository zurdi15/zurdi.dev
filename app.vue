<script setup lang="ts">
import { onMounted } from "vue";
import { useDisplay } from "vuetify";
import AOS from "aos";
import Introduction from "./components/Introduction.vue";

const { lgAndUp } = useDisplay();

useHead({
  title: "zurdi.dev",
  meta: [{ name: "description", content: "zurdi.dev" }],
});

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <v-app>
    <v-main>
      <Background />
      <template v-if="lgAndUp">
        <ProfileCard />
        <Navigation />
      </template>
      <Introduction />
    </v-main>
  </v-app>
</template>
