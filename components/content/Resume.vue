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
  }))
);
</script>
<template>
  <section id="resume" :class="{ 'mr-65': !lgAndUp }">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <ContentSectionChip
          icon="mdi-briefcase-outline"
          section="resume"
        />
        <h2
          data-aos="fade-up"
          class="font-weight-thin mb-10"
          :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
        >
          {{ $t("resume.education") }} &
          <span class="accent">{{ $t("resume.experience") }}</span>
        </h2>
        <v-row no-gutters class="pl-5">
          <div
            v-for="(item, index) in resume"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            class="date-container"
          >
            <span class="date">{{ item.date }}</span>
            <h3 class="date-title mt-8">{{ item.title }}</h3>
            <p class="date-description">
              {{ item.description }}
            </p>
          </div>
        </v-row>
      </div>
    </div>
  </section>
</template>
<style scoped>
.date-container {
  padding-left: 74px;
  padding-bottom: 68px;
  margin-left: 20px;
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
  transition: color 0.5s ease;
}
.date-title {
  font-size: 30px;
  line-height: 36px;
}
.date-description {
  color: var(--v-theme-gray1);
}
</style>
