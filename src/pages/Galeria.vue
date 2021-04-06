<template>
  <section class="flex flex-col justify-center p-8">
    <HeaderPage
      titulo="Galería"
      tagline="Imágenes de los laboratorios, salas y áres de la escuela de informática."
    />
    <div
      class="grid max-w-6xl grid-cols-3 gap-10 mx-auto my-5 text-center lg:mx-auto sm:grid-cols-1 lg:grid-cols-2"
    >
      <ItemGaleria
        v-for="item in galeria"
        :key="item.id"
        :galeria="item"
      ></ItemGaleria>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderPage from "@/components/utilities/HeaderPage.vue";
import ItemGaleria from "@/components/galeria/ItemGaleria.vue";
import { datosCarrera } from "@/connection/repository";

export default defineComponent({
  name: "Galeria",
  components: { HeaderPage, ItemGaleria },
  setup() {
    const { galeria } = datosCarrera;
    return { galeria };
  }
});
</script>
