<template>
  <section
    class="flex items-center gap-5 p-3 bg-white text-primary-dark rounded-xl"
  >
    <img class="w-16 h-16" :src="computedFoto" :alt="nombre" />
    <article class="text-left">
      <h4 class="font-bold">{{ nombre }}</h4>
      <p class="font-thin">{{ titulo }}</p>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Profesor",
  props: {
    nombre: String,
    titulo: String,
    foto: String
  },
  setup(props) {
    const computedFoto = computed(() => {
      return props.foto || require("./../../assets/img/logo-utmach.png");
    });
    return { computedFoto };
  }
});
</script>
