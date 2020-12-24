<template>
  <div class="centerColumn content textblock">
    <TopNavigation></TopNavigation>
    <Content />
    <div id="bottom">
      <router-link to="/">volver al inicio</router-link>
    </div>
  </div>
</template>

<script>
const hljs = require("highlight.js");
import TopNavigation from "../components/TopNavigation.vue";
export default {
  components: { TopNavigation },
  mounted: function() {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  }
};
</script>

<style>
.date {
  text-align: right;
  font-size: 20px;
  text-justify: auto;
  font-family: "Radley", arial;
  color: rgba(41, 41, 41, 1);
}

img {
  margin-top: 2em;
  margin-bottom: 2em;
  width: 100%;
  height: auto;
  vertical-align: middle;
}

p {
  font-size: 19px;
  /* text-align: justify; */
  text-justify: auto;
  font-family: "Radley", arial;
  color: rgba(41, 41, 41, 1);
}

#bottom {
  padding-top: 4em;
  padding-bottom: 3em;
  margin-left: auto;
  margin-right: auto;
  width: 10vw;
  color: #41ff61;
  text-decoration: underline;
}

.textblock p a {
  text-decoration: underline;
  color: #ff4f37;
}
</style>
