<template>
  <section class="gap-5 p-3">
    <div class="flex justify-center">
      <img class="w-1/2 h-1/2" :src="computedFoto" :alt="nombrePromocional" />
    </div>
    <article class="p-3 text-justify shadow-md">
      <h4 class="p-1 text-2xl font-bold">{{ nombrePromocional }}</h4>
      <p class="p-1 font-thin">{{ descripcion }}</p>
      <a
        class="p-1 font-thin transition duration-500 hover:text-secondary hover:font-bold"
      >
        <i class="" />
        Ver más sobre este semestre...
      </a>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Semestre",
  props: {
    nombrePromocional: String,
    descripcion: String,
    foto: String,
  },
  setup(props) {
    const computedFoto = computed(() => {
      return props.foto || require("./../../assets/img/logo-utmach.png");
    });
    return { computedFoto };
  },
});
</script>
