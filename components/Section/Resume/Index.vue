<script setup lang="ts">
import { useDisplay } from "vuetify";
import { useI18n } from "vue-i18n";

const { lgAndUp } = useDisplay();
const { tm } = useI18n();
const resume = computed(() =>
  (tm("resume.items") as any[]).map((item) => ({
    title: item.title,
    date: item.date,
    description: item.description,
    compute_target: item.compute_target,
    compute_target_icon: item.compute_target_icon,
  }))
);
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
            cols="12"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            class="date-container"
          >
            <span class="date">{{ item.date }}</span>
            <p class="date-description mt-8">
              {{ item.description }}
            </p>
            <v-chip size="small" v-if="item.compute_target">
              <v-icon size="20" class="mr-2 accent">{{ item.compute_target_icon }}</v-icon>{{ item.compute_target }}
            </v-chip>
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
.date-compute_target {
  font-size: 16px;
}
</style>
