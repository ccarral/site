<template>
  <div id="nav-container">
    <router-link to="/">
        <div id="home-tag" class="tag">[{{homeTag}}]</div>
    </router-link> 
    <router-link v-if="$frontmatter.prev" :to="$frontmatter.prev">
        <div id="prev-tag" class="tag">[<-]</div>
    </router-link> 
    <router-link v-if="$frontmatter.en" :to="$frontmatter.en">
        <div id="lang" class="tag">[en]</div>
    </router-link> 
    <router-link v-if="$frontmatter.es" :to="$frontmatter.es">
        <div id="lang" class="tag">[es]</div>
    </router-link> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeTag: "⌂"
    };
  }
};
</script>
<style>

.tag{
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  width: fit-content;
  font-size: 20px;
  margin-top: 5vh;
  font-family:"Iosevka"
}

#home-tag {
  color: #ff4242;
}

#prev-tag{
  color: #535353;
}

#lang{
  text-align: right;
  color: #9f83ff;
  float:right;
}
</style>
