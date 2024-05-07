<template>
  <div>
    <div
      class="w-full min-h-[50px] bg-hero flex justify-between items-center absolute z-10 text-white"
      :class="{ fixed: open }"
    >
      <div
        class="md:pl-16 pl-5 text-2xl text-gray-400 hover:text-white hover:scale-110 transition-all delay-75 cursor-pointer"
      >
        LITTLE PAWS
        <font-awesome-icon class="icon" :icon="faCat" />
      </div>
      <div class="md:hidden relative z-10">
        <button @click="handleClick" class="text-xl text-gray-400 mr-4">
          <font-awesome-icon :icon="open ? faTimes : faBars" />
        </button>
      </div>
      <ul
        class="md:flex"
        :class="[
          open ? 'block' : 'hidden',
          'md:h-[50px]',
          'h-screen',
          'md:mt-0',
          'absolute',
          'md:relative',
          'top-0',
          'right-0',
          'md:top-0',
          'md:right-auto',
          'flex-col',
          'md:flex-row',
          'text-gray-400',
          'text-xl',
          'bg-hero2',
          'md:bg-transparent',
          'w-[30vw]',
          'md:w-auto',
          'text-center',
          'justify-center',
          'items-center',
        ]"
      >
        <li
          class="p-4 hover:text-white hover:underline mt-10 md:mt-0"
          @click="handleClick"
        >
          <a href="/">Home</a>
        </li>
        <li class="p-4 hover:text-white hover:underline" @click="handleClick">
          <a href="#purpose">About</a>
        </li>
        <li class="p-4 hover:text-white hover:underline" @click="handleClick">
          <a href="#info">Info</a>
        </li>
        <li class="p-4 hover:text-white hover:underline" @click="handleClick">
          <a href="#gallery">Gallery</a>
        </li>
        <li class="p-4 hover:text-white hover:underline" @click="handleClick">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    <div :class="{ darkbg: open }"></div>
  </div>
</template>

<script>
import { faCat, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "NavBar",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    },
  },
  components: {
    FontAwesomeIcon,
  },
  computed: {
    faCat() {
      return faCat;
    },
    faBars() {
      return faBars;
    },
    faTimes() {
      return faTimes;
    },
  },
};
</script>

<style scoped>
.fixed {
  position: fixed;
}
.darkbg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
}
</style>
