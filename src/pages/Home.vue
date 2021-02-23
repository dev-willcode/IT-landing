<template>
  <section>
    <div>
      <h1>{{ carrera.nombre }}</h1>
      <h3>{{ carrera.frase_promocional }}</h3>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Repository from "@/connection/repository.ts";

export default defineComponent({
  name: "Homepage",
  setup() {
    const repository = new Repository();
    const carrera = repository.getCarrera();

    console.log(carrera);

    return { carrera };
  }
});
</script>
