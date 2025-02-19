<script setup lang="ts">
useHead({
  title: "Zurdotopia",
  meta: [{ name: "description", content: "Zurdotopia" }],
});
</script>

<template>
  <v-app>
    <v-main>
      <Background />
      <div class="profile-card text-white">
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
          class="profile-img mx-auto mt-6"
          src="@/assets/img/profile_thin.jpg"
          width="300"
        />
        <div class="text-center">
          <div class="mt-12">
            <span class="text-h5">contact@zurdi.dev</span>
          </div>
          <div class="d-flex justify-center mt-6 social-profile">
            <a href="https://gitub.com/zurdi" target="_blank">
              <v-icon size="20">mdi-github</v-icon>
            </a>
            <a href="https://gitub.com/zurdi" class="ml-2" target="_blank">
              <v-icon size="20">mdi-email-outline</v-icon>
            </a>
          </div>
          <div class="text-grey mt-6">
            <span class="text-caption">© 2025 Zurdi. All Rights Reserved</span>
          </div>
        </div>
      </div>

      <section class="main-section">
        <div class="main-container-content">
          <div class="content text-white">
            <h4 class="align-center">
              <v-icon size="15" class="mr-2">mdi-home-outline</v-icon>Introduce
            </h4>
            <p class="mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              quis similique tempora obcaecati exercitationem asperiores at quo
              voluptas eius provident, sed et. Quibusdam ea consequuntur harum
              maxime suscipit tempora laboriosam?
            </p>
          </div>
        </div>
      </section>
    </v-main>
  </v-app>
</template>
<style scoped>
.profile-card {
  border: 1px solid #565656;
  padding: 50px;
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
}
.profile-img,
.profile-card {
  border-radius: 30px;
}
.profile-img {
  filter: grayscale(100%);
}
.designation {
  font-size: 14px;
}
.social-profile a {
  border: 2px solid #565656;
  border-radius: 50%;
  color: #999;
  display: block;
  font-size: 20px;
  height: 50px;
  line-height: 46px;
  text-align: center;
  transition: border 0.3s, color 0.3s;
  width: 50px;
  text-decoration: none;
}
.social-profile a:hover {
  color: #28e98c;
  border: 2px solid #28e98c;
  cursor: pointer;
}
.main-section {
  overflow: hidden;
  padding: 140px 0;
  position: relative;
}
.main-container-content {
  margin: auto;
  max-width: 1130px;
  padding: 0 15px;
}
.content {
  margin-left: auto;
  max-width: 770px;
  width: 100%;
}
.content h4 {
  align-items: center;
  border: 1px solid #565656;
  border-radius: 30px;
  display: inline-flex;
  font-size: 12px;
  font-weight: 400;
  margin: 0 0 53px;
  padding: 9px 20px;
  text-transform: uppercase;
}
.content h4 .v-icon {
  margin-bottom: 1px;
}
</style>
