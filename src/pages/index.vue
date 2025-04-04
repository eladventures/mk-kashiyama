<template>
  <!-- Hero Image Full Width -->
  <section class="w-full">
    <!-- Full-width image at top -->
    <img :src="heroImg" alt="Hero" class="object-contain w-full h-auto" />

    <!-- Text + Button -->
    <div
      class="container flex flex-col items-center px-4 pt-16 pb-8 mx-auto text-center md:py-12 md:px-10 lg:px-32 xl:max-w-5xl"
    >
      <h1 class="text-5xl font-bold leading-none sm:text-4xl">
        Philippines Exclusive Distributor
      </h1>
      <p class="px-8 mt-8 mb-0 text-lg">
        MK Kashiyama has a long history and experience in producing high-quality
        brake components since 1960. MK Kashiyama is driven toward products with
        better safety and higher functionality.
      </p>
      <!-- <div class="flex flex-wrap justify-center">
        <button
          class="px-8 py-1 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300"
        >
          Contact Us
        </button>
      </div> -->
    </div>

    <!-- 3 Product Images (Grid) -->
    <div class="container flex flex-col justify-center px-4 pb-12 mx-auto">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <img
          src="/assets/images/mk-passenger-pad.jpg"
          class="object-cover w-full border border-gray-300 rounded shadow aspect-square"
          alt="Passenger Pad"
        />
        <img
          src="/assets/images/mk-passenger-shoe.jpg"
          class="object-cover w-full border border-gray-300 rounded shadow aspect-square"
          alt="Passenger Shoe"
        />
        <img
          src="/assets/images/mk-brake.jpg"
          class="object-cover w-full border border-gray-300 rounded shadow aspect-square"
          alt="Brake"
        />
      </div>
    </div>

    <!-- next section -->
  </section>
  <section class="my-8 text-gray-800 bg-gray-100">
    <div
      class="container flex flex-col items-center px-4 py-10 mx-auto space-y-6 md:p-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        class="w-12 h-12 sm:w-16 sm:h-16 text-violet-600"
      >
        <!-- icon path remains the same -->
      </svg>

      <h1
        class="text-2xl font-bold leading-tight text-center underline sm:text-3xl md:text-4xl"
      >
        Your Trusted Source for MK Kashiyama in the Philippines
      </h1>

      <p
        class="max-w-3xl text-lg font-semibold text-center text-gray-700 sm:text-xl md:text-2xl"
      >
        "Guaranteed authentic. Avoid counterfeits. <br />
        Get genuine quality, every time."
      </p>
    </div>
  </section>
</template>

<script setup>
import heroImg from '@/assets/images/mk-logo-sm.jpg';

definePageMeta({
  layout: 'default',
});

useHead({
  title: 'Nuxt + Tailwind Template',
  description: 'Clean and minimal Nuxt 3 + Tailwind starter template.',
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
