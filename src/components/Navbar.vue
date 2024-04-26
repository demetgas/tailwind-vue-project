<template>
  <div
    class="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white"
  >
    <div
      class="pl-16 text-2xl text-gray-400 hover:text-white hover:scale-110 transition-all delay-75 cursor-pointer"
    >
      LITTLE PAWS
      <font-awesome-icon class="icon" :icon="faCat" />
    </div>
    <div class="flex space-x-6 pr-16 text-gray-400 text-xl cursor-pointer">
      <a href="/" class="hover:text-white"> Home </a>
      <a href="#purpose" class="hover:text-white"> Purpose </a>
      <a href="#info" class="hover:text-white"> Info </a>
      <a href="#gallery" class="hover:text-white"> Gallery </a>
      <a href="#contact" class="hover:text-white"> Contact </a>
    </div>
  </div>
</template>

<script>
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "NavBar",
  components: {
    FontAwesomeIcon,
  },
  computed: {
    faCat() {
      return faCat;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}*/
</style>
