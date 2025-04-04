<script setup>
import logoImg from '@/assets/images/mk-kashiyama.png';
</script>

<template>
  <div class="w-full min-h-screen text-gray-900 bg-white">
    <!-- Navbar -->
    <header class="fixed top-0 left-0 z-50 w-full p-4 bg-white shadow">
      <div class="container flex items-center justify-between h-12 mx-auto">
        <!-- Logo / Brand -->
        <a href="/" aria-label="Back to homepage" class="flex items-center p-2">
          <img :src="logoImg" alt="Logo" class="w-auto h-12" />
        </a>
        <!-- Nav links -->
        <ul class="hidden space-x-6 md:flex">
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-600"
              >ERCI Enterprises Philippines</a
            >
          </li>
        </ul>

        <!-- Mobile menu icon -->
        <button class="p-2 md:hidden">
          <!-- icon here -->
        </button>
      </div>
    </header>

    <!-- Page content -->
    <main class="pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="w-full py-20 mt-10 bg-gray-100">
      <div class="container mx-auto text-center">
        <div class="text-lg font-semibold">Contact Us</div>
        <p class="mt-1 text-lg font-bold text-gray-500">
          erclenterprises@gmail.com
        </p>
        <!-- fb -->
        <a
          href="https://www.facebook.com/mkkashiyamaph/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 mt-2 text-lg text-gray-700 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z"
            />
          </svg>
          MK Kashiyama PH
        </a>

        <!-- end of fb -->
        <p class="mt-1 text-sm text-gray-500">
          © {{ new Date().getFullYear() }} All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
