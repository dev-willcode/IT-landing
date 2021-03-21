<template>
  <section class="text-lg bg-white text-primary-dark">
    <div class="flex justify-center">
      <img
        class="w-128 h-128"
        :src="computedFoto"
        :alt="semestres.nombre_promocional"
      />
    </div>
    <div class="grid grid-cols-2">
      <div class="p-5">
        <h4 class="p-1 text-xl font-bold">
          {{ semestres.nombre_promocional }}
        </h4>
        <div class="my-5 border-b-2 border-primary-light" />
        <p class="p-1 font-thin text-justify">{{ semestres.descripcion }}</p>
      </div>
      <div class="p-5">
        <h4 class="p-1 font-thin text-justify">
          Las materias del {{ semestres.nombre || cas }} son:
        </h4>
        <p class="text-justify">{{ semestres.materias }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Repository from "@/connection/repository";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "ContenidoMalla",
  props: {
    semestres: Object
  },
  setup(props) {
    const { URL_BASE } = new Repository();
    const computedFoto = computed(() => {
      return (
        URL_BASE + props.semestres?.imagen?.url ||
        require("./../../assets/img/logo-utmach.png")
      );
    });

    return { computedFoto };
  }
});
</script>
