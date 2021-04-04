<template>
  <section class="flex flex-col justify-center p-8">
    <HeaderPage
      titulo="Oferta académica"
      tagline="Que puede ofrecer un ingeniero de TI a su comunidad y el mundo."
    />
    <section class="flex justify-around gap-5 p-5 md:flex-col">
      <section class="flex flex-col w-1/3 gap-2 lg:w-full ">
        <h3 class="py-5 text-4xl font-bold">
          ¿Qué es un Ingeniero en Tecnologías de la Información?
        </h3>
        <p class="text-justify">{{ titulo.definicion_promocional }}</p>
      </section>

      <TituloAcademico :titulo="titulo" />
    </section>

    <Apartado name="Objetivos">
      <Objetivos :objetivos="objetivos" />
    </Apartado>

    <Apartado name="Perfiles">
      <Perfiles :perfiles="perfiles" />
    </Apartado>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { datosCarrera } from "@/connection/repository";
import HeaderPage from "@/components/utilities/HeaderPage.vue";
import Apartado from "@/components/oferta/Apartado.vue";
import Objetivos from "@/components/oferta/Objetivos.vue";
import Perfiles from "@/components/oferta/Perfiles.vue";
import TituloAcademico from "@/components/oferta/TituloAcademico.vue";
export default defineComponent({
  name: "OfertaAcademica",
  props: {},
  components: { HeaderPage, Apartado, Objetivos, TituloAcademico, Perfiles },
  setup() {
    const { titulo, objetivos, perfiles } = datosCarrera;
    return { titulo, objetivos, perfiles };
  }
});
</script>
