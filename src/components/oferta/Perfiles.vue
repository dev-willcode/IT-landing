<template>
  <div class="w-3/4 mx-auto my-0">
    <section
      v-for="(perfil, index) in perfiles"
      :key="index"
      class="flex justify-around gap-10 py-5 xl:flex-col"
      :class="{ 'flex-row-reverse': index % 2 !== 0 }"
    >
      <div class="w-1/2 xl:w-full">
        <h3 class="inline text-2xl font-semibold">{{ perfil.tipo_perfil }}</h3>
        <div class="h-2 my-5 border-b-2 border-gray-500" />
        <p class="py-5 text-justify">{{ perfil.descripcion }}</p>
        <ul class="px-5">
          <li
            v-for="competencia in descomponerCompetencias(perfil.competencias)"
            :key="competencia"
            class="leading-relaxed"
          >
            <p>
              <i class="fas fa-chevron-right" /> &nbsp;
              <span>{{ competencia }}</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="flex items-center w-1/3 xl:w-full xl:my-10">
        <img :src="URL_BASE + perfil.imagen.url" alt="logo utmach" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Repository from "@/connection/repository";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Perfiles",
  props: {
    perfiles: {
      type: Array,
      required: true
    }
  },
  components: {},
  setup() {
    const repository = new Repository();
    const URL_BASE = repository.URL_BASE;
    const descomponerCompetencias = function(competencias: string) {
      return competencias.split("\n").filter((elem) => !!elem);
    };
    return { URL_BASE, descomponerCompetencias };
  }
});
</script>
