<script setup lang="ts">
import { useDisplay } from "vuetify";
import { useI18n } from "vue-i18n";

const { lgAndUp } = useDisplay();
const { tm } = useI18n();
const skillIcons = useSkillIcons();
const resume = computed(() =>
  (tm("resume.items") as any[]).map((item) => ({
    title: item.title,
    type: item.type,
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
          {{ $t("resume.experience") }} &
          <span class="accent">{{ $t("resume.education") }}</span>
        </h2>
        <v-row no-gutters class="pl-5">
          <v-col
            v-for="(item, index) in resume"
            :key="index"
            cols="12"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            class="date-container"
          >
            <div class="role-card" :class="`role-card-${item.type}`">
              <div v-if="item.type !== 'internal'" class="role-header">
                <span class="role-type">{{ $t(`resume.${item.type}`) }}</span>
                <span v-if="item.title" class="role-company">{{
                  item.title
                }}</span>
              </div>
              <span class="date">{{ item.date }}</span>
              <p class="date-description mt-4">
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
                  <v-icon
                    v-else
                    size="20"
                    class="mr-2 accent"
                    >{{ tech.icon }}</v-icon
                  >{{ tech.name }}
                </v-chip>
              </div>
            </div>
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
.date-container:hover .date {
  color: var(--v-theme-primary);
  transition: color 0.5s ease;
}
.date {
  color: var(--v-theme-gray1);
  transition: color 0.5s ease;
}
.role-card {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-left: 3px solid var(--v-theme-gray1);
  border-radius: 16px;
  padding: 18px 22px;
  background: rgba(0, 0, 0, 0.12);
}
.role-card-consulting {
  border-color: var(--v-theme-primary);
}
.role-card-education {
  border-color: var(--v-theme-gray1);
}
.role-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px 14px;
  margin-bottom: 12px;
}
.role-type {
  color: var(--v-theme-primary);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.role-card-education .role-type {
  color: var(--v-theme-gray1);
}
.role-company {
  color: var(--v-theme-gray1);
  font-size: 15px;
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
