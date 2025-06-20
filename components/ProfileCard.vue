<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
const profileImg = new URL("@/assets/img/profile.webp", import.meta.url).href;
</script>
<template>
  <v-card class="profile-card text-white position-relative transparent">
    <v-row no-gutters class="justify-space-between">
      <v-col class="d-flex align-center">
        <span class="text-h3 font-weight-bold">Zurdi</span>
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
      <div :class="{ 'mt-12': lgAndUp, 'mt-6': !lgAndUp }">
        <span class="text-h5">contact@zurdi.dev</span>
      </div>
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
        <span class="text-caption">© 2025 Zurdi. All rights reserved.</span>
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
.transparent {
  background-color: transparent !important;
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
</style>
