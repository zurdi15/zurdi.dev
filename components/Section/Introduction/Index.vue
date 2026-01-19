<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
const yearsOfExperience = ref(new Date().getFullYear() - 2017);
</script>
<template>
  <section id="introduction">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <SectionChip icon="mdi-home-outline" section="introduction" />
        <h1
          data-aos="fade-up" data-aos-delay="100"
          class="font-weight-regular mb-10"
          :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
        >
          <i18n-t keypath="introduction.cloudops-by-profession">
            <template #cloudops><span class="accent">CloudOps</span></template>
          </i18n-t>,
          <br />
          <i18n-t keypath="introduction.fullstack-by-passion">
            <template #fullstack
              ><span class="accent">Full Stack</span></template
            > </i18n-t
          >.
        </h1>
        <p
          data-aos="fade-up" data-aos-delay="150"
          class="mb-16 pl-1 quote text-grey"
        >
          "{{ $t("introduction.quote") }}" - Edward V. Berard.
        </p>
      </div>
    </div>
  </section>
</template>
