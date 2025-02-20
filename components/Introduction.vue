<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp, mdAndDown } = useDisplay();
</script>
<template>
  <section
    class="position-relative"
    :class="{
      'px-10': mdAndDown,
      'main-section-desktop': lgAndUp,
      'main-section-mobile': mdAndDown,
    }"
  >
    <div class="main-container-content ma-auto py-0 px-1">
      <div
        class="content text-white ml-auto"
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
          Say Hi from <span>Zurdi</span>, MLOps and Full Stack developer.
        </h1>
        <div data-aos-delay="200" data-aos="fade-up" class="mt-10 quote">
          <p class="text-grey">
            "Walking on water and developing software from a specification are
            easy if both are frozen" - Edward V. Berard.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.main-section-desktop {
  overflow: hidden;
  margin: 140px 0;
}
.main-section-mobile {
  overflow: hidden;
  margin: 40px 0;
}
.main-container-content {
  max-width: 1130px;
}
.content {
  max-width: 770px;
  width: 100%;
}
.content h4 {
  border: 1px solid #565656;
  border-radius: 30px;
  font-size: 12px;
  margin: 0 0 50px;
  padding: 10px 20px;
  text-transform: uppercase;
}
.content h4 .v-icon {
  margin-bottom: 1px;
}
.content h1 {
  font-size: 75px;
  line-height: 90px;
}
.content h1 span {
  color: #28e98c;
}
.content .quote {
  max-width: 500px;
}
</style>
