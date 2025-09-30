<script setup>
import { inject, computed } from "vue";
import { useRoute } from "vue-router";
import { getProjectBySlug } from "@/utils/store";

import ProjectHero from "@/components/Base-ProjectHero.vue";
import TextContainer from "@/components/Base-TextContainer.vue";
import TheFooter from "@/components/TheFooter.vue";

const route = useRoute().path;
const night = inject("night");
const project = computed(() => getProjectBySlug(route.split("/")[2]));
const projectColor = project.value.meta.color;
</script>

<template>
  <main ref="mainRef" class="m-3 md:m-6 lg:m-24 max-w-dvw flex flex-col gap-3">
    <ProjectHero :night="night" :meta="project.meta" />

    <TextContainer
      :text="project.texts.bloc1.content"
      :title="project.texts.bloc1.title"
      :color="projectColor"
      class="col-span-1 md:col-span-2"
    />

    <img
      loading="lazy"
      class="w-full h-full object-cover rounded-2xl"
      :src="project.images.image2"
      alt=""
    />

    <TextContainer
      :text="project.texts.bloc2.content"
      :title="project.texts.bloc2.title"
      :color="projectColor"
    />

    <img
      loading="lazy"
      class="w-full h-full object-cover rounded-2xl"
      :src="project.images.image1"
      alt=""
    />

    <TextContainer
      :text="project.texts.bloc3.content"
      :title="project.texts.bloc3.title"
      :color="projectColor"
    />

    <img
      loading="lazy"
      class="w-full h-full object-cover rounded-2xl"
      :src="project.images.image4"
      alt=""
    />

    <TextContainer
      :text="project.texts.bloc4.content"
      :title="project.texts.bloc4.title"
      :color="projectColor"
    />

    <TextContainer
      :text="project.texts.bloc5.content"
      :title="project.texts.bloc5.title"
      :color="projectColor"
    />

    <TheFooter></TheFooter>
  </main>
</template>

<style scoped></style>
