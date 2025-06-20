<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
</script>
<template>
  <section class="position-relative">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <h4 class="d-inline-flex font-weight-regular align-center">
          <v-icon size="15" class="mr-2">mdi-account-outline</v-icon>About
        </h4>
        <h2 class="font-weight-thin" :class="{ 'desktop': lgAndUp, 'mobile': !lgAndUp }">
          <span class="accent">Automating</span> with purpose,<br>
          <span class="accent">scaling</span> with precision
        </h2>
        <p data-aos="fade-up" class="mt-10 mb-16 quote text-grey">
          MLOps Engineer with a solid background in cloud environments
          (primarily Azure) and previous experience as a data engineer.
          Specialized in automating training and deployment pipelines,
          infrastructure as code, and DevOps practices applied to the ML
          lifecycle.<br><br>I consider myself a proactive individual with a strong
          ability to learn, who enjoys collaborating with multidisciplinary and
          multicultural teams.
        </p>
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
#go-to-projects {
  cursor: pointer;
  transition: color 0.3s ease;
}
#go-to-projects:hover {
  color: var(--v-theme-primary);
}
</style>
