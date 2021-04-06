<template>
  <section
    class="flex items-center w-full gap-5 p-3 bg-white text-primary-dark rounded-xl"
  >
    <img class="w-32 h-32 rounded-full" :src="computedFoto" :alt="nombre" />
    <article class="text-left">
      <h4 class="font-bold">{{ nombre }}</h4>
      <p class="font-thin">{{ cargo }}</p>
      <p class="font-thin">{{ contacto }}</p>
    </article>
  </section>
</template>

<script lang="ts">
import { getURL } from "@/connection/repository";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Directivo",
  props: {
    nombre: String,
    cargo: String,
    contacto: String,
    foto: Object
  },
  setup(props) {
    const computedFoto = computed(() => {
      return props.foto?.formats?.thumbnail?.url
        ? getURL(props.foto?.formats?.thumbnail?.url)
        : require("./../../assets/img/logo-utmach.png");
    });
    return { computedFoto };
  }
});
</script>
