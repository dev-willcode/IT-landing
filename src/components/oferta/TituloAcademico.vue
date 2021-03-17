<template>
  <section
    class="flex flex-col justify-center w-1/3 px-6 py-5 bg-white rounded-lg shadow-md lg:w-full"
  >
    <span class="font-thin">Título académico</span>
    <p class="text-lg font-semibold">{{ titulo.nombre }}</p>

    <div class="my-5 border-b-2 border-black" />
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
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Apartado",
  props: {
    titulo: {
      type: Object,
      required: true
    }
  },
  components: {}
});
</script>
