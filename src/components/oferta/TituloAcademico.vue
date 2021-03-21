<template>
  <Card :oscuro="false">
    <div
      class="flex flex-col justify-center w-full h-full p-6 bg-white rounded-lg shadow-md text-primary-dark lg:w-full"
    >
      <span class="font-thin">Título académico</span>
      <p class="text-lg font-semibold">{{ titulo.nombre }}</p>

      <div class="my-5 border-b-2 border-primary-light" />
      <article class="flex justify-around gap-3">
        <div>
          <span class="font-thin">Periodos</span>
          <p class="text-lg font-semibold">{{ titulo.periodos }}</p>
        </div>
        <div>
          <span class="font-thin">Modalidad</span>
          <p class="text-lg font-semibold">{{ titulo.modalidad }}</p>
        </div>

        <div>
          <span class="font-thin">Sección</span>
          <p class="text-lg font-semibold">{{ titulo.seccion }}</p>
        </div>
      </article>
    </div>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/utilities/Card.vue";

export default defineComponent({
  name: "Apartado",
  props: {
    titulo: {
      type: Object,
      required: true
    }
  },
  components: { Card }
});
</script>
