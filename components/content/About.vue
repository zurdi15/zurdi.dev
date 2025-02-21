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
        <h2
          class="scroll-animation font-weight-regular"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Every great design begin with an even <span class="accent">better story</span>
        </h2>
        <div data-aos-delay="200" data-aos="fade-up" class="mt-10 mb-16 quote">
          <p class="text-grey">
            Since beginning my journey as a freelance designer nearly 8 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chopsone design
            problem at a time.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
