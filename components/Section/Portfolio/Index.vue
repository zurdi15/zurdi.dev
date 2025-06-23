<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
</script>
<template>
  <section id="portfolio">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <SectionChip icon="mdi-image-filter-none" section="portfolio" />
        <h2
          data-aos="fade-up"
          class="font-weight-thin mb-10"
          :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
        >
          <i18n-t keypath="portfolio.personal-projects">
            <template #projects>{{ $t("portfolio.projects") }}</template>
            <template #personal
              ><span class="accent">{{
                $t("portfolio.personal")
              }}</span></template
            >
          </i18n-t>
        </h2>
        <v-row no-gutters class="pl-1">
          <v-col cols="12">
            <div class="preview-img-container mb-16">
              <a
                href="https://romm.app"
                target="_blank"
                rel="noopener noreferrer"
                class="preview-img-link"
              >
                <v-img
                  src="/personal_projects/romm-preview.webp"
                  class="preview-img"
                />
              </a>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>
<style scoped>
.preview-img-container {
  border-radius: 30px;
  overflow: hidden;
}
.preview-img {
  transition: transform 0.3s;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.preview-img:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
