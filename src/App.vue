<template>
  <Navbar />
  <Hero />
  <Cats />
  <Intro />
  <ReadMore />
  <Info />
  <WhatWeDo />
  <Gallery />
  <Message />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Cats from "./components/Cats.vue";
import Intro from "./components/Intro.vue";
import ReadMore from "./components/ReadMore.vue";
import Info from "./components/Info.vue";
import WhatWeDo from "./components/WhatWeDo.vue";
import Gallery from "./components/Gallery.vue";
import Message from "./components/Message.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    Cats,
    Intro,
    ReadMore,
    Info,
    WhatWeDo,
    Gallery,
    Message,
    Footer,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
