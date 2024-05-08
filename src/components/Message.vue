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
        <div class="grid grid-cols-2 gap-x-3">
          <div class="relative col-span-1">
            <input
              class="border w-full m-2 p-2 rounded outline-none focus:border-babyblue3 transition duration-200"
              type="text"
              @blur="handleInputBlur('name')"
              v-model="name"
            />
            <span
              class="absolute left-5 top-4 text-gray-400 transition duration-200"
              :class="{
                'text-babyblue3 bg-white transform -translate-y-5 scale-90':
                  name,
              }"
              >Name</span
            >
          </div>
          <div class="relative col-span-1">
            <input
              class="border w-full m-2 p-2 rounded outline-none focus:border-babyblue3 transition duration-200"
              type="text"
              @blur="handleInputBlur('lastName')"
              v-model="lastName"
            />
            <span
              class="absolute left-5 top-4 text-gray-400 transition duration-200"
              :class="{
                ' bg-white text-babyblue3 transform -translate-y-5 scale-90':
                  lastName,
              }"
              >Last Name</span
            >
          </div>
          <div class="relative col-span-1">
            <input
              class="border w-full m-2 p-2 rounded outline-none focus:border-babyblue3 transition duration-200"
              type="email"
              @blur="handleInputBlur('email')"
              v-model="email"
            />
            <span
              class="absolute left-5 top-4 text-gray-400 transition duration-200"
              :class="{
                'text-babyblue3 bg-white transform -translate-y-5 scale-90':
                  email,
              }"
              >Email</span
            >
          </div>
          <div class="relative col-span-1">
            <input
              class="border w-full m-2 p-2 rounded outline-none focus:border-babyblue3 transition duration-200"
              type="tel"
              @blur="handleInputBlur('phone')"
              v-model="phone"
            />
            <span
              class="absolute left-5 top-4 text-gray-400 transition duration-200"
              :class="{
                'text-babyblue3 bg-white transform -translate-y-5 scale-90':
                  phone,
              }"
              >Phone</span
            >
          </div>
          <div class="relative col-span-2">
            <input
              class="border w-full p-2 m-2 rounded outline-none focus:border-babyblue3 transition duration-200"
              type="text"
              @blur="handleInputBlur('address')"
              v-model="address"
            />
            <span
              class="absolute left-5 top-4 text-gray-400 transition duration-200"
              :class="{
                ' text-babyblue3 bg-white transform -translate-y-5 scale-90':
                  address,
              }"
              >Address</span
            >
          </div>
          <div class="col-span-2">
            <textarea
              class="border w-full m-2 p-2 rounded outline-none focus:border-babyblue3"
              cols="30"
              rows="10"
            ></textarea>
            <button
              class="m-2 p-2 w-full rounded text-white bg-hero2 hover:bg-hero transition duration-3000 ease-out delay-100"
            >
              Submit
            </button>
          </div>
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
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    };
  },
  methods: {
    handleInputBlur(field) {
      const value = this[field];
      if (!value) {
        this[field] = "";
      }
    },
  },
};
</script>
