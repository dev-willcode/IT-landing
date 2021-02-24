<template>
  <button
    class="px-8 py-3 font-semibold border-2 shadow-md text-primary border-primary rounded-xl hover:border-transparent hover:bg-primary-light hover:text-white focus:outline-none"
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
