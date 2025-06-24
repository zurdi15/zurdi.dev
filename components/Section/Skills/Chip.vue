<script setup lang="ts">
defineProps<{
  skill: {
    name: string;
    icon: string;
    delay: number;
    image?: string; // Optional for skills that use an image instead of an icon
  };
}>();
</script>
<template>
  <div data-aos="fade-up" :data-aos-delay="skill.delay">
    <v-hover v-slot:default="{ props, isHovering }">
      <v-card
        v-bind="props"
        class="skill-chip glass transparent ma-4"
        height="244"
      >
        <v-card-text class="text-center text-white">
          <v-img v-if="skill.image" :src="skill.image" width="45" class="mb-6 mx-auto skill-img" />
          <v-icon v-else size="50" class="mb-8">{{ skill.icon }}</v-icon>
          <h3
            class="font-weight-bold skill-name"
            :class="{ accent: isHovering }"
          >
            {{ skill.name }}
          </h3>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>
<style scoped>
.skill-chip{
  border: 2px solid var(--v-theme-gray2);
  border-radius: 85px;
  padding: 54px 0 48px;
  transition: border-color 0.3s ease;
}
.skill-chip:hover {
  border-color: var(--v-theme-primary);
}
.skill-name {
  transition: color 0.3s ease;
}
.skill-img {
  margin-top: -5px;
  filter: brightness(0) invert(1)!important;
}
</style>
