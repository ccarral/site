<template>
  <div class="centerColumn">
    <TopNavigation></TopNavigation>
    <Content />
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
h1 {
  font-family: "Work Sans";
  font-size: 50px;
  text-decoration: underline;
  text-decoration-color: #9effd7;
  color: #232323;
}
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
</style>
