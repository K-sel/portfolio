<script setup>
import { inject, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

import IconScrew from "./IconScrew.vue";
import gsap from "gsap";

const night = inject("night");
const theme = inject("theme");
const toggleTheme = inject("toggleTheme");

const heroRef = ref(null);
const router = useRouter();
const route = useRoute();

const linkRef = ref(null); // 👈 ref pour le lien "Projets"
function onProjectsClick(event) {
  if (route.path !== "/") {
    router.push("/");
    return;
  }

  pulse();
}

function onAboutClick(event) {
  if (route.path !== "/about") {
    router.push("/about");
    return;
  }

  pulse();
}

const pulse = () => {
  if (linkRef.value) {
    gsap.fromTo(
      linkRef.value,
      { scale: 1 },
      {
        scale: 1.06,
        duration: 0.12,
        ease: "power1.out",
        yoyo: true,
        repeat: 1,
      }
    );
  }
};

onMounted(() => {
  if (!heroRef.value) return;

  // État initial visuel (permet un rendu propre si CSS/SSR change l'opacity)
  gsap.set(heroRef.value, {
    y: 80,
    opacity: 0,
    rotationX: 6, // démarrer incliné (donne profondeur)
    transformOrigin: "center center",
    willChange: "transform, opacity",
  });

  // Animation d'entrée : slide + rotation -> pose 3D naturelle
  gsap.to(heroRef.value, {
    y: 0,
    opacity: 1,
    rotationX: 0,
    duration: 1,
    ease: "power3.out",
    transformPerspective: 800,
  });
});

defineProps({
  clock: {
    type: String,
    default: "00:00:00",
  },

  isAbout: {
    type: Boolean,
    required: false,
    default: false,
  },

  phrase: {
    type: String,
    default:
      "Passionné d'informatique et de développement d'applications web, je transforme mes idées en réalités, un projet à la fois.",
    required: false,
  },
});
</script>

<template>
  <div ref="linkRef">
    <div ref="heroRef" class="box h-[90dvh] md:h-[75dvh] flex flex-col justify-between">
      <div class="flex flex-col gap-12 md:flex-row md:justify-between">
        <div class="flex flex-row h-fit items-center justify-between">
          <h1 class="text-2xl md:text-3xl lg:text-4xl">
            Jonathan Pinard <span v-if="isAbout">, 23 ans</span>
            <span v-else>
              <span v-if="night">😴</span>
              <span v-else>💻</span>
            </span>
          </h1>

          <div class="flex md:hidden">
            <button
              @click="toggleTheme"
              class=" relative w-12 h-6 bg-[var(--background-default)] rounded-full transition-colors duration-300 ease-in-out"
              aria-label="Toggle theme"
            >
              <span
                class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full transition-all duration-300 ease-in-out"
                :class="
                  (theme?.value ?? theme) === 'dark'
                    ? 'translate-x-6  bg-white'
                    : 'translate-x-0 bg-black'
                "
              />
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <router-link to="/" @click.prevent="onProjectsClick">
            <IconScrew :text="'Projets'"></IconScrew>
          </router-link>

          <router-link to="/about" @click.prevent="onAboutClick">
            <IconScrew :text="'A propos'"></IconScrew>
          </router-link>

          <a
            class="link flex flex-row gap-1 items-center"
            href="mailto:jpinard@bluewin.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconScrew :text="'Me contacter'"></IconScrew>
          </a>
        </div>

        <div class="hidden md:flex flex-col gap-2">
          <a class="link underline" href="https://github.com/K-sel">Github</a>
          <a
            class="link underline"
            href="https://www.linkedin.com/in/jonathanpnrd/"
            >LinkedIn</a
          >
        </div>
      </div>

      <div
        class="flex flex-col lg:flex-row gap-6 lg:justify-between lg:items-end"
      >
        <div class="flex-1 min-w-0 max-w-full md:max-w-[50%]">
          <h2 class="text-2xl md:text-3xl lg:text-4xl">{{ phrase }}</h2>
        </div>

        <div class="flex flex-row justify-between items-center">
          <div class="flex-shrink-0 flex items-center gap-2 align-middle">
            <div class="flex items-center gap-2 whitespace-nowrap">
              <img loading="lazy"
                :src="night ? '/svg/dot-red.svg' : '/svg/dot-green.svg'"
                alt="dot"
                class="dot w-4 h-4 flex-shrink-0"
              />
              <p class="hidden md:block text-lg whitespace-nowrap">
                {{ night ? "Closed for the night" : "Open to work" }}
              </p>
              <div class="whitespace-nowrap" style="min-width: calc(10rem + 6px);">
                <p class="text-lg whitespace-nowrap">UTC+1 ZH {{ clock }}</p>
              </div>
            </div>

            <div class="hidden md:flex">
            <button
              @click="toggleTheme"
              class=" relative w-12 h-6 bg-[var(--background-default)] rounded-full transition-colors duration-300 ease-in-out"
              aria-label="Toggle theme"
            >
              <span
                class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full transition-all duration-300 ease-in-out"
                :class="
                  (theme?.value ?? theme) === 'dark'
                    ? 'translate-x-6  bg-white'
                    : 'translate-x-0 bg-black'
                "
              />
            </button>
          </div>
          </div>

          <div class="flex md:hidden flex-row gap-3">
            <a class="link underline" href="https://github.com/K-sel">Github</a>
            <a
              class="link underline"
              href="https://www.linkedin.com/in/jonathanpnrd/"
              >LinkedIn</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-3d {
  transform-style: preserve-3d; /* garde la 3D pour l'animation */
  perspective: 1000px; /* perspective pour le slide 3D */
}
</style>
