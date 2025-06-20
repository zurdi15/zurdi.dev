<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useDisplay } from "vuetify";
import AOS from "aos";

const { lgAndUp } = useDisplay();
const displayReady = ref(false);

useHead({
  title: "zurdi.dev",
  meta: [{ name: "description", content: "zurdi.dev" }],
});

onMounted(() => {
  AOS.init();
  // Wait for the first value of lgAndUp to be set
  watch(
    () => lgAndUp.value,
    () => {
      displayReady.value = true;
    },
    { immediate: true }
  );
});
</script>

<template>
  <v-app>
    <v-main>
      <Background />
      <v-fade-transition>
        <v-row v-show="displayReady" no-gutters>
          <v-col
            :cols="lgAndUp ? 'auto' : 12"
            :class="{ 'mt-10': !lgAndUp }"
            class="px-10"
          >
            <v-slide-x-transition>
              <ProfileCard
                v-if="displayReady"
                :class="{ 'position-fixed profile-card-desktop': lgAndUp }"
              />
            </v-slide-x-transition>
          </v-col>
          <v-col
            :class="{
              'px-16 content-container-desktop': lgAndUp,
              'px-10': !lgAndUp,
            }"
            class="mt-16"
          >
            <ContentMainContainer v-if="displayReady" />
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>
<style scoped>
.content-container-desktop {
  margin-left: 450px;
}
.profile-card {
  position: relative;
  z-index: 100;
}
.profile-card-desktop {
  margin-top: calc(50vh - 350px);
  margin-left: 100px;
}
</style>
