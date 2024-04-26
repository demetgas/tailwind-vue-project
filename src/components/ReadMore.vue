<template>
  <div
    class="max-w-[1900px] mt-40 mx-auto lg:min-h-[25svh] md:h-[15svh] sm:h-[120svh] items-center"
  >
    <div
      class="grid md:grid-cols-2 w-full lg:grid-cols-3 md:gap-[28px] lg:gap-[80px]"
    >
      <img
        src="https://m.media-amazon.com/images/M/MV5BOWI3NzQ0MTAtMGQzNi00NjY5LTk5YTYtZjE0M2EzODlkNGRhXkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_.jpg"
        alt="Enigmatic Cat"
        class="w-full md:min-w-[400px] sm:w-[60svw] md:min-h-[490px] mx-auto lg:max-w-[16svw] lg:max-h-[45svh] md:h-[40svh] shadow-2xl shadow-hero hover:scale-110 transition-all delay-75"
      />
      <div class="flex flex-col lg:mt-0 md:mt-20 lg:p-0 md:p-0 sm:p-5">
        <p
          class="underline lg:text-[20px] md:text-[17px] font-bold cursor-pointer"
        >
          About Us
        </p>
        <h1 class="lg:text-3xl md:text-[25px] mt-2">
          <b>Captivating Creatures:</b> The Enigmatic Charm of Cats
        </h1>
        <p
          class="lg:text-[20px] md:text-[17px] text-justify lg:max-w-[650px] md:max-w-[350px] mt-3"
        >
          Cats, with their enigmatic gaze and graceful movements, possess an
          undeniable allure that has captivated humans for centuries. These
          enigmatic felines, revered in ancient cultures and cherished as
          beloved companions in modern times, embody a unique blend of
          independence and affection.
        </p>
        <div class="flex mt-5 md:text-[15px] lg:text-[17px]">
          <font-awesome-icon
            class="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            :icon="faArrowRight"
          />
          <p>
            Cats possess an innate grace, moving with elegance and precision in
            every step.
          </p>
        </div>
        <div class="flex my-5 md:text-[15px] lg:text-[17px]">
          <font-awesome-icon
            class="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            :icon="faArrowRight"
          />
          <p>
            Their expressive eyes reveal a depth of emotion and intelligence
            that intrigues and delights.
          </p>
        </div>
        <div class="flex md:text-[15px] lg:text-[17px]">
          <font-awesome-icon
            class="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            :icon="faArrowRight"
          />
          <p>
            From playful antics to serene moments of contemplation, cats weave a
            tapestry of charm into the fabric of our lives.
          </p>
        </div>
        <button
          class="bg-hero2 hover:bg-hero rounded w-32 h-12 text-white font-bold md:mt-5 lg:mt-10 sm:mt-5"
        >
          Read More
        </button>
      </div>
      <div class="mx-auto text-center">
        <h1 class="lg:text-2xl md:text-[25px] sm:text-xl font-bold">
          Also here is what our users said...
        </h1>
        <div
          class="grid lg:grid-cols-1 md:grid-cols-3 lg:w-[25svw] md:w-[100svw] sm:w-[40svw] gap-6 mt-6 mx-auto"
        >
          <div
            class="border-8 h-auto border-babyblue rounded hover:scale-110 transition-all delay-75 cursor-pointer"
          >
            <p class="text-lg md:text-xl font-bold">Jin said:</p>
            <p class="text-lg md:text-xl p-3">
              In his thoughtful commentary, Jin emphasized the graceful
              movements and timeless appeal of these fascinating creatures,
              highlighting their unique ability to captivate humans throughout
              history.
            </p>
          </div>
          <div
            class="border-8 h-auto border-babyblue rounded hover:scale-110 transition-all delay-75 cursor-pointer"
          >
            <p class="text-lg md:text-xl font-bold">Chris said:</p>
            <p class="text-lg md:text-xl p-3">
              Chris, a cat lover, eloquently described the captivating nature of
              cats in his feedback. He marveled at their graceful movements and
              noted how they possess a timeless appeal to humans.
            </p>
          </div>
          <div
            class="border-8 h-auto border-babyblue rounded hover:scale-110 transition-all delay-75 cursor-pointer"
          >
            <p class="text-lg md:text-xl font-bold">Anna said:</p>
            <p class="text-lg md:text-xl p-3">
              Her words underscore the profound impact these creatures have on
              human emotions, from ancient cultures to modern times, embodying a
              unique blend of independence and affection.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "ReadMore",
  components: {
    FontAwesomeIcon,
  },
  computed: {
    faArrowRight() {
      return faArrowRight;
    },
  },
};
</script>
