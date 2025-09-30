<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { getProjectBySlug } from "@/utils/store.js";

const { slug } = defineProps({ slug: String });
const project = computed(() => getProjectBySlug(slug));

const isHovered = ref(false);

function getContrastColor(hexColor) {
  const c = hexColor.charAt(0) === "#" ? hexColor.substring(1) : hexColor;
  const r = parseInt(c.substr(0, 2), 16);
  const g = parseInt(c.substr(2, 2), 16);
  const b = parseInt(c.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? "text-black" : "text-white";
}

const contrastClass = computed(() =>
  getContrastColor(project.value.meta.color)
);
</script>

<template>
  <RouterLink :to="`projects/${project.slug}`">
    <div
      class="box flex flex-col rounded-2xl transition-colors duration-300 justify-between min-h-[600px] md:min-h-[700px]"
      :class="{
        'bg-[var(--box-bg-default)]': true,
        'hover:bg-[var(--hover-color)]': true,
      }"
      :style="{ '--hover-color': project.meta.color }"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <!-- Header avec badge "Latest" -->
      <div class="flex flex-row justify-between items-start">
        <div class="flex flex-col gap-2">
          <span
            class="uppercase text-[10px] md:text-xs px-3 py-1 rounded-full w-fit transition-all duration-300 border border-current"
            :class="{ [contrastClass]: isHovered }"
          >
            Dernier projet
          </span>
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-medium transition-colors duration-300"
            :class="{ [contrastClass]: isHovered }"
          >
            {{ project.meta.title }}
          </h2>
        </div>
        <p
          class="text-sm md:text-base transition-colors duration-300"
          :class="{ [contrastClass]: isHovered }"
        >
          {{ project.meta.category }}
        </p>
      </div>

      <!-- Visual Content -->
      <div class="flex w-full items-center justify-center py-8">
        <h2
          v-if="project.meta?.cover_text"
          class="w-full text-center text-6xl md:text-7xl lg:text-8xl transition-colors duration-300"
          :class="{ [contrastClass]: isHovered }"
        >
          {{ project.meta.cover_text }}
        </h2>

        <img
          loading="lazy"
          v-else
          class="w-full h-[450px] object-contain rounded-2xl"
          :src="project.meta.cover"
          :alt="`Screenshot du projet ${project.meta.title}`"
        />
      </div>

      <!-- Footer -->
      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between items-end">
          <p
            class="text-sm md:text-base transition-colors duration-300 w-[55%]"
            :class="{ [contrastClass]: isHovered }"
          >
            {{ project.meta.technologies }}
          </p>
          <p
            class="text-sm md:text-base transition-colors duration-300"
            :class="{ [contrastClass]: isHovered }"
          >
            {{ project.meta.date }}
          </p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped></style>
