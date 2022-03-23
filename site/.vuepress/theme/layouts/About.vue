<template>
  <div id="aboutPage">
    <div class="centerColumn">
      <TopNavigation></TopNavigation>
      <div class="content aboutBox mobile">
        <div class="aboutPhotoContainer">
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
  font-family: "Iosevka";
}

.aboutBox {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  border: solid;
  border-width: 0.5em;
  --photo-width: 80%;
  margin-top:2vw;
}

.aboutBox mark {
  background-color: #d1d1d1;
  color: #121212;
}

.aboutBox ul {
  padding-left: 2em;
  list-style-type: "* ";
}

.infoBox mark {
  background-color: #3eff9a;
}

.aboutPhoto {
  width: var(--photo-width);
  height: auto;
  height: auto;
  display: block;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.aboutPhotoContainer {
  padding: 0px;
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
