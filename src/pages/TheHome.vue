<script setup>
import { inject, onMounted, ref } from "vue";
import { getAllProjectsSlug } from "@/utils/store.js";
import { useRoute } from "vue-router";
import { watch } from "vue";
import gsap from "gsap";

import Hero from "@/components/TheHero.vue";
import ProjectPreview from "@/components/Base-ProjectPreview.vue";
import TheFooter from "@/components/TheFooter.vue";
import About from "@/components/Base-TextContainer.vue";

const slugs = getAllProjectsSlug();
const night = inject("night");
const clock = inject("clock");

const mainRef = ref(null);

const route = useRoute();

function slideInFromTop() {
  if (!mainRef.value) return;

  gsap.set(mainRef.value, { y: "100%" });

  gsap.to(mainRef.value, {
    y: "0%",
    duration: 0.5,
    ease: "power3.out"
  });
}

onMounted(() => {
  slideInFromTop();
});

watch(() => route.fullPath, () => slideInFromTop());
</script>

<template>
  <main ref="mainRef" class="m-3 md:m-6 lg:m-24 max-w-dvw flex flex-col gap-2">
    <Hero :clock="clock" :night="night" />
    <section class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      <ProjectPreview
        v-for="(slug, index) in slugs"
        :key="index"
        :slug="slug"
        :class="[
          index % 3 === 0 ? 'md:col-span-2' : '',
          slugs.length % 3 !== 0 && index === slugs.length - 1 ? 'lg:col-span-3' : ''
        ]"
      />
    </section>
    <About />
    <TheFooter></TheFooter>
  </main>
</template>

<style scoped></style>
