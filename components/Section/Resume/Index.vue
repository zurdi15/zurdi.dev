<script setup lang="ts">
import { useDisplay } from "vuetify";
import { useI18n } from "vue-i18n";

const { lgAndUp } = useDisplay();
const { tm } = useI18n();
const skillIcons = useSkillIcons();
const resume = computed(() => {
  const groups: {
    key: string;
    items: {
      title?: string;
      group: string;
      date: string;
      description: string;
      stack: { name: string; icon?: string; image?: string }[];
    }[];
  }[] = [];

  for (const item of tm("resume.items") as any[]) {
    const role = {
      title: item.title,
      group: item.group,
      date: item.date,
      description: item.description,
      stack: (item.stack ?? []) as {
        name: string;
        icon?: string;
        image?: string;
      }[],
    };
    const currentGroup = groups.at(-1);

    if (currentGroup?.key === role.group) {
      currentGroup.items.push(role);
    } else {
      groups.push({ key: role.group, items: [role] });
    }
  }

  return groups;
});

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
        <v-row no-gutters class="resume-timeline">
          <v-col
            v-for="(group, groupIndex) in resume"
            :key="groupIndex"
            cols="12"
            :data-aos="groupIndex % 2 === 0 ? 'fade-right' : 'fade-left'"
            class="role-group-container"
          >
            <div class="role-group">
              <div class="role-group-header">
                {{ $t(`resume.groups.${group.key}`) }}
              </div>
              <div
                v-for="(item, index) in group.items"
                :key="index"
                class="date-container"
              >
                <span class="date">{{ item.date }}</span>
                <p class="date-description mt-4">
                  {{ item.description }}
                </p>
                <p
                  v-if="item.title && group.key === 'education'"
                  class="role-company"
                >
                  {{ item.title }}
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
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>
<style scoped>
.resume-timeline {
  position: relative;
  padding-left: 0 !important;
}
.resume-timeline::before {
  background: #333;
  content: "";
  position: absolute;
  top: 0;
  bottom: 28px;
  left: 19px;
  width: 1px;
  pointer-events: none;
  z-index: 3;
}
.date-container {
  position: relative;
  padding-left: 0 !important;
  padding-bottom: 68px !important;
}
.role-group-container {
  position: relative;
  padding-bottom: 28px !important;
}
.role-group {
  border-radius: 18px;
  padding: 20px 22px 0 50px;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.15);
}
.role-group-header {
  color: var(--v-theme-primary);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 18px;
}
.date-container::before {
  background: #656565;
  border-radius: 50%;
  content: "";
  height: 12px;
  left: -35px;
  position: absolute;
  top: 7px;
  transition: 0.3s;
  width: 12px;
  z-index: 5;
  transition: background 0.5s ease;
}
.date-container:hover::before {
  background: var(--v-theme-primary);
}
.date-container:hover .date {
  color: var(--v-theme-primary);
  transition: color 0.5s ease;
}
.date {
  color: var(--v-theme-gray1);
  transition: color 0.5s ease;
}
.role-company {
  color: var(--v-theme-gray1);
  font-size: 15px;
  margin: 0 0 12px;
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
