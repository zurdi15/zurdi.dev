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
  <section id="resume" class="position-relative" :class="{ 'mr-65': !lgAndUp }">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <h4
          data-aos="fade-up"
          class="d-inline-flex font-weight-regular align-center"
        >
          <v-icon size="15" class="mr-2">mdi-briefcase-outline</v-icon
          >{{ $t("resume.title") }}
        </h4>
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
            <h2 class="mt-8">{{ item.title }}</h2>
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
h2.desktop {
  font-size: 50px;
  line-height: 60px;
}
h2.mobile {
  font-size: 30px;
  line-height: 36px;
}
h4 {
  border: 1px solid var(--v-theme-gray2);
  border-radius: 30px;
  font-size: 12px;
  margin: 0 0 50px;
  padding: 10px 20px;
  text-transform: uppercase;
}
h4 .v-icon {
  margin-bottom: 1px;
}
.section-desktop {
  overflow: hidden;
  margin: 140px 0;
  padding-left: 100px;
}
.section-mobile {
  overflow: hidden;
  margin: 80px 0px;
}
.section-inner-container {
  max-width: 1130px;
}
.section-inner-container > div {
  max-width: 950px;
  width: 100%;
}
.quote {
  max-width: 800px;
}
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
.date-description {
  color: var(--v-theme-gray1);
}
</style>
