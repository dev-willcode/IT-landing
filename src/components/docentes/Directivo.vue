<template>
  <section class="flex items-center gap-5 p-3">
    <img class="w-16 h-16" :src="computedFoto" :alt="nombre" />
    <article class="text-left">
      <h4 class="font-bold">{{ nombre }}</h4>
      <p class="font-thin">{{ cargo }}</p>
      <p class="font-thin">{{ contacto }}</p>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Profesor",
  props: {
    nombre: String,
    cargo: String,
    contacto: String,
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
