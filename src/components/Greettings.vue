<template>
  <section class="text-left">
    <h1 class="mb-5 text-6xl font-bold text-gray-700">
      {{ nombre }}
    </h1>
    <h3 class="">{{ frasePromocional }}</h3>
    <div class="flex gap-4 pt-5">
      <primary-button>Sobre nosotros</primary-button>
      <secondary-button> Nuestra oferta académica</secondary-button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PrimaryButton from "@/components/utilities/PrimaryButton.vue";
import SecondaryButton from "@/components/utilities/SecondaryButton.vue";

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
  components: { PrimaryButton, SecondaryButton }
});
</script>
