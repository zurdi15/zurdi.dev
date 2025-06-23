<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
</script>
<template>
  <section id="projects">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <SectionChip
          icon="mdi-image-filter-none"
          section="projects"
        />
        <h2
          data-aos="fade-up"
          class="font-weight-thin"
          :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
        >
          <i18n-t keypath="projects.personal-projects">
            <template #projects>{{ $t("projects.projects") }}</template>
            <template #personal
              ><span class="accent">{{
                $t("projects.personal")
              }}</span></template
            >
          </i18n-t>
        </h2>
        <v-row no-gutters class="pl-5"> </v-row>
      </div>
    </div>
  </section>
</template>
