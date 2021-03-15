<template>
  <section class="flex flex-col justify-center p-8">
    <HeaderPage
      titulo="Nuestra carrera"
      tagline="Información util sobre nuestra carrera, sus directivos y contactos principales."
    />
    <section class="flex justify-between gap-5 sm:flex-col-reverse">
      <div class="flex flex-col gap-3">
        <Directivo
          v-for="directivo in directivos"
          :key="directivo.nombre"
          :nombre="directivo.nombre"
          :cargo="directivo.cargo"
          :contacto="directivo.contacto"
          :foto="directivo.foto"
        />
      </div>
      <div class="flex flex-col items-center justify-center w-1/2 sm:w-full">
        <p class="text-justify">
          La carrera de Ingeniería en Tecnologías de la Información se ocupa de
          formar profesionales con altos conocimientos tecnológicos en las áreas
          de programación, redes, interacción humano computador, bases de datos
          y sistemas web; capaces de planear, diseñar, organizar y mantener la
          información de forma segura usando metodologías y estándares
          internacionales, con un alto sentido de investigación y
          responsabilidad con la sociedad y la comunidad productiva.
        </p>
        <img
          class="block w-32 h-32 m-8"
          src="./../assets/img/logo-utmach.png"
          alt="utmach"
        />
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderPage from "@/components/utilities/HeaderPage.vue";
import Directivo from "@/components/docentes/Directivo.vue";
import Repository from "@/connection/repository";

export default defineComponent({
  name: "Nosotros",
  components: { HeaderPage, Directivo },
  setup() {
    const repository = new Repository();
    const directivos = repository.getCarrera().directivos;
    return { directivos };
  }
});
</script>
