<template>
  <section class="flex flex-col justify-center p-8">
    <HeaderPage
      titulo="Nuestra carrera"
      tagline="Información util sobre nuestra carrera, sus directivos y contactos principales."
    />

    <section class="flex justify-center items-center">
      <figure class="flex items-center w-1/6 md:w-full">
        <img src="./../assets/img/logo-escuela.png" alt="promocional" />
      </figure>
    </section>

    <section
      class="flex justify-around gap-5 py-10 pr-10 sm:flex-col md:flex-col lg:flex-col xl:grid-cols-2"
    >
      <div class="flex flex-col gap-3 w-1/3 xl:w-full lg:w-3/4 md:w-full">
        <Directivo
          v-for="directivo in directivos"
          :key="directivo.nombre"
          :nombre="directivo.nombre"
          :cargo="directivo.cargo"
          :contacto="directivo.contacto"
          :foto="directivo.foto"
        />
      </div>

      <div class="flex flex-col gap-6">
        <Card class="max-w-2xl">
          <section class="flex flex-col  p-8 bg-secondary rounded-xl">
            <h1 class="font-bold">Misión</h1>
            <p class="text-justify">
              {{ carrera.mision }}
            </p>
          </section>
        </Card>

        <Card class="max-w-2xl">
          <section class="flex flex-col  p-8 bg-secondary rounded-xl">
            <h1 class="font-bold">Misión</h1>
            <p class="text-justify">
              {{ carrera.mision }}
            </p>
          </section>
        </Card>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { datosCarrera } from "@/connection/repository";
import HeaderPage from "@/components/utilities/HeaderPage.vue";
import Directivo from "@/components/docentes/Directivo.vue";
import Card from "@/components/utilities/Card.vue";

export default defineComponent({
  name: "Nosotros",
  components: { HeaderPage, Directivo, Card },
  setup() {
    const { directivos, carrera } = datosCarrera;
    return { directivos, carrera };
  }
});
</script>
