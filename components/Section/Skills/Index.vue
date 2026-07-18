<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
const skillIcons = useSkillIcons();
const groups = [
  {
    key: "cloud",
    skills: [
      { name: "AWS", icon: "mdi-aws" },
      { name: "Azure", icon: "mdi-microsoft-azure" },
      { name: "Kubernetes", icon: "mdi-kubernetes" },
      { name: "Terraform", icon: "mdi-terraform" },
      // Terragrunt has no logo in any icon set, so it borrows Terraform's.
      { name: "Terragrunt", icon: "mdi-terraform" },
    ],
  },
  {
    key: "gitops",
    skills: [
      { name: "ArgoCD", image: "argocd" },
      { name: "Jenkins", image: "jenkins" },
      { name: "Docker", icon: "mdi-docker" },
      { name: "New Relic", image: "newrelic" },
    ],
  },
  {
    key: "dev",
    skills: [
      { name: "Python", icon: "mdi-language-python" },
      { name: "Vue.js", icon: "mdi-vuejs" },
      { name: "Bash", icon: "mdi-bash" },
      { name: "Git", icon: "mdi-git" },
    ],
  },
];

// Stagger the reveal across the whole section rather than per group, so the
// animation keeps flowing over the group headings.
let step = 0;
const staggered = groups.map((group) => ({
  ...group,
  skills: group.skills.map((skill) => ({
    ...skill,
    image: skill.image ? skillIcons[skill.image] : undefined,
    delay: 100 + step++ * 50,
  })),
}));
</script>
<template>
  <section id="skills">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <SectionChip
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
        <div v-for="group in staggered" :key="group.key" class="mb-10">
          <h3 data-aos="fade-up" class="group-title text-grey pl-5 mb-2">
            {{ $t(`skills.groups.${group.key}`) }}
          </h3>
          <v-row no-gutters class="pl-1 chips-container">
            <v-col
              v-for="skill in group.skills"
              :key="skill.name"
              cols="6"
              sm="4"
              md="3"
            >
              <SectionSkillsChip :skill="skill" />
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.chips-container {
  max-width: 800px;
}
.group-title {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
}
</style>