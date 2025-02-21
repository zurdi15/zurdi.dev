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

      <div class="wip-banner">
        <span class="text-subtitle-1">Work in progress</span>
      </div>

      <Background />
      <ProfileCard />
      <Navigation v-if=lgAndUp />
      <Content />
    </v-main>
  </v-app>
</template>

<style scoped>
.wip-banner {
  position: fixed;
  width: 100%;
  height: 22px;
  background: var(--v-theme-primary);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  opacity: 0.6;
}
</style>