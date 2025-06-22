<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
const yearsOfExperience = ref(new Date().getFullYear() - 2017);
</script>
<template>
  <section id="intro" class="position-relative">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <h4 class="d-inline-flex font-weight-regular align-center">
          <v-icon size="15" class="mr-2">mdi-home-outline</v-icon
          >{{ $t("introduce.title") }}
        </h4>
        <h1
          class="font-weight-regular"
          :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
        >
          <span class="accent">MLOps</span>
          {{ $t("introduce.by-profession") }},<br />
          <span class="accent">Full Stack</span>
          {{ $t("introduce.by-passion") }}.
        </h1>
        <p class="mt-10 mb-16 pl-1 quote text-grey">
          "{{ $t("introduce.quote") }}" - Edward V. Berard.
        </p>
        <v-row class="pl-1" no-gutters>
          <v-col cols="6" lg="4">
            <h1
              class="font-weight-regular"
              :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
            >
              <span class="accent">{{ yearsOfExperience }}+</span>
            </h1>
            <h5 class="text-grey text-uppercase">
              {{ $t("introduce.years-of-experience") }}
            </h5>
          </v-col>
          <v-col cols="6" lg="4">
            <h1
              class="font-weight-regular"
              :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
            >
              <span class="accent">30+</span>
            </h1>
            <h5 class="text-grey text-uppercase">
              {{ $t("introduce.ml-projects") }}
            </h5>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>
<style scoped>
h1.desktop {
  font-size: 75px;
  line-height: 90px;
}
h1.mobile {
  font-size: 50px;
  line-height: 60px;
}
h2 {
  font-size: 50px;
  line-height: 60px;
}
h4 {
  border: 1px solid var(--v-theme-gray2);
  border-radius: 30px;
  font-size: 12px;
  margin: 0 0 50px;
  padding: 10px 20px;
  text-transform: uppercase;
}
h4 .v-icon {
  margin-bottom: 1px;
}
.section-desktop {
  overflow: hidden;
  margin: 140px 0;
  padding-left: 100px;
}
.section-mobile {
  overflow: hidden;
  margin: 80px 0px;
}
.section-inner-container {
  max-width: 1130px;
}
.section-inner-container > div {
  max-width: 950px;
  width: 100%;
}
.quote {
  max-width: 800px;
}
</style>
