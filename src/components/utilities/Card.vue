<template>
  <div class="relative h-full">
    <div class="relative z-10 w-full h-full">
      <slot />
    </div>
    <div
      v-if="sombra"
      class="absolute w-full h-full rounded-xl top-3 left-3"
      :class="oscuro ? 'bg-gray-800' : 'bg-gray-300'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    sombra: {
      type: Boolean,
      default: true
    },
    oscuro: {
      type: Boolean,
      default: true
    }
  }
});
</script>
