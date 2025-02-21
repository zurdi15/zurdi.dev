<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp, mdAndDown } = useDisplay();
</script>
<template>
  <section
    class="position-relative"
    :class="{
      'px-10': mdAndDown,
      'section-desktop': lgAndUp,
      'section-mobile': mdAndDown,
    }"
  >
    <div class="section-inner-container ma-auto py-0 px-1">
      <div
        class="text-white ml-auto"
        :class="{ 'ml-auto': lgAndUp, 'mx-auto': mdAndDown }"
      >
        <h4
          class="d-inline-flex font-weight-regular align-center"
          data-aos="fade-left"
        >
          <v-icon size="15" class="mr-2">mdi-home-outline</v-icon>Introduce
        </h4>
        <h1
          class="scroll-animation font-weight-regular"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Say Hi from <span class="accent">Zurdi</span>, MLOps and Full Stack
          developer.
        </h1>
        <div data-aos-delay="200" data-aos="fade-up" class="mt-10 mb-16 quote">
          <p class="text-grey">
            "Walking on water and developing software from a specification are
            easy if both are frozen" - Edward V. Berard.
          </p>
        </div>
        <div id="go-to-projects" class="mt-6" data-aos-delay="220" data-aos="fade-down"><h2>Go to my projects<v-icon>mdi-chevron-down</v-icon></h2></div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#go-to-projects {
  cursor: pointer;
  transition: color 0.3s ease;
}
#go-to-projects:hover {
  color: var(--v-theme-primary);
}
</style>