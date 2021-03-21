<template>
  <section class="flex flex-col justify-center p-8">
    <HeaderPage
      titulo="Malla Curricular"
      tagline="Un vistazo general de lo que aprenderás a lo largo de la carrera."
    />
    <div
      class="grid grid-cols-3 gap-10 mx-16 my-5 text-center lg:mx-auto sm:grid-cols-1 lg:grid-cols-2"
    >
      <ItemMalla
        v-for="item in semestres"
        :key="item.id"
        :semestres="item"
      ></ItemMalla>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderPage from "@/components/utilities/HeaderPage.vue";
import ItemMalla from "@/components/malla/ItemMalla.vue";
import Repository from "@/connection/repository";

export default defineComponent({
  name: "MallaCurricular",
  components: { HeaderPage, ItemMalla },
  setup() {
    const repository = new Repository();
    const URL_BASE = repository.URL_BASE;
    const semestres = repository.getSemestres();

    return { URL_BASE, semestres };
  }
});
</script>
