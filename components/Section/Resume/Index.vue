<script setup lang="ts">
import { useDisplay } from "vuetify";
import { useI18n } from "vue-i18n";

const { lgAndUp } = useDisplay();
const { tm } = useI18n();
const skillIcons = useSkillIcons();
const resume = computed(() =>
  (tm("resume.items") as any[]).map((item) => ({
    title: item.title,
    date: item.date,
    description: item.description,
    stack: (item.stack ?? []) as { name: string; icon?: string; image?: string }[],
  }))
);

// Vite inlines SVGs under 4kB as data URIs that keep their single quotes, and an
// unquoted url() rejects those, taking the whole declaration down with it.
const maskStyle = (image: string) => ({ "--mask": `url("${skillIcons[image]}")` });
</script>
<template>
  <section id="resume" :class="{ 'mr-65': !lgAndUp }">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <SectionChip icon="mdi-briefcase-outline" section="resume" />
        <h2
          data-aos="fade-up"
          class="font-weight-thin mb-10"
          :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
        >
          {{ $t("resume.education") }} &
          <span class="accent">{{ $t("resume.experience") }}</span>
        </h2>
        <v-row no-gutters class="pl-5">
          <v-col
            v-for="(item, index) in resume"
            :key="index"
            cols="12"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            class="date-container"
          >
            <span class="date">{{ item.date }}</span>
            <p class="date-description mt-8">
              {{ item.description }}
            </p>
            <div class="d-flex flex-wrap ga-1">
              <v-chip
                v-for="tech in item.stack"
                :key="tech.name"
                size="small"
                class="mt-1"
                label
              >
                <span
                  v-if="tech.image"
                  class="tech-mask mr-2"
                  :style="maskStyle(tech.image)"
                />
                <v-icon v-else size="20" class="mr-2 accent">{{ tech.icon }}</v-icon
                >{{ tech.name }}
              </v-chip>
            </div>
            <p
              v-if="item.title"
              class="date-title glass transparent text-white my-16 py-2 px-4"
              :class="{ 'mb-0': index === resume.length - 1 }"
            >
              {{ item.title }}
            </p>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>
<style scoped>
.date-container {
  padding-left: 74px !important;
  padding-bottom: 68px !important;
}
.date-container::before {
  background: #656565;
  border-radius: 50%;
  content: "";
  height: 12px;
  left: -6px;
  position: absolute;
  top: 7px;
  transition: 0.3s;
  width: 12px;
  transition: background 0.5s ease;
}
.date-container:hover::before {
  background: var(--v-theme-primary);
}
.date-container::after {
  background: #333;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 10px;
  width: 1px;
  z-index: -1;
}
.date-container:hover > .date {
  color: var(--v-theme-primary);
  transition: color 0.5s ease;
}
.date {
  color: var(--v-theme-gray1);
  transition: color 0.5s ease;
}
.date-title {
  font-size: 21px;
  max-width: 600px;
  color: var(--v-theme-gray1);
  border: 1px solid var(--v-theme-primary);
  border-radius: 15px;
  margin-left: -100px; /* Adjust this value as needed for overlap */
  position: relative;
  z-index: 1;
}
.date-description {
  font-size: 20px;
}
/* Logos ship as flat SVGs, so they are masked rather than drawn: that lets the
   accent color come from CSS, matching the mdi icons in the sibling chips. */
.tech-mask {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: var(--v-theme-primary);
  -webkit-mask: var(--mask) no-repeat center / contain;
  mask: var(--mask) no-repeat center / contain;
}
</style>
