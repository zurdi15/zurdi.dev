<template>
  <div data-aos="fade-left" data-aos-delay="60" class="main-menu text-white">
    <v-row no-gutters class="text-center py-4">
      <v-col cols="12">
        <v-icon class="my-3" @click="" size="22">mdi-home-outline</v-icon>
      </v-col>
      <v-col cols="12">
        <v-icon class="my-3" @click="" size="22">mdi-account-outline</v-icon>
      </v-col>
      <v-col cols="12">
        <v-icon class="my-3" @click="" size="22">mdi-briefcase-outline</v-icon>
      </v-col>
      <v-col cols="12">
        <v-icon class="my-3" @click="" size="22">mdi-shape-outline</v-icon>
      </v-col>
      <v-col cols="12">
        <v-icon class="my-3" @click="" size="22">mdi-apps</v-icon>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.main-menu {
  border: 1px solid var(--v-theme-gray2);
  border-radius: 30px;
  background-color: black;
  position: fixed;
  right: 70px;
  top: calc(50dvh - 132px);  /* 132px is based on the height of the menu divided by 2 */
  width: 55px;
  z-index: 1;
}
.main-menu .v-icon {
  cursor: pointer;
  color: var(--v-theme-gray1);
  transition: color 0.3s, transform 0.3s;
}
.main-menu .v-icon:hover {
  color: var(--v-theme-primary);
  transform: scale(1.2);
}
</style>
