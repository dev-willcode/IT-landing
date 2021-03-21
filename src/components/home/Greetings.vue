<template>
  <section
    class="flex flex-col justify-center w-1/3 text-left md:items-center md:w-full md:pt-16"
  >
    <h1 class="mb-5 text-5xl font-bold sm:text-4xl md:text-center lg:text-4xl">
      {{ nombre }}
    </h1>
    <p>{{ frasePromocional }}</p>
    <div class="flex items-center gap-4 pt-5 xl:flex-col md:w-full">
      <primary-button @click="navegar({ name: 'OfertaAcademica' })"
        >Nuestra oferta académica</primary-button
      >
      <secondary-button @click="navegar({ name: 'Nosotros' })"
        >Más sobre nuestra carrera
      </secondary-button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
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
  components: { PrimaryButton, SecondaryButton },
  setup() {
    const { push: navegar } = useRouter();
    return { navegar };
  }
});
</script>
