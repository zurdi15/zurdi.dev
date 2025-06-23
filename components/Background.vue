<template>
  <video class="background" muted autoplay loop>
    <source src="/bg.mp4" type="video/mp4" />
  </video>
</template>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  opacity: 0.3;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 0!important;
}
</style>
