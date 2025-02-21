<script setup lang="ts">
import { onMounted } from "vue";
import { useDisplay } from "vuetify";
import AOS from "aos";

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
      <WipBanner />
      <Background />

      <ProfileCard />

      <!-- <Navigation v-if="lgAndUp" /> -->

      <ContentMainContainer />
    </v-main>
  </v-app>
</template>
