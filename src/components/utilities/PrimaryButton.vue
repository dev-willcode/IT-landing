<template>
  <button
    class="px-8 py-3 font-semibold text-gray-50 rounded-xl bg-primary hover:bg-primary-light"
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
