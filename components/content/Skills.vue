<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
const skills = [
  { name: "Azure", icon: "mdi-microsoft-azure", delay: 100 },
  { name: "Python", icon: "mdi-language-python", delay: 150 },
  { name: "Docker", icon: "mdi-docker", delay: 200 },
  { name: "Terraform", icon: "mdi-terraform", delay: 250 },
  { name: "AWS", icon: "mdi-aws", delay: 300 },
  { name: "Bash", icon: "mdi-bash", delay: 350 },
  { name: "Vue.js", icon: "mdi-vuejs", delay: 400 },
];
</script>
<template>
  <section id="skills">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <ContentSectionChip
          icon="mdi-shape-outline"
          section="skills"
        />
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
