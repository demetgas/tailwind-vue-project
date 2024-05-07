<template>
  <div id="contact" class="max-w-[1140px] m-auto mt-[5svh]">
    <h2 class="text-center text-gray-700 p-4 font-bold md:text-4xl text-3xl">
      Send us a message
    </h2>
    <p class="text-center text-gray-700 md:text-2xl text-xl">
      Can't wait to hear your thoughts!
    </p>
    <div class="grid md:grid-cols-2 grid-cols-1 mt-16">
      <img
        :src="f2"
        alt="/"
        class="md:h-full w-[400px] h-[400px] mx-auto p-2 max-h-[500px] hover:scale-110 transition-all delay-75"
      />
      <form>
        <div class="grid grid-cols-2">
          <div class="relative">
            <input
              class="border m-2 p-2 rounded md:h-10 md:w-[10vw] outline-none focus:border-babyblue3 transition duration-200"
              type="text"
            />
            <span
              class="absolute left-5 top-4 text-gray-400 transition duration-200 input-text"
              >Name</span
            >
          </div>
          <div class="relative">
            <input
              class="border m-2 p-2 md:h-10 md:w-[10vw] rounded outline-none focus:border-babyblue3 transition duration-200"
              type="text"
            />
            <span
              class="absolute left-5 top-4 text-gray-400 transition duration-200 input-text"
              >Last Name</span
            >
          </div>
          <div class="relative">
            <input
              class="border m-2 p-2 md:h-10 md:w-[10vw] rounded outline-none focus:border-babyblue3 transition duration-200"
              type="email"
            />
            <span
              class="absolute left-5 top-4 text-gray-400 transition duration-200 input-text"
              >Email</span
            >
          </div>
          <div class="relative">
            <input
              class="border m-2 p-2 md:h-10 md:w-[10vw] rounded outline-none focus:border-babyblue3 transition duration-200"
              type="tel"
            />
            <span
              class="absolute left-5 top-4 text-gray-400 transition duration-200 input-text"
              >Phone</span
            >
          </div>
          <div class="relative">
            <input
              class="border md:h-10 md:w-[21.2vw] p-2 m-2 rounded outline-none focus:border-babyblue3 transition duration-200"
              type="text"
            />
            <span
              class="absolute left-5 top-4 text-gray-400 transition duration-200 input-text"
              >Adress</span
            >
          </div>
          <textarea
            class="border col-span-2 m-2 p-2 rounded"
            cols="30"
            rows="10"
          ></textarea>
          <button
            class="m-2 p-2 col-span-2 rounded text-white bg-hero2 hover:bg-hero transition duration-3000 ease-out delay-100"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import f2 from "../assets/f2.jpeg";
export default {
  name: "MessageSection",
  data() {
    return {
      f2: f2,
    };
  },
};
</script>
