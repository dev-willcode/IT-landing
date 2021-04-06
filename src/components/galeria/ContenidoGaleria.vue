<template>
  <section class="text-lg bg-white text-primary-dark">
    <img class="w-128 h-128" :src="computedFoto" />
    <div class="p-5">
      <p class="py-5 text-left">
        <span class="font-semibold text-md text-secondary">{{
          galeria.ubicacion_interna
        }}</span>
        <i class="px-2 fas fa-chevron-right" />
        <span class="font-bold text-md">{{ galeria.ubicacion_externa }} </span>
      </p>
      <p class="text-justify">{{ galeria.descripcion }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { getURL } from "@/connection/repository";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "ContenidoGaleria",
  props: {
    galeria: Object
  },
  setup(props) {
    const computedFoto = computed(() => {
      return props.galeria?.imagen?.url
        ? getURL(props.galeria?.imagen?.url)
        : require("./../../assets/img/logo-utmach.png");
    });

    return { computedFoto };
  }
});
</script>
