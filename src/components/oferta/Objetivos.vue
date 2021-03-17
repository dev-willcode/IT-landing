<template>
  <div class="grid grid-cols-4 gap-5 xl:grid-cols-2 md:grid-cols-1">
    <article
      class="p-5 text-center shadow-md"
      v-for="objetivo in objetivos"
      :key="objetivo.titulo"
    >
      <i class="text-3xl fas" :class="objetivo.icono"></i>
      <h5 class="py-3 text-xl font-bold">{{ objetivo.titulo }}</h5>
      <p class="text-justify">{{ objetivo.descripcion }}</p>
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
