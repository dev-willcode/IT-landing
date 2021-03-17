<template>
  <router-link
    :to="to"
    class="h-full p-5 text-center transition duration-500 hover:text-secondary hover:font-semibold"
    :class="{ 'text-secondary font-semibold': verificarRutaActual(to) }"
  >
    {{ name }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PrimaryButton",
  props: {
    name: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  },
  setup() {
    const { currentRoute } = useRouter();

    const verificarRutaActual = function(ruta: string) {
      return currentRoute.value.path === ruta;
    };
    return { verificarRutaActual };
  }
});
</script>
