<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
</script>
<template>
  <section id="about" class="position-relative">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <h4 class="d-inline-flex font-weight-regular align-center">
          <v-icon size="15" class="mr-2">mdi-account-outline</v-icon
          >{{ $t("about.title") }}
        </h4>
        <h2
          class="font-weight-thin"
          :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
        >
          <span class="accent">{{ $t("about.automating") }}</span>
          {{ $t("about.automating-purpose") }},<br />
          <span class="accent">{{ $t("about.scaling") }}</span>
          {{ $t("about.scaling-purpose") }}.
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="1"
          class="mt-10 mb-16 pl-1 quote text-grey"
        >
          {{ $t("about.quote1") }}<br /><br />{{ $t("about.quote2") }}
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
