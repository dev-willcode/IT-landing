<template>
  <section class="flex flex-col justify-center p-8">
    <HeaderPage
      titulo="Malla Curricular"
      tagline="Un vistazo general de lo que aprenderás a lo largo de la carrera."
    />
  <div class="grid grid-cols-3 gap-6 lg:mx-auto mx-16 my-5 text-center sm:grid-cols-1 lg:grid-cols-2">
      <Semestre
        v-for="semestre in semestres"
        :key="semestre.nombre_promocional"
        :nombrePromocional="semestre.nombre_promocional"
        :descripcion="semestre.descripcion"
        :foto="semestre.foto"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderPage from "@/components/utilities/HeaderPage.vue";
import Semestre from "@/components/mallacurricular/Semestre.vue";
import Repository from "@/connection/repository";

export default defineComponent({
  name: "MallaCurricular",
  components: { HeaderPage, Semestre},
  setup() {
    const repository = new Repository();
    const semestres = repository.getSemestres();
    return { semestres };
  }
});
</script>
