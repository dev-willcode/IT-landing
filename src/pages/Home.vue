<template>
  <!-- bienvenida -->
  <section class="flex flex-col">
    <div
      id="landing"
      class="flex justify-around p-12 md:flex-col-reverse md:justify-center"
    >
      <Greetings
        :nombre="carrera.nombre"
        :frasePromocional="carrera.frase_promocional"
      />

      <img
        src="./../assets/img/logo-utmach.png"
        class="w-1/3 md:w-full"
        alt="promocional"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Repository from "@/connection/repository";
import Greetings from "@/components/home/Greetings.vue";

export default defineComponent({
  name: "Homepage",
  components: { Greetings },
  setup() {
    const repository = new Repository();
    const carrera = repository.getCarrera();

    return { carrera };
  }
});
</script>
