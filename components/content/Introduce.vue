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
        <h2
          class="font-weight-regular"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Say Hi from <span class="accent">Zurdi</span>,<br>
          <span class="accent">MLOps</span> and <span class="accent">Data Engineer</span> by profession,<br>
          <span class="accent">Full Stack</span> developer by passion.
        </h2>
          <p data-aos-delay="200" data-aos="fade-up" class="mt-10 mb-16 quote text-grey">
            "Walking on water and developing software from a specification are
            easy if both are frozen" - Edward V. Berard.
          </p>
        <!-- TODO: check why scroll is being saved -->
        <!-- <div
          id="go-to-projects"
          class="mt-6"
          data-aos-delay="220"
          data-aos="fade-down"
        >
          <h2>Go to my projects<v-icon>mdi-chevron-down</v-icon></h2>
        </div> -->
      </div>
    </div>
  </section>
</template>
<style scoped>
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
.section-inner-container > div > h4 {
  border: 1px solid var(--v-theme-gray2);
  border-radius: 30px;
  font-size: 12px;
  margin: 0 0 50px;
  padding: 10px 20px;
  text-transform: uppercase;
}
.section-inner-container > div > h4 .v-icon {
  margin-bottom: 1px;
}
.section-inner-container > div > h1 {
  font-size: 75px;
  line-height: 90px;
}
.section-inner-container > div > h2 {
  font-size: 50px;
  line-height: 60px;
}
.quote {
  max-width: 500px;
}
#go-to-projects {
  cursor: pointer;
  transition: color 0.3s ease;
}
#go-to-projects:hover {
  color: var(--v-theme-primary);
}
</style>
