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
            <i18n-t class="quote text-grey mt-8" keypath="about.quote1">
              <template #mlops><span class="accent">MLOps</span></template>
              <template #devops><span class="accent">DevOps</span></template>
            </i18n-t>.
          </p>
          <p data-aos="fade-up" class="quote text-grey mt-8">
            <i18n-t class="quote text-grey mt-8" keypath="about.quote2">
              <template #infraascode><span class="accent">{{ $t('about.infraascode') }}</span></template>
            </i18n-t>.
          </p>
          <p data-aos="fade-up" class="quote text-grey mt-8">
            <i18n-t class="quote text-grey mt-8" keypath="about.quote3">
              <template #fullstack><span class="accent">full stack</span></template>
            </i18n-t>.
          </p>
          <p data-aos="fade-up" class="quote text-grey mt-8">
            <i18n-t class="quote text-grey mt-8" keypath="about.quote4">
              <template #sysadmin><span class="accent">{{ $t('about.sysadmin') }}</span></template>
            </i18n-t>.
          </p>
          <p data-aos="fade-up" class="quote text-grey mt-8">
            <i18n-t class="quote text-grey mt-8" keypath="about.quote5">
              <template #multidisciplinary><span class="accent">{{ $t('about.multidisciplinary') }}</span></template>
              <template #multicultural><span class="accent">{{ $t('about.multicultural') }}</span></template>
            </i18n-t>.
          </p>
        </v-row>
      </div>
    </div>
  </section>
</template>
