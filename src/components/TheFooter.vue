<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

function handleBack() {
  if (window.history.state?.back) {
    router.back();
  } else {
    router.push("/");
  }
}

function goUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const theme = inject("theme");
</script>

<template>
  <div
    class="box flex flex-col justify-between h-60 md:h-72 lg:h-80 p-6 md:p-7 lg:p-8"
  >
    <div class="flex h-fit flex-row justify-between">
      <p class="text-lg md:text-xl lg:text-2xl">
        [Vision, Conception, Implementation]
      </p>

       <img loading="lazy" 
          class="w-10 h-10 cursor-pointer"
          @click="(router.currentRoute.value.path !== '/' && router.currentRoute.value.path !== '/about') ? handleBack() : goUp()"
          :src="theme == 'dark' ? '/svg/back-white.svg' : '/svg/back-black.svg'"
          alt="Bouton de retour"
        />
    </div>

    <div class="flex flex-col justify-between">
        <div class="py-3 flex flex-row h-fit gap-3">
          <a class="link" href="https://github.com/K-sel">Github</a>
          <a class="link" href="https://www.linkedin.com/in/jonathanpnrd/"
            >LinkedIn</a
          >
          <a
            class="link"
            href="mailto:jpinard@bluewin.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mail
          </a>
      </div>

      <div
        class="border-t-1 border-current gap-0.5 *:pb-0.5 py-3 flex flex-col justify-between h-fit"
      >
        <div class="flex flex-row justify-between h-fit">
          <p class="text-xs">© 2025</p>
          <p class="text-xs">Made with 💙</p>
        </div>
        <div class="flex flex-row justify-between h-fit w-full">
          <p class="text-xs">Lausanne, Switzerland</p>
          <p class="text-xs">By Jonathan Pinard</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
