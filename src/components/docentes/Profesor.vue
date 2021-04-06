<template>
  <section
    class="flex items-center gap-5 p-3 bg-white text-primary-dark rounded-xl"
  >
    <img class="w-32 h-32 rounded-full" :src="computedFoto" :alt="nombre" />
    <article class="text-left">
      <h4 class="font-bold">{{ nombre }}</h4>
      <p
        class="font-thin"
        v-for="titulo in descomponerStringArray(titulo)"
        :key="titulo"
      >
        {{ titulo.text }}
      </p>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { descomponerStringArray } from "@/utils/stringFormat";
import { getURL } from "@/connection/repository";

export default defineComponent({
  name: "Profesor",
  props: {
    nombre: String,
    titulo: String,
    foto: Object
  },
  setup(props) {
    const computedFoto = computed(() => {
      return props.foto?.formats?.thumbnail?.url
        ? getURL(props.foto?.formats?.thumbnail?.url)
        : require("./../../assets/img/logo-utmach.png");
    });
    return { computedFoto, descomponerStringArray };
  }
});
</script>
