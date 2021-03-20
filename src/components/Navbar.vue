<template>
  <div class="px-5 py-2 text-right">
    <label
      class="hidden text-2xl transition-all duration-500 cursor-pointer text-primary hover:text-secondary md:block"
      for="toggle-menu"
    >
      <i class="fas fa-bars" />
    </label>
    <input
      type="checkbox"
      name="toggle-menu"
      id="toggle-menu"
      class="hidden"
      v-model="activatedToggle"
    />
  </div>
  <section
    class="flex w-full shadow-md"
    :class="
      activatedToggle
        ? 'md:animate-navbar-active'
        : 'md:animate-navbar-inactive'
    "
  >
    <nav class="flex items-center justify-end w-full px-10 md:flex-col">
      <nav-link to="/" name="Home" icon="fa-home" />
      <nav-link
        to="/oferta-academica"
        name="Oferta académica"
        icon="fa-stream"
      />
      <nav-link to="/malla-curricular" name="Malla curricular" icon="fa-book" />
      <nav-link to="/docentes" name="Docentes" icon="fa-chalkboard-teacher" />
      <nav-link to="/nosotros" name="Nuestra carrera" icon="fa-university" />
      <nav-link to="/galeria" name="Galería" icon="fa-images" />
    </nav>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import NavLink from "@/components/utilities/NavLink.vue";

export default defineComponent({
  name: "NavBar",
  components: { NavLink },
  setup() {
    const activatedToggle = ref(true);
    return { activatedToggle };
  }
});
</script>

<style>
.toggle-active {
  overflow: hidden;
  animation: appear-navbar 0.8s forwards;
}
.toggle-inactive {
  overflow: hidden;
  animation: hide-navbar 0.6s forwards;
}

@keyframes hide-navbar {
}

@keyframes appear-navbar {
  from {
    height: 0px;
  }

  to {
    height: 384px;
  }
}
</style>
