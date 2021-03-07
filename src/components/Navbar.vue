<template>
  <section class="flex w-full shadow-md">
    <nav class="flex items-center justify-end w-full px-10 md:flex-col">
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
