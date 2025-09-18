<script setup>
import { computed, ref } from "vue";

const date = ref(Date.now());

const clock = computed(() => {
  const now = new Date(date.value);
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const sec = now.getSeconds();
  return `${hours}:${minutes}:${sec}`;
});

setInterval(() => {
  date.value = Date.now();
}, 1000);
</script>

<template>
  <main class="md:m-12 m-3 max-w-dvw flex flex-col md:gap-12 gap-3">
    <div class="box h-[70dvh] flex flex-col justify-between">
      <div class="flex flex-col gap-12">
        <h1 class="text-5xl">Jonathan Pinard 💻</h1>
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
        <h2 class="text-4xl">
          Je transforme mes idées en réalités, un projet à la fois.
        </h2>
        <div class="flex flex-row justify-between">
          <p class="text-lg">UTC+1 ZH {{ clock }}</p>
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
