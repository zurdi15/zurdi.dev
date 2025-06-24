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
            <div class="preview-img-container mb-8" :data-aos="lgAndUp ? 'fade-up' : ''">
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
            <p
              class="project-title text-h4 mx-3 font-weight-thin"
              data-aos="fade-up"
            >
              <a
                href="https://romm.app"
                target="_blank"
                rel="noopener noreferrer"
                class="preview-img-link"
              >
                RomM
              </a>
            </p>
            <p class="quote text-grey mt-4 px-3" data-aos="fade-up">
              <i18n-t keypath="portfolio.romm.description1">
                <template #vuepython
                  ><span class="accent"
                    >Vue.js / Python[FastAPI]</span
                  ></template
                >
                <template #dockerimage
                  ><span class="accent">{{
                    $t("portfolio.romm.dockerimage")
                  }}</span></template
                >
              </i18n-t>
              <br /><br />
              <i18n-t keypath="portfolio.romm.description2">
                <template #stars><span class="accent">4.5K</span></template>
                <template #github><span class="accent">GitHub</span></template>
                <template #downloads
                  ><span class="accent">1.5M pulls</span></template
                >
                <template #dockerhub
                  ><span class="accent">DockerHub</span></template
                >
                <template #users><span class="accent">3K</span></template>
                <template #discord
                  ><span class="accent">Discord</span></template
                >
              </i18n-t>
            </p>
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
  max-width: 800px;
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
.project-title {
  width: fit-content;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  border-bottom: 1px solid transparent;
}
.project-title a {
  color: inherit;
  text-decoration: none;
}
.project-title:hover,
.preview-img-container:hover + .project-title {
  color: var(--v-theme-primary);
  border-bottom: 1px solid var(--v-theme-primary);
  cursor: pointer;
}
</style>
