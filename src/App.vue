<template>
  <Navbar />
  <router-view class="text-white bg-primary-dark" />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Repository from "./connection/repository";

export default defineComponent({
  name: "App",
  components: { Navbar, Footer },
  setup() {
    const repository = new Repository();

    repository.obtenerDatos();
  }
});
</script>

<style>
@import url("./assets/css/styles.css");
</style>
