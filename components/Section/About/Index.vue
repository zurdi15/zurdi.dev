<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
</script>
<template>
  <section id="about">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <SectionChip icon="mdi-account-outline" section="about" />
        <h2
          class="font-weight-thin mb-10"
          :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
          data-aos="fade-up"
        >
          <span class="accent">{{ $t("about.automating") }}</span>
          {{ $t("about.automating-purpose") }},<br />
          <span class="accent">{{ $t("about.scaling") }}</span>
          {{ $t("about.scaling-precision") }},<br />
          <span class="accent">{{ $t("about.driven") }}</span>
          {{ $t("about.driven-design") }}.
        </h2>
        <v-row no-gutters class="pl-1">
          <p data-aos="fade-up" class="quote text-grey">
            {{ $t("about.quote1") }}.
          </p>
          <p data-aos="fade-up" class="quote text-grey mt-8">
            {{ $t("about.quote2") }}.
          </p>
          <p data-aos="fade-up" class="quote text-grey mt-8">
            {{ $t("about.quote3") }}.
          </p>
        </v-row>
      </div>
    </div>
  </section>
</template>
