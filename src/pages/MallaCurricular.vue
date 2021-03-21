<template>
  <section class="flex flex-col justify-center p-8">
    <HeaderPage
      titulo="Malla Curricular"
      tagline="Un vistazo general de lo que aprenderás a lo largo de la carrera."
    />
    <div
      class="grid max-w-6xl grid-cols-3 gap-10 mx-auto my-5 text-center lg:mx-auto sm:grid-cols-1 lg:grid-cols-2"
    >
      <ItemMalla
        v-for="semestre in semestres"
        :key="semestre.id"
        :semestres="semestre"
      ></ItemMalla>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { datosCarrera } from "@/connection/repository";
import HeaderPage from "@/components/utilities/HeaderPage.vue";
import ItemMalla from "@/components/malla/ItemMalla.vue";

export default defineComponent({
  name: "MallaCurricular",
  components: { HeaderPage, ItemMalla },
  setup() {
    const { semestres } = datosCarrera;
    return { semestres };
  }
});
</script>
