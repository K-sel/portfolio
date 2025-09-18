<script setup>
import { computed, ref } from "vue";

const date = ref(Date.now());

const clock = computed(() => {
  const now = new Date(date.value);
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const sec = String(now.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${sec}`;
});

const night = computed(() => {
  const now = new Date(date.value);
  const hours = now.getHours();

  if (hours <= 6 || hours >= 22) {
    document.querySelector("html").classList.add("dark");
    return true;
  }
});

setInterval(() => {
  date.value = Date.now();
}, 1000);
</script>

<template>
  <main
    class="m-3 md:m-6 lg:m-12 max-w-dvw flex flex-col gap-3 md:gap-6 lg:gap-12"
  >
    <div class="box h-[70dvh] flex flex-col justify-between">
      <div class="flex flex-col gap-12">
        <h1 class="text-2xl md:text-3xl lg:text-4xl">
          Jonathan Pinard
          <span v-if="night">😴</span>
          <span v-else>💻</span>
        </h1>

        <div class="flex flex-col gap-6">
          <a class="link" href="#">Projets</a>
          <a class="link" href="#">A propos</a>
          <a
            class="link"
            href="mailto:clarinette-86-elements@icloud.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <h2 class="text-2xl md:text-3xl lg:text-4xl">
          Je transforme mes idées en réalités, un projet à la fois.
        </h2>
        <div class="flex flex-row justify-between">
          <div class="flex flex-row gap-1.5 md:gap-6 items-center">
            <div class="flex flex-row items-center gap-1.5">
              <img src="./assets/dot.svg" alt="dot" class="w-4 h-4" />
              <p v-if="night" class="hidden md:block text-lg">
                Closed for the night
              </p>
              <p v-else class="hidden md:block text-lg">Open for work</p>
            </div>
            <p class="text-lg">UTC+1 ZH {{ clock }}</p>
          </div>
          <div class="flex flex-row gap-3">
            <a class="link" href="https://github.com/K-sel">Github</a>
            <a class="link" href="https://www.linkedin.com/in/jonathanpnrd/"
              >LinkedIn</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="box">02</div>
    <div class="box">03</div>
    <div class="box">04</div>
  </main>
</template>

<style scoped></style>
