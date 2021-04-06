<template>
  <section class="flex flex-col justify-center p-8">
    <HeaderPage
      titulo="Docentes"
      tagline="Los docentes que educan en nuestra carrera."
    />
    <div
      class="grid grid-cols-3 gap-5 text-center sm:grid-cols-1 lg:grid-cols-2"
    >
      <Profesor
        v-for="profesor in profesores"
        :key="profesor.nombre"
        :nombre="profesor.nombre"
        :titulo="profesor.titulo"
        :foto="profesor.foto"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderPage from "@/components/utilities/HeaderPage.vue";
import Profesor from "@/components/docentes/Profesor.vue";
import { datosCarrera } from "@/connection/repository";

export default defineComponent({
  name: "Docentes",
  components: { HeaderPage, Profesor },
  setup() {
    const { profesores } = datosCarrera;
    return { profesores };
  }
});
</script>
