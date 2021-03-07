<template>
  <section
    class="flex flex-col justify-center w-1/3 text-left md:items-center md:w-full md:pt-16"
  >
    <h1 class="mb-5 text-5xl font-bold sm:text-4xl md:text-center">
      {{ nombre }}
    </h1>
    <h3 class="">{{ frasePromocional }}</h3>
    <div class="flex items-center gap-4 pt-5 xl:flex-col md:w-full">
      <primary-button>Nuestra oferta académica</primary-button>
      <a
        class="font-thin transition duration-500 hover:text-secondary hover:font-bold"
      >
        <i class="" />
        Más sobre nuestra carrera
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PrimaryButton from "@/components/utilities/PrimaryButton.vue";

export default defineComponent({
  name: "Greetings",
  props: {
    nombre: {
      type: String,
      required: true
    },
    frasePromocional: {
      type: String,
      default: ""
    }
  },
  components: { PrimaryButton }
});
</script>
