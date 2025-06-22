<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
</script>
<template>
  <section class="position-relative" :class="{ 'mr-65': !lgAndUp }">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <h4
          data-aos="fade-up"
          class="d-inline-flex font-weight-regular align-center"
        >
          <v-icon size="15" class="mr-2">mdi-briefcase-outline</v-icon>resume
        </h4>
        <h2
          data-aos="fade-up"
          class="font-weight-thin"
          :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
        >
          Education & <span class="accent">Experience</span>
        </h2>
        <v-row no-gutters class="pl-5">
          <v-hover>
            <template #default="{ props, isHovering }">
              <div v-bind="props" data-aos="fade-right" class="mt-10">
                <div :class="['date-container', { hovering: isHovering }]">
                  <span class="date" :class="{ accent: isHovering }"
                    >Feb 2022 - Present</span
                  >
                  <h2 class="mt-8">Technology Consultant at TMC Spain</h2>
                  <p class="date-description">Senior MLOps at Inditex</p>
                </div>
              </div>
            </template>
          </v-hover>
          <v-hover>
            <template #default="{ props, isHovering }">
              <div v-bind="props" data-aos="fade-left">
                <div :class="['date-container', { hovering: isHovering }]">
                  <span class="date" :class="{ accent: isHovering }"
                    >Jan 2021 - Feb 2022</span
                  >
                  <h2 class="mt-8">Technology Consultant at TMC Spain</h2>
                  <p class="date-description">
                    Senior Data Engineer at Atresmedia
                  </p>
                </div>
              </div>
            </template>
          </v-hover>
          <v-hover>
            <template #default="{ props, isHovering }">
              <div v-bind="props" data-aos="fade-right">
                <div :class="['date-container', { hovering: isHovering }]">
                  <span class="date" :class="{ accent: isHovering }"
                    >Dec 2019 - Jan 2021</span
                  >
                  <h2 class="mt-8">Technology Consultant at TMC Spain</h2>
                  <p class="date-description">Data Engineer at Orange España</p>
                </div>
              </div>
            </template>
          </v-hover>
          <v-hover>
            <template #default="{ props, isHovering }">
              <div v-bind="props" data-aos="fade-left">
                <div :class="['date-container', { hovering: isHovering }]">
                  <span class="date" :class="{ accent: isHovering }"
                    >May 2017 - Dec 2019</span
                  >
                  <h2 class="mt-8">Technology Consultant at Alten</h2>
                  <p class="date-description">
                    Data Engineer at Unidad Editorial
                  </p>
                </div>
              </div>
            </template>
          </v-hover>
          <v-hover>
            <template #default="{ props, isHovering }">
              <div v-bind="props" data-aos="fade-right">
                <div :class="['date-container', { hovering: isHovering }]">
                  <span class="date" :class="{ accent: isHovering }">2011</span>
                  <h2 class="mt-8">
                    Bachelor's Degree in Computer Engineering, 2011
                  </h2>
                  <p class="date-description">
                    Universidad of Alcalá de Henares, Madrid, España
                  </p>
                </div>
              </div>
            </template>
          </v-hover>
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
.date-container.hovering::before {
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
.date {
  color: #999;
  transition: color 0.5s ease;
}
.date-description {
  color: #999;
}
</style>
