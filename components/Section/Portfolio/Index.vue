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
        <v-row id="romm-container" no-gutters class="pl-1">
          <v-col cols="12">
            <div class="preview-img-container mb-8">
              <a
                href="https://romm.app"
                target="_blank"
                rel="noopener noreferrer"
                class="preview-img-link"
              >
                <v-img
                  src="/personal_projects/romm/preview.webp"
                  class="preview-img"
                />
              </a>
            </div>
            <p
              class="project-title mx-3 font-weight-thin"
              :class="{ 'text-h4': lgAndUp, 'text-h5': !lgAndUp }"
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
                <template #romm><span class="accent">RomM</span></template>
                <template #vue><span class="accent">Vue.js</span></template>
                <template #python
                  ><span class="accent">Python (FastAPI)</span></template
                >
                <template #dockerimage
                  ><span class="accent">{{
                    $t("portfolio.romm.dockerimage")
                  }}</span></template
                > </i18n-t
              >. <br /><br />
            </p>
            <p class="quote text-grey px-3" data-aos="fade-up">
              <i18n-t keypath="portfolio.romm.description2">
                <template #cicd><span class="accent">(CI/CD)</span></template>
                <template #ghactions
                  ><span class="accent">GitHub Actions</span></template
                > </i18n-t
              >. <br /><br />
            </p>
            <p class="quote text-grey px-3" data-aos="fade-up">
              <i18n-t keypath="portfolio.romm.description3">
                <template #stars><span class="accent">4.5K</span></template>
                <template #github><span class="accent">GitHub</span></template>
                <template #downloads><span class="accent">1.5M</span></template>
                <template #dockerhub
                  ><span class="accent">DockerHub</span></template
                >
                <template #users><span class="accent">3K</span></template>
                <template #discord
                  ><span class="accent">Discord</span></template
                > </i18n-t
              >.
            </p>
          </v-col>
        </v-row>

        <v-divider :class="{ desktop: lgAndUp, 'my-16': !lgAndUp }" />

        <v-row id="homelab-container" no-gutters class="pl-1">
          <v-col cols="12">
            <div class="preview-img-container mb-8">
              <v-img
                src="/personal_projects/homelab/preview.webp"
                class="preview-img"
              />
            </div>
            <p
              class="project-title mx-3 font-weight-thin"
              :class="{ 'text-h4': lgAndUp, 'text-h5': !lgAndUp }"
              data-aos="fade-up"
            >
              {{ $t("portfolio.homelab.title") }}
            </p>
            <p class="quote text-grey mt-4 px-3" data-aos="fade-up">
              {{ $t("portfolio.homelab.description1") }}.
            </p>
            <p class="quote text-grey mt-4 pr-3 pl-12" data-aos="fade-up">
              <i18n-t keypath="portfolio.homelab.description2">
                <template #infrastructure
                  ><span class="accent">{{
                    $t("portfolio.homelab.infrastructure")
                  }}</span></template
                > </i18n-t
              >.
            </p>
            <p class="quote text-grey mt-4 pr-3 pl-12" data-aos="fade-up">
              <i18n-t keypath="portfolio.homelab.description3">
                <template #orchestration
                  ><span class="accent">{{
                    $t("portfolio.homelab.orchestration")
                  }}</span></template
                > </i18n-t
              >.
            </p>
            <p class="quote text-grey mt-4 pr-3 pl-12" data-aos="fade-up">
              <i18n-t keypath="portfolio.homelab.description4">
                <template #networksecurity
                  ><span class="accent">{{
                    $t("portfolio.homelab.networksecurity")
                  }}</span></template
                > </i18n-t
              >.
            </p>
            <p class="quote text-grey mt-4 pr-3 pl-12" data-aos="fade-up">
              <i18n-t keypath="portfolio.homelab.description5">
                <template #nas
                  ><span class="accent">NAS</span></template
                > </i18n-t
              >.
            </p>
          </v-col>
        </v-row>

        <v-divider :class="{ desktop: lgAndUp, 'my-16': !lgAndUp }" />

        <v-row id="zurdi-container" no-gutters class="pl-1">
          <v-col cols="12">
            <div class="preview-img-container mb-8">
              <v-img
                src="/personal_projects/zurdi.dev/preview.webp"
                class="preview-img"
              />
            </div>
            <p
              class="project-title mx-3 font-weight-thin"
              :class="{ 'text-h4': lgAndUp, 'text-h5': !lgAndUp }"
              data-aos="fade-up"
            >
              zurdi.dev
            </p>
            <p class="quote text-grey mt-4 px-3" data-aos="fade-up">
              <i18n-t keypath="portfolio.zurdi.description1">
                <template #zurdi
                  ><span class="accent">zurdi.dev</span></template
                >
                <template #vue>
                  <span class="accent">Vue.js</span>
                </template>
                <template #nuxt>
                  <span class="accent">Nuxt</span>
                </template>
                <template #vuetify>
                  <span class="accent">Vuetify</span>
                </template> </i18n-t
              >. <br /><br />
            </p>
            <p class="quote text-grey mt-4 px-3" data-aos="fade-up">
              <i18n-t keypath="portfolio.zurdi.description2">
                <template #fullstack
                  ><span class="accent">full stack</span></template
                > </i18n-t
              >.
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
  border: 1px solid var(--v-theme-gray2);
  overflow: hidden;
  max-width: 800px;
  max-height: 380px;
}
.v-divider.desktop {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 80px;
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
