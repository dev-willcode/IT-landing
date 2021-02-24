<template>
  <section class="flex flex-col">
    <div id="landing" class="flex p-12">
      <Greetings
        :nombre="carrera.nombre"
        :frasePromocional="carrera.frase_promocional"
        class="w-1/3 pt-32"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Repository from "@/connection/repository.ts";
import Greetings from "@/components/home/Greetings.vue";

export default defineComponent({
  name: "Homepage",
  components: { Greetings },
  setup() {
    const repository = new Repository();
    const carrera = repository.getCarrera();

    console.log(carrera);

    return { carrera };
  }
});
</script>
