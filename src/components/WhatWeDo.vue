<template>
  <div class="max-w-[100%] h-auto mt-20">
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
      <div
        v-for="item in whatwedo"
        :key="item.id"
        class="mx-auto border-2 m-10 lg:w-[80%] md:w-[70%] w-[60%] h-auto p-5 flex flex-col items-center hover:scale-110 hover:border-babyblue2 transition-all delay-75 cursor-pointer"
      >
        <font-awesome-icon class="text-babyblue2" size="4x" :icon="item.icon" />

        <h2 class="text-center font-bold m-2">{{ item.title }}</h2>
        <p class="text-justify">{{ item.desc }}</p>
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
import whatwedo from "../data/whatwedo.js";

export default {
  name: "WhatWeDo",
  data() {
    return {
      whatwedo: whatwedo,
    };
  },
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
