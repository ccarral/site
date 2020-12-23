<template>
  <div id="nav-container">
    <router-link to="/"><div id="home"></div></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeTag: ""
    };
  }
};
</script>
<style>
#home {
  margin-top: 30px;
  /* margin-bottom: 70px; */
  margin-left: auto;
  margin-right: auto;
  padding: 0.1em;
  text-align: center;
  background: #ff4f37;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  transition: all 0.1s ease-out;
  font-family: "Work Sans";
  letter-spacing: 0.03em;
  color: #ffffff;
  border: 3px solid #ff4f37;
}

#nav-container {
  margin-bottom: 70px;
}

#home:hover {
  border-color: #000000;
  border: 3px solid black;
}

#home-tag {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
