<template>
  <div
    class="fixed inset-0 z-10 overflow-y-auto"
    :class="{ hidden: !modelValue }"
  >
    <div
      class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 transition-opacity"
        aria-hidden="true"
        @click="$emit('update:modelValue', false)"
      >
        <div class="absolute inset-0 opacity-75 bg-primary-dark"></div>
      </div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="inline-block w-3/5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <slot />
        <div class="flex justify-center px-4 py-3 bg-gray-50 sm:px-6">
          <primary-button
            class="w-3/4"
            @click="$emit('update:modelValue', false)"
            >Salir</primary-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PrimaryButton from "@/components/utilities/PrimaryButton.vue";
export default defineComponent({
  name: "ContenidoGaleria",
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  components: { PrimaryButton },
  emits: ["update:modelValue"]
});
</script>
