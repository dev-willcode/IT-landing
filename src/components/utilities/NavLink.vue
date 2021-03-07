<template>
  <router-link
    :to="to"
    class="h-full p-5 text-center transition duration-500 hover:text-secondary hover:font-semibold"
  >
    {{ name }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
  }
});
</script>
