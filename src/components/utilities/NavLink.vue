<template>
  <router-link
    :to="to"
    class="w-full h-full p-5 text-center text-gray-800 transition duration-500 hover:text-primary"
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
