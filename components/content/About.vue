<template>
  <section class="position-relative">
    <div class="section-inner-container ma-auto py-0 px-1">
      <div class="text-white">
        <h4 class="d-inline-flex font-weight-regular align-center">
          <v-icon size="15" class="mr-2">mdi-account-outline</v-icon>About
        </h4>
        <h2 class="font-weight-thin">
          <span class="accent">Automating</span> with purpose,
          <span class="accent">scaling</span> with precision
        </h2>
        <p class="mt-10 mb-16 quote text-grey">
          MLOps Engineer with a solid background in cloud environments
          (primarily Azure) and previous experience as a data engineer.
          Specialized in automating training and deployment pipelines,
          infrastructure as code, and DevOps practices applied to the ML
          lifecycle. I consider myself a proactive individual with a strong
          ability to learn, who enjoys collaborating with multidisciplinary and
          multicultural teams.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
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
  max-width: 770px;
  width: 100%;
}
.section-inner-container > div > h4 {
  border: 1px solid var(--v-theme-gray2);
  border-radius: 30px;
  font-size: 12px;
  margin: 0 0 50px;
  padding: 10px 20px;
  text-transform: uppercase;
}
.section-inner-container > div > h4 .v-icon {
  margin-bottom: 1px;
}
.section-inner-container > div > h1 {
  font-size: 75px;
  line-height: 90px;
}
.section-inner-container > div > h2 {
  font-size: 50px;
  line-height: 60px;
}
.quote {
  max-width: 800px;
}
</style>
