<template>
  <div
    class="max-w-[1140px] mx-auto w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[-75px]"
  >
    <div
      v-for="cat in cats"
      class="relative p-4 hover:scale-110 hover:underline transition-all delay-75 cursor-pointer text-center"
      :key="cat.id"
    >
      <img
        class="w-64 h-64 object-cover mx-auto border-4 border-black p-2 shadow-lg"
        :src="cat.img"
        alt="/"
      />
      <h3
        class="text-black bg-opacity-70 rounded-md p-1.5 border-black text-xl font-bold"
      >
        {{ cat.name }}
      </h3>
    </div>
  </div>
</template>
<script>
import cats from "../data/cats.js";
export default {
  name: "CatSection",
  data() {
    return {
      cats: cats,
    };
  },
};
</script>
