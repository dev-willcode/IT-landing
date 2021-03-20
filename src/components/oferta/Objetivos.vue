<template>
  <div
    class="grid grid-cols-4 gap-5 mx-auto xl:grid-cols-2 md:grid-cols-1 max-w-7xl"
  >
    <article
      class="relative"
      v-for="objetivo in objetivos"
      :key="objetivo.titulo"
    >
      <div class="relative z-10 h-full p-5 text-center rounded-xl bg-secondary">
        <i class="text-3xl fas" :class="objetivo.icono"></i>
        <h5 class="py-3 text-xl font-bold">{{ objetivo.titulo }}</h5>
        <p class="text-justify">{{ objetivo.descripcion }}</p>
      </div>
      <div class="absolute w-full h-full bg-gray-800 rounded-xl top-3 left-3" />
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Objetivos",
  props: {
    objetivos: {
      type: Array,
      required: true
    }
  },
  components: {}
});
</script>
