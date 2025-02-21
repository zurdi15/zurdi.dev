<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
const profileImg = new URL("@/assets/img/profile.jpg", import.meta.url).href;
</script>
<template>
  <div
    data-aos="fade-right"
    data-aos-delay="200"
    class="profile-card text-white"
    :class="{ 'position-fixed ml-16': lgAndUp, 'ma-10': !lgAndUp }"
  >
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
    <v-img
      class="profile-img grayscale mx-auto mt-6"
      :src="profileImg"
      width="300"
    />
    <div class="text-center">
      <div class="mt-12">
        <span class="text-h5">contact@zurdi.dev</span>
      </div>
      <div class="d-flex justify-center mt-6 social">
        <a href="https://github.com/zurdi15" target="_blank">
          <v-icon size="20">mdi-github</v-icon>
        </a>
        <a href="https://github.com/zurdi15" class="ml-2" target="_blank">
          <v-icon size="20">mdi-email-outline</v-icon>
        </a>
      </div>
      <div class="text-grey mt-6">
        <span class="text-caption">© 2025 Zurdi. All rights reserved.</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.profile-card {
  border: 1px solid var(--v-theme-gray2) !important;
  padding: 50px !important;
  top: calc(50% - 310px) !important; /* 310px is based on the height of the menu divided by 2 */
  z-index: 1 !important;
  left: 50px !important;
}
.profile-img,
.profile-card {
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
</style>
