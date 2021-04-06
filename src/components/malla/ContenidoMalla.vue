<template>
  <section class="text-lg bg-white text-primary-dark">
    <div class="flex justify-center">
      <img
        class="w-128 h-128"
        :src="computedFoto"
        :alt="semestres.nombre_promocional"
      />
    </div>
    <div
      class="grid"
      :class="semestres.materias ? 'grid-cols-2' : 'grid-cols-1'"
    >
      <div class="p-5">
        <h4 class="p-1 text-xl font-bold">
          {{ semestres.nombre_promocional }}
        </h4>
        <div class="my-5 border-b-2 border-primary-light" />
        <p class="p-1 font-thin text-justify">{{ semestres.descripcion }}</p>
      </div>
      <LinkList
        class="p-5"
        v-if="semestres.materias"
        listTitle="Materias por semestre"
        :items="descomponerStringArray(semestres.materias)"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { getURL } from "@/connection/repository";
import { descomponerStringArray } from "@/utils/stringFormat";
import { defineComponent, computed } from "vue";
import LinkList from "@/components/utilities/LinkList.vue";
export default defineComponent({
  name: "ContenidoMalla",
  props: {
    semestres: Object
  },
  components: { LinkList },
  setup(props) {
    const computedFoto = computed(() => {
      return props.semestres?.imagen?.url
        ? getURL(props.semestres?.imagen?.url)
        : require("./../../assets/img/logo-utmach.png");
    });

    return { computedFoto, descomponerStringArray };
  }
});
</script>
