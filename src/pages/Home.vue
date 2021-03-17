<template>
  <!-- bienvenida -->
  <section class="flex flex-col">
    <div
      id="landing"
      class="flex justify-around p-12 md:flex-col md:justify-center"
    >
      <Greetings
        :nombre="carrera.nombre"
        :frasePromocional="carrera.frase_promocional"
      />

      <figure class="flex items-center w-1/4 md:w-full">
        <img src="./../assets/img/logo-escuela.png" alt="promocional" />
      </figure>
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
