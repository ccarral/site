<template>
  <div id="aboutPage">
    <div class="centerColumn">
      <TopNavigation></TopNavigation>
      <h1 class="subtitle">Acerca de mí</h1>
      <div class="content aboutBox">
        <div class="aboutPhotoContainer">
          <img
            src="/about_img_2.jpg"
            alt="no se encontró!"
            class="aboutPhoto"
          />
        </div>
        <div id="aboutText">
          <Content />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavigation from "../components/TopNavigation.vue";

export default {
  components: { TopNavigation }
};
</script>

<style>
p {
  font-family: Radley;
}

.aboutBox {
  /* width: 0%; */
  max-width: 99%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  border: solid;
  border-width: 10px;
  --photo-width: 45%;
}

.aboutBox mark {
  background-color: #d1d1d1;
  color: #121212;
}

.aboutBox ul {
  text-decoration: none;
  padding-left: 2em;
  list-style-type: "+ ";
}

.infoBox mark {
  background-color: #3eff9a;
}

.aboutPhoto {
  width: var(--photo-width);
  /* min-width: 200px; */
  height: auto;
  /* max-width: 100%; */
  height: auto;
  display: block;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: auto;
  margin-right: auto;
}

.aboutPhotoContainer {
  padding: 30px;
  display: block;
  margin: auto;
}

#aboutText {
  width: var(--photo-width);
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
}

#mail {
  font-size: 17px;
}
</style>
