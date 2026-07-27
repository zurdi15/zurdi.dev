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
              <template #cloudops><span class="accent">CloudOps</span></template>
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
              <template #multiaccount><span class="accent">{{ $t('about.multiaccount') }}</span></template>
              <template #terraform><span class="accent">{{ $t('about.terraform') }}</span></template>
              <template #gitops><span class="accent">GitOps</span></template>
            </i18n-t>.
          </p>
          <!-- <p data-aos="fade-up" class="quote text-grey mt-8">
            <i18n-t class="quote text-grey mt-8" keypath="about.quote4">
              <template #karpenter><span class="accent">Karpenter</span></template>
              <template #keda><span class="accent">KEDA</span></template>
              <template #spot><span class="accent">{{ $t('about.spot') }}</span></template>
              <template #costchecks><span class="accent">{{ $t('about.costchecks') }}</span></template>
            </i18n-t>.
          </p> -->
          <p data-aos="fade-up" class="quote text-grey mt-8">
            <i18n-t class="quote text-grey mt-8" keypath="about.quote5">
              <template #workflows><span class="accent">{{ $t('about.workflows') }}</span></template>
              <template #agentic><span class="accent">{{ $t('about.agentic') }}</span></template>
              <template #mcp><span class="accent">{{ $t('about.mcp') }}</span></template>
              <template #teams><span class="accent">Microsoft Teams</span></template>
            </i18n-t>.
          </p>
          <p data-aos="fade-up" class="quote text-grey mt-8">
            <i18n-t class="quote text-grey mt-8" keypath="about.quote6">
              <template #fullstack><span class="accent">full stack</span></template>
              <template #rommapp><a href="https://romm.app" class="accent" target="_blank" rel="noopener noreferrer">The RomM Project</a></template>
              <template #turtletrips><a href="https://github.com/zurdi15/turtletrips" class="accent" target="_blank" rel="noopener noreferrer">TurtleTrips</a></template>
            </i18n-t>.
          </p>
          <p data-aos="fade-up" class="quote text-grey mt-8">
            <i18n-t class="quote text-grey mt-8" keypath="about.quote7">
              <template #k3s><span class="accent">k3s</span></template>
              <template #argocd><span class="accent">Argo CD</span></template>
              <template #sysadmin><span class="accent">{{ $t('about.sysadmin') }}</span></template>
            </i18n-t>.
          </p>
          <p data-aos="fade-up" class="quote text-grey mt-8">
            <i18n-t class="quote text-grey mt-8" keypath="about.quote8">
              <template #multidisciplinary><span class="accent">{{ $t('about.multidisciplinary') }}</span></template>
              <template #multicultural><span class="accent">{{ $t('about.multicultural') }}</span></template>
            </i18n-t>.
          </p>
        </v-row>
      </div>
    </div>
  </section>
</template>
