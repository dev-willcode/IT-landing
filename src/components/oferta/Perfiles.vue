<template>
  <div class="flex flex-col w-3/4 max-w-6xl gap-12 mx-auto lg:w-auto">
    <section
      v-for="(perfil, index) in perfiles"
      :key="index"
      class="flex justify-between gap-24 xl:flex-col"
    >
      <Card :oscuro="false">
        <div
          class="flex h-full p-8 bg-white rounded-lg shadow-xl text-primary-dark xl:w-full xl:flex-col"
          :class="{ 'flex-row-reverse': index % 2 !== 0 }"
        >
          <article class="w-3/4 xl:w-full">
            <h3 class="inline text-3xl font-semibold">
              {{ perfil.tipo_perfil }}
            </h3>
            <div class="h-2 my-5 border-b-2 border-primary-light" />
            <p class="py-5 text-justify">{{ perfil.descripcion }}</p>
            <ul class="px-5">
              <li
                v-for="competencia in descomponerCompetencias(
                  perfil.competencias
                )"
                :key="competencia"
                class="leading-relaxed"
              >
                <p>
                  <i class="fas fa-chevron-right" /> &nbsp;
                  <span>{{ competencia }}</span>
                </p>
              </li>
            </ul>
          </article>
          <div class="flex items-center w-1/3 p-5 xl:w-full xl:my-10">
            <img
              class="rounded-lg"
              :src="getURL(perfil.imagen?.url)"
              alt="logo utmach"
            />
          </div>
        </div>
      </Card>
    </section>
  </div>
</template>

<script lang="ts">
import { getURL } from "@/connection/repository";
import { defineComponent } from "vue";
import Card from "@/components/utilities/Card.vue";

export default defineComponent({
  name: "Perfiles",
  props: {
    perfiles: {
      type: Array,
      required: true
    }
  },
  components: { Card },
  setup() {
    const descomponerCompetencias = function (competencias: string) {
      return competencias.split("\n").filter((elem) => !!elem);
    };

    return { getURL, descomponerCompetencias };
  }
});
</script>
