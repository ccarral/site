<template>
  <div class="centerColumn content">
    <TopNavigation></TopNavigation>
    <Content />
  </div>
</template>
<script>
import TopNavigation from "../components/TopNavigation.vue";

export default {
  components: { TopNavigation }
};
</script>

<style>
.inverted {
  background: rgba(41, 41, 41, 1);
  color: #fffff1;
  width: fit-content;
  text-decoration: none;
}
</style>
