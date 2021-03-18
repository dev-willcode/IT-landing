<template>
  <button
    class="font-thin transition duration-500 cursor-pointer hover:text-secondary hover:font-bold"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SecondaryButton"
});
</script>
