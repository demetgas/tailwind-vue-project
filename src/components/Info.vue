<template>
  <div
    id="info"
    class="max-w-[100%] h-auto p-10 lg:mt-[30px] md:mt-[60px] mt-[10px] bg-babyblue"
  >
    <h2
      class="text-center text-gray-700 font-bold lg:text-4xl md:text-3xl text-3xl italic"
    >
      Cats are fascinating creatures
    </h2>
    <div
      class="grid lg:grid-cols-2 grid-cols-1 gap-32 max-w-[1140px] mx-auto py-10"
    >
      <div class="text-justify">
        <p class="mb-7 mt-10 text-lg">
          Cats' unique behaviors, from their playful antics to their grooming
          rituals, highlight their captivating nature. Despite their independent
          streak, cats form strong bonds with their human companions, offering
          companionship and warmth in a way that's truly special.
        </p>
        <p class="mb-10 text-lg">
          One of the most captivating aspects of cats is their remarkable
          agility and athleticism. Whether gracefully leaping to impossible
          heights or contorting their bodies with impressive flexibility, cats
          never cease to amaze with their acrobatic prowess. Their keen senses
          and lightning-fast reflexes further contribute to their status as
          skilled hunters and agile explorers of their environments.
        </p>
        <p class="text-lg">
          Understanding and appreciating the intricacies of cat behavior not
          only deepens our connection with these remarkable animals but also
          enriches our own lives in immeasurable ways.
        </p>
      </div>
      <div class="flex justify-center items-center">
        <img
          src="https://images.vexels.com/media/users/3/272056/isolated/preview/54b293603423b19ebd21fee4c7f475e8-cute-black-cartoon-cat.png"
          alt=""
          class="lg:w-[450px] w-[300px] max-h-full hover:scale-110 transition-all delay-75"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoSection",
};
</script>
