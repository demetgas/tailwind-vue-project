<template>
  <div class="relative w-full h-[78.5vh]">
    <img :src="bghero" alt="/" class="w-full h-[78.5vh] object-cover" />
    <div class="grid md:grid-cols-2 grid-cols-1 absolute inset-0">
      <div
        class="flex items-center justify-center p-4 text-white mt-28 md:mt-0"
      >
        <div>
          <h1 class="lg:text-[70px] md:text-[50px] sm:text-[40px] text-[27px]">
            Welcome to the Cat Paradise
          </h1>
          <h2
            class="lg:text-[45px] md:text-[30px] sm:text-[28px] text-[22px] py-4 italic"
          >
            Meet Our Furry Friends...
          </h2>
          <p
            class="text-justify max-w-[750px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[17px]"
          >
            Here at our home, we are proud to introduce you to our beloved
            feline companions. Each one has their own unique personality and
            charm, and they bring endless joy to our lives. Join us on this
            journey as we share tales of mischief, cuddles, and everything in
            between!
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center overflow-hidden">
        <img
          src="https://parspng.com/wp-content/uploads/2023/01/catpng.parspng.com-6.png"
          alt="/"
          class="md:max-w-full md:max-h-max max-w-[80vw] hidden xs:block sm:block md:block opacity-75 transform scale-x-[-1] self-end"
        />
      </div>
    </div>
  </div>
</template>

<script>
import bghero from "../assets/bghero.jpg";
export default {
  name: "HeroSection",
  data() {
    return {
      bghero: bghero,
    };
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
