<template>
  <router-link to="/"
    ><div id="home">
      {{ homeTag }}
    </div></router-link
  >
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
  margin-bottom: 70px;
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

#home:hover {
  border-color: #000000;
  border: 3px solid black;
}
</style>
