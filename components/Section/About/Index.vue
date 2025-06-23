<script setup lang="ts">
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
</script>
<template>
  <section id="about">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <SectionChip
          icon="mdi-account-outline"
          section="about"
        />
        <h2
          class="font-weight-thin mb-10"
          :class="{ desktop: lgAndUp, mobile: !lgAndUp }"
        >
          <span class="accent">{{ $t("about.automating") }}</span>
          {{ $t("about.automating-purpose") }},<br />
          <span class="accent">{{ $t("about.scaling") }}</span>
          {{ $t("about.scaling-purpose") }}.
        </h2>
        <p
          data-aos="fade-up"
          class="mb-16 pl-1 quote text-grey"
        >
          {{ $t("about.quote1") }}<br /><br />{{ $t("about.quote2") }}
        </p>
      </div>
    </div>
  </section>
</template>
