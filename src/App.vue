<template>
  <Navbar />
  <Hero />
  <Cats />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Cats from "./components/Cats.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    Cats,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
