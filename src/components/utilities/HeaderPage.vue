<template>
  <div class="p-5 text-center">
    <h2 class="text-2xl font-bold">{{ titulo }}</h2>
    <p v-if="tagline">{{ tagline }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderPage",
  props: {
    titulo: {
      type: String,
      required: true
    },
    tagline: {
      type: String,
      required: true
    }
  }
});
</script>
