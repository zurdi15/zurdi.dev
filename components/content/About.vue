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
          <v-icon size="15" class="mr-2">mdi-account-outline</v-icon>About
        </h4>
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
  max-width: 770px;
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
</style>
