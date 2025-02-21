<template>
  <div class="wip-banner">
    <span class="text-subtitle-1">Work in progress</span>
  </div>
</template>
<style scoped>
.wip-banner {
  position: fixed;
  width: 100%;
  height: 22px;
  background: var(--v-theme-primary);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  opacity: 0.6;
}
</style>
