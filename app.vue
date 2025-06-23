<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useDisplay } from "vuetify";
import AOS from "aos";

const { lgAndUp } = useDisplay();
const displayReady = ref(false);
const settings = ref(false);
const currentBackground = ref("")

function closeSettings() {
  settings.value = false;
}

useHead({
  title: "zurdi.dev",
  meta: [{ name: "description", content: "zurdi.dev" }],
});

onMounted(() => {
  AOS.init({ offset: lgAndUp ? 100 : 500, duration: 500 });
  const currentBackground = ref(localStorage.getItem("background") || "geometric");
  watch(
    // Wait for the first value of lgAndUp to be set
    () => lgAndUp.value,
    () => {
      displayReady.value = true;
    },
    { immediate: true }
  );
});
</script>

<template>
  <Background :bg="currentBackground" />
  <v-app>
    <v-main>
      <SettingsDrawer
        v-model="settings"
        @close="closeSettings"
        @update:background="currentBackground = $event"
      />
      <Navigation @open:settings="settings = true" v-if="lgAndUp" />
      <v-fade-transition>
        <v-row v-show="displayReady" no-gutters id="main-container">
          <v-col
            :cols="lgAndUp ? 'auto' : 12"
            :class="{ 'mt-5': !lgAndUp }"
            class="px-5"
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
              'content-container-desktop': lgAndUp,
            }"
            class="mt-16 px-8"
          >
            <template v-if="displayReady">
              <SectionIntroduce class="mt-20" />
              <SectionAbout
                :class="{ 'mt-150': lgAndUp, 'mt-100': !lgAndUp }"
              />
              <SectionResume
                :class="{ 'mt-150': lgAndUp, 'mt-100': !lgAndUp }"
              />
              <SectionSkills
                :class="{ 'mt-150': lgAndUp, 'mt-100': !lgAndUp }"
              />
              <SectionProjects
                :class="{ 'mt-150': lgAndUp, 'mt-100': !lgAndUp }"
              />
            </template>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>
<style>
#main-container {
  margin-bottom: 150px;
}
.profile-card {
  position: relative;
  z-index: 100;
}
.profile-card-desktop {
  margin-top: calc(50dvh - 346px);
  margin-left: 100px;
}
.content-container-desktop {
  margin-left: 550px;
}
</style>
