<template>
  <div
    class="grid grid-cols-4 gap-5 mx-auto xl:grid-cols-2 md:grid-cols-1 max-w-7xl"
  >
    <article v-for="objetivo in objetivos" :key="objetivo.titulo">
      <Card>
        <div class="h-full p-5 text-center rounded-xl bg-secondary">
          <i class="text-3xl fas" :class="objetivo.icono"></i>
          <h5 class="py-3 text-xl font-bold">{{ objetivo.titulo }}</h5>
          <p class="text-justify">{{ objetivo.descripcion }}</p>
        </div>
      </Card>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/utilities/Card.vue";

export default defineComponent({
  name: "Objetivos",
  props: {
    objetivos: {
      type: Array,
      required: true
    }
  },
  components: { Card }
});
</script>
