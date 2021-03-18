<template>
  <section class="gap-5 bg-white shadow-md text-primary-dark rounded-xl">
    <div class="flex justify-center">
      <img class="w-1/2 h-1/2" :src="computedFoto" :alt="nombre" />
    </div>
    <article
      class="flex flex-col items-center justify-around gap-5 p-3 text-justify"
    >
      <h4 class="p-1 text-2xl font-bold">{{ nombrePromocional }}</h4>
      <p class="p-1 font-thin">{{ descripcion }}</p>
      <primary-button>
        Ver más sobre este semestre...
      </primary-button>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import PrimaryButton from "@/components/utilities/PrimaryButton.vue";

export default defineComponent({
  name: "Semestre",
  props: {
    nombrePromocional: String,
    descripcion: String,
    foto: String
  },
  components: { PrimaryButton },
  setup(props) {
    const computedFoto = computed(() => {
      return props.foto || require("./../../assets/img/logo-utmach.png");
    });
    return { computedFoto };
  }
});
</script>
