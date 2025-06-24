<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
const profileImg = new URL("@/assets/img/profile.webp", import.meta.url).href;
const email = "contact@zurdi.dev";
const showTooltip = ref(false);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
    showTooltip.value = true;
    setTimeout(() => {
      showTooltip.value = false;
    }, 2000);
  } catch (e) {
    console.log("Unable to copy email to clipboard");
    showTooltip.value = true;
    setTimeout(() => {
      showTooltip.value = false;
    }, 2000);
  }
};
</script>
<template>
  <v-card
    data-aos="fade-right"
    data-aos-delay="60"
    class="profile-card glass text-white position-relative transparent"
  >
    <v-row no-gutters class="justify-space-between">
      <v-col class="d-flex align-center">
        <span class="text-h3 font-weight-bold"
          ><span class="accent">Z</span>urdi</span
        >
      </v-col>
      <v-col>
        <div class="d-flex align-center justify-end text-subtitle-1">
          <span class="designation">MLOps &</span>
        </div>
        <div
          class="d-flex align-center justify-end text-subtitle-1 text-weight-thin"
        >
          <span class="designation">Full Stack</span>
        </div>
      </v-col>
    </v-row>
    <v-card class="transparent" elevation="0">
      <v-card-text class="text-center">
        <v-img
          class="profile-img grayscale mx-auto mt-6"
          :src="profileImg"
          width="280"
        />
      </v-card-text>
    </v-card>
    <div class="text-center">
      <v-row no-gutters :class="{ 'mt-10': lgAndUp, 'mt-6': !lgAndUp }">
        <v-col>
          <v-chip class="px-0">
            <v-icon class="mx-2 pl-1">mdi-email-outline</v-icon>
            <span @click="copyEmail" class="text-body-1 pr-2">
              {{ email }}
            </span>

            <v-tooltip
              :open-on-hover="false"
              :open-on-focus="false"
              v-model="showTooltip"
              location="top"
              class="text-caption"
            >
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  @click="copyEmail"
                  size="small"
                  variant="text"
                  rounded="0"
                  class="copy-btn"
                  icon="mdi-content-copy"
                />
              </template>
              {{ $t("copied") }}!
            </v-tooltip>
          </v-chip>
        </v-col>
      </v-row>
      <div class="d-flex justify-center mt-6 social">
        <a
          href="https://www.linkedin.com/in/alejandro-atance-fernandez/"
          target="_blank"
        >
          <v-icon size="20">mdi-linkedin</v-icon>
        </a>
        <a href="https://github.com/zurdi15" class="ml-2" target="_blank">
          <v-icon size="20">mdi-github</v-icon>
        </a>
      </div>
      <div class="text-grey mt-6">
        <span class="text-caption"
          >© 2025 Zurdi. {{ $t("all-rights-reserved") }}.</span
        >
      </div>
    </div>
  </v-card>
</template>
<style scoped>
.profile-card {
  border: 1px solid var(--v-theme-gray2) !important;
  padding: 50px !important;
  z-index: 100 !important;
}
.profile-card,
.profile-img {
  border-radius: 30px;
}
.grayscale {
  filter: grayscale(100%);
}
.designation {
  font-size: 14px;
}
.social a {
  border: 2px solid var(--v-theme-gray2);
  border-radius: 50%;
  color: var(--v-theme-gray1);
  display: block;
  font-size: 20px;
  height: 50px;
  line-height: 46px;
  text-align: center;
  transition: border 0.3s, color 0.3s;
  width: 50px;
  text-decoration: none;
}
.social a:hover {
  color: var(--v-theme-primary);
  border: 2px solid var(--v-theme-primary);
  cursor: pointer;
}
.social .v-icon {
  margin-bottom: 2px;
}
.copy-btn {
  background-color: var(--v-theme-gray2);
  transition: color 0.3s;
}
</style>
