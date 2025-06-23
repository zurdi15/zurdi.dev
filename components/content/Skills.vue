<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();

const skills = [
  { name: "Azure", icon: "mdi-microsoft-azure", delay: 100 },
  { name: "Python", icon: "mdi-language-python", delay: 200 },
  { name: "Docker", icon: "mdi-docker", delay: 300 },
  { name: "Terraform", icon: "mdi-terraform", delay: 400 },
  { name: "AWS", icon: "mdi-aws", delay: 500 },
  { name: "Bash", icon: "mdi-bash", delay: 600 },
  { name: "Vue.js", icon: "mdi-vuejs", delay: 700 },
];
</script>
<template>
  <section id="skills" class="position-relative">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <h4
          data-aos="fade-up"
          class="d-inline-flex font-weight-regular align-center"
        >
          <v-icon size="15" class="mr-2">mdi-shape-outline</v-icon
          >{{ $t("skills.title") }}
        </h4>
        <h2
          data-aos="fade-up"
          class="font-weight-thin mb-10"
          :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
        >
          <i18n-t keypath="skills.tech-stack">
            <template #tech>{{ $t("skills.tech") }}</template>
            <template #stack
              ><span class="accent">{{ $t("skills.stack") }}</span></template
            >
          </i18n-t>
        </h2>
        <v-row no-gutters class="pl-1">
          <v-col cols="6" sm="4" md="3" v-for="(skill, index) in skills">
            <ContentSkillChip :skill="skill" :key="index" />
          </v-col>
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
</style>
