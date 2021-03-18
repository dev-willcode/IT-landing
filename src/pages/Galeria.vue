<template>
  <section class="flex flex-col justify-center p-8">
    <HeaderPage
      titulo="Nuestra carrera"
      tagline="Información util sobre nuestra carrera, sus directivos y contactos principales."
    />
    <div
      class="grid grid-cols-3 gap-5 text-center sm:grid-cols-1 md:grid-cols-2"
    >
      <ItemGaleria v-for="item in galeria" :key="item.id" :galeria="item">
      </ItemGaleria>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderPage from "@/components/utilities/HeaderPage.vue";
import ItemGaleria from "@/components/galeria/ItemGaleria.vue";
import Repository from "@/connection/repository";

export default defineComponent({
  name: "Galeria",
  components: { HeaderPage, ItemGaleria },
  setup() {
    const repository = new Repository();
    const URL_BASE = repository.URL_BASE;
    const galeria = repository.getGaleria();

    return { URL_BASE, galeria };
  }
});
</script>
