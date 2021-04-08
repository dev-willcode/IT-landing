<template>
  <section class="flex flex-col justify-center p-8">
    <HeaderPage
      titulo="Nuestra carrera"
      tagline="Información util sobre nuestra carrera, sus directivos y contactos principales."
    />

    <section class="flex items-center justify-center">
      <figure
        class="flex items-center w-1/6 xl:w-1/5 lg:w-1/3 md:w-4/6 sm:w-4/5"
      >
        <img src="./../assets/img/logo-escuela.png" alt="promocional" />
      </figure>
    </section>

    <section class="flex items-center gap-5 px-12 mx-auto my-5 xl:flex-col">
      <div class="flex flex-col w-4/5 gap-3 xl:w-full">
        <Directivo
          v-for="directivo in directivos"
          :key="directivo.nombre"
          :nombre="directivo.nombre"
          :cargo="directivo.cargo"
          :contacto="directivo.numero_contacto"
          :foto="directivo.foto"
        />
      </div>

      <div class="flex flex-col gap-5 h-5/6">
        <Card>
          <section class="flex flex-col p-8 bg-secondary rounded-xl">
            <h1 class="font-bold">Misión</h1>
            <p class="text-justify">
              {{ carrera.mision }}
            </p>
          </section>
        </Card>

        <Card>
          <section class="flex flex-col p-8 bg-secondary rounded-xl">
            <h1 class="pt-4 font-bold xl:pt-0">Visión</h1>
            <p class="text-justify">
              {{ carrera.vision }}
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
    console.log(directivos);
    return { directivos, carrera };
  }
});
</script>
