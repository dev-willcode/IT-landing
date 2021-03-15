<template>
  <section>
    <img class="w-128 h-128" :src="computedFoto" :alt="nombre" />
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Profesor",
  props: {
    foto: String
  },
  setup(props) {
    const computedFoto = computed(() => {
      return props.foto || require("./../../assets/img/logo-utmach.png");
    });
    return { computedFoto };
  }
});
</script>
