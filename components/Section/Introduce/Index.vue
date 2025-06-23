<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
const yearsOfExperience = ref(new Date().getFullYear() - 2017);
</script>
<template>
  <section id="intro">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <SectionChip
          icon="mdi-home-outline"
          section="introduce"
        />
        <h1
          class="font-weight-regular mb-10"
          :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
        >
          <i18n-t keypath="introduce.mlops-by-profession">
            <template #mlops><span class="accent">MLOps</span></template>
          </i18n-t>
          <br />
          <i18n-t keypath="introduce.fullstack-by-passion">
            <template #fullstack
              ><span class="accent">Full Stack</span></template
            > </i18n-t
          >.
        </h1>
        <p
          class="mb-16 pl-1 quote text-grey"
        >
          "{{ $t("introduce.quote") }}" - Edward V. Berard.
        </p>
        <v-row class="pl-1" no-gutters>
          <v-col data-aos="fade-up" data-aos-delay="100" cols="6" lg="4">
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
          <v-col data-aos="fade-up" data-aos-delay="200" cols="6" lg="4">
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
