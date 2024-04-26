<template>
  <div class="max-w-[100%] lg:h-[30svh] md:h-[50svh] mt-[120px]">
    <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
      <div
        class="mx-auto border-2 m-10 lg:w-[20svw] md:w-[20svh] sm:w-[40svw] h-auto p-5 flex flex-col items-center hover:scale-110 transition-all delay-75 cursor-pointer"
      >
        <font-awesome-icon class="text-babyblue2" size="4x" :icon="faCat" />

        <h2 class="text-center font-bold m-2">A Lovely Friend</h2>
        <p class="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad iusto sit
          corrupti? Distinctio cumque, itaque dicta nemo ipsa obcaecati
          accusantium repellendus voluptatum reprehenderit deleniti cupiditate
          ad fugit illo blanditiis nisi?
        </p>
      </div>
      <div
        class="mx-auto border-2 m-10 lg:w-[20svw] md:w-[280px] sm:w-[40svw] h-auto p-5 flex flex-col items-center hover:scale-110 transition-all delay-75 cursor-pointer"
      >
        <font-awesome-icon class="text-babyblue2" size="4x" :icon="faPaw" />
        <h2 class="text-center font-bold m-2">A Lovely Place</h2>
        <p class="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad iusto sit
          corrupti? Distinctio cumque, itaque dicta nemo ipsa obcaecati
          accusantium repellendus voluptatum reprehenderit deleniti cupiditate
          ad fugit illo blanditiis nisi?
        </p>
      </div>
      <div
        class="mx-auto border-2 m-10 lg:w-[20svw] md:w-[280px] sm:w-[40svw] h-auto p-5 flex flex-col items-center hover:scale-110 transition-all delay-75 cursor-pointer"
      >
        <font-awesome-icon
          class="text-babyblue2"
          size="4x"
          :icon="faBowlFood"
        />

        <h2 class="text-center font-bold m-2">A Lovely Meal</h2>
        <p class="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad iusto sit
          corrupti? Distinctio cumque, itaque dicta nemo ipsa obcaecati
          accusantium repellendus voluptatum reprehenderit deleniti cupiditate
          ad fugit illo blanditiis nisi?
        </p>
      </div>
      <div
        class="mx-auto border-2 m-10 lg:w-[20svw] md:w-[280px] sm:w-[40svw] h-auto p-5 flex flex-col items-center hover:scale-110 transition-all delay-75 cursor-pointer"
      >
        <font-awesome-icon class="text-babyblue2" size="4x" :icon="faHeart" />
        <h2 class="text-center font-bold m-2">A Lovely Day</h2>
        <p class="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad iusto sit
          corrupti? Distinctio cumque, itaque dicta nemo ipsa obcaecati
          accusantium repellendus voluptatum reprehenderit deleniti cupiditate
          ad fugit illo blanditiis nisi?
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import {
  faCat,
  faPaw,
  faBowlFood,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "WhatWeDo",
  components: {
    FontAwesomeIcon,
  },
  computed: {
    faCat() {
      return faCat;
    },
    faPaw() {
      return faPaw;
    },
    faBowlFood() {
      return faBowlFood;
    },
    faHeart() {
      return faHeart;
    },
  },
};
</script>
