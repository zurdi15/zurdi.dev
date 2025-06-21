<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useDisplay } from "vuetify";
import AOS from "aos";
import { useI18n } from "#imports";

const { lgAndUp } = useDisplay();
const displayReady = ref(false);

useHead({
  title: "zurdi.dev",
  meta: [{ name: "description", content: "zurdi.dev" }],
});

onMounted(() => {
  AOS.init({ offset: lgAndUp ? 100 : 500, duration: 500 });
  // Wait for the first value of lgAndUp to be set
  watch(
    () => lgAndUp.value,
    () => {
      displayReady.value = true;
    },
    { immediate: true }
  );
});
const { locales, locale, setLocale } = useI18n();
</script>

<template>
  <v-app>
    <!-- <div
      class="language-toggle"
      style="position: absolute; top: 16px; right: 16px; z-index: 200"
    >
      <v-btn
        v-for="l in locales"
        :key="l.code"
        :class="{
          'accent': l.code === locale,
          'text-grey': l.code !== locale,
        }"
        class="mx-1"
        size="small"
        variant="outlined"
        @click="setLocale(l.code)"
      >
        {{ l.code.toUpperCase() }}
      </v-btn>
    </div> -->
    <div
      class="language-toggle"
      style="position: fixed; top: 16px; right: 16px; z-index: 2"
    >
      <v-btn
        class="text-grey"
        size="small"
        variant="outlined"
        @click=""
        icon="mdi-cog"
      />
    </div>
    <v-main>
      <Background />
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
              '': !lgAndUp,
            }"
            class="mt-16 px-8"
          >
            <ContentMainContainer v-if="displayReady" />
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>
<style>
.content-container-desktop {
  margin-left: 550px;
}
.profile-card {
  position: relative;
  z-index: 100;
}
.profile-card-desktop {
  margin-top: calc(50dvh - 330px);
  margin-left: 100px;
}

#main-container {
  margin-bottom: 150px;
}
</style>
