<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getProjectBySlug } from "@/utils/store";
import gsap from "gsap";

import BooksAPI from "./projects/BooksAPI.vue";
import Bookshelf from "./projects/Bookshelf.vue";
import CS50 from "./projects/CS50.vue";
import Lightshelf from "./projects/Lightshelf.vue";
import SemanticSearch from "./projects/SemanticSearch.vue";

const route = useRoute().path;
const project = computed(() => getProjectBySlug(route.split("/")[2]));

const mainRef = ref(null);

onMounted(() => {
  // Animation : glisse depuis le haut vers le bas
  if (!mainRef.value) return;

  // position initiale : complètement en haut hors de l'écran
  gsap.set(mainRef.value, { y: "50%" });

  // glisse jusqu'à sa position normale
  gsap.to(mainRef.value, {
    y: "0%",
    duration: 0.5,
    ease: "power3.out",
  });
});
</script>

<template>
  <div ref="mainRef">
    <Lightshelf v-if="project.slug == 'lightshelf'"></Lightshelf>
    <Bookshelf v-if="project.slug == 'bookshelf'"></Bookshelf>
    <BooksAPI v-if="project.slug == 'books-api'"></BooksAPI>
    <CS50 v-if="project.slug == 'cs50'"></CS50>
    <SemanticSearch v-if="project.slug == 'semantic-search'"></SemanticSearch>
  </div>
</template>

<style scoped></style>
