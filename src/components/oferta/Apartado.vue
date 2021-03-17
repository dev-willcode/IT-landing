<template>
  <section class="p-5">
    <h3 class="my-5 text-2xl font-bold text-center">{{ name }}</h3>
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Apartado",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {}
});
</script>
