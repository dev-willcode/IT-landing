<template>
  <section class="flex items-center">
    <nav class="flex items-center w-8/12 gap-2 md:flex-wrap">
      <router-link to="/" name="Home">
        <img
          src="@/assets/img/logo-utmach.png"
          alt="logo utmach"
          class="object-contain h-12 w-min"
        />
      </router-link>
      <nav-link to="/" name="Home" />
      <nav-link to="/oferta-academica" name="Oferta académica" />
      <nav-link to="/malla-curricular" name="Malla curricular" />
      <nav-link to="/docentes" name="Docentes" />
      <nav-link to="/nosotros" name="Nuestra carrera" />
      <nav-link to="/galeria" name="Galería" />
    </nav>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NavLink from "@/components/utilities/NavLink.vue";

export default defineComponent({
  name: "NavBar",
  components: { NavLink },
  setup() {
    return {};
  }
});
</script>
