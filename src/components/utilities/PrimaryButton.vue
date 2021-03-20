<template>
  <button
    class="px-8 py-3 font-semibold transition duration-500 shadow-md text-gray-50 rounded-xl bg-secondary-dark hover:bg-secondary-light focus:outline-none"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrimaryButton"
});
</script>
