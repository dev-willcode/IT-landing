<template>
  <!-- imagen facultad -->
  <div id="cover-facultad" class="w-full bg-cover">
    <div
      class="w-full h-full bg-gradient-to-t from-gray-900 via-transparent to-transparent"
    ></div>
  </div>
  <!-- informacion footer -->
  <section
    class="flex justify-around px-5 pt-16 pb-32 bg-gray-900 md:flex-col md:items-center"
  >
    <!-- direccion y contacto -->
    <div class="flex items-center md:pb-16">
      <img
        class="w-32 h-32 transform scale-100"
        src="@/assets/img/logo-utmach.png"
        alt="logo utmach"
      />
      <section class="flex flex-col px-5 text-white">
        <article>
          <p class="font-semibold">Dirección</p>
          <p class="font-thin">Av. Panamericana Km. 5 1/2 Vía a Pasaje</p>
        </article>
        <article>
          <p class="font-semibold">Contacto</p>
          <p class="font-thin">(07) 298-3364 ext. 430</p>
        </article>
      </section>
    </div>

    <!-- copyright -->
    <div class="flex sm:flex-col sm:gap-5">
      <LinkList
        class="text-white"
        listTitle="Colaboradores"
        :items="contributorsList"
      />
      <LinkList
        class="text-white"
        listTitle="Links de interés"
        :items="interestList"
      />
    </div>
  </section>

  <section class="text-center text-white align-text-bottom bg-gray-800">
    <p class="py-2">
      © Derechos Reservados UTMACH 2021
      <span class="font-semibold">UNIVERSIDAD TÉCNICA DE MACHALA</span>
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LinkList from "@/components/utilities/LinkList.vue";

export default defineComponent({
  name: "NavBar",
  components: { LinkList },
  setup() {
    const contributorsList = [
      { text: "Willy Álvaro Carreño Tejada" },
      { text: "Jorge Enrique Jarrin Unuzungo" },
      { text: "Dayan Andrey Galarza Echeverria" },
      { text: "David Emanuel Millán Cruz" }
    ];
    const interestList = [
      {
        text: "Portal UTMACH",
        link: "https://www.utmachala.edu.ec/portalwp/index.php/"
      },
      {
        text: "Centro de investigación",
        link: "https://investigacion.utmachala.edu.ec/portal/"
      },
      {
        text: "Centro de Educación Continua",
        link: "http://cec.utmachala.edu.ec/"
      },
      {
        text: "Maestría de software",
        link: "https://www.facebook.com/msoftwareUTMACH"
      },
      {
        text: "Biblioteca virtual",
        link: "https://biblioteca.utmachala.edu.ec/wordpress/"
      }
    ];
    return {
      contributorsList,
      interestList
    };
  }
});
</script>
<style>
#cover-facultad {
  background-image: url("./../assets/img/facultad.jpg");
  height: 45vw;
  max-height: 38vw;
}
</style>
