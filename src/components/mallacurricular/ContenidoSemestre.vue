<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="flex justify-center">
              <img
                class="w-1/2 h-1/2"
                :src="computedFoto"
                :alt="nombrePromocional"
              />
            </div>
            <div class="grid grid-cols-2">
                <div>
                   <h4 class="p-1 text-2xl font-bold">texto{{ nombrePromocional }}</h4>
                    <p class="p-1 font-thin">texto{{ descripcion }}</p>
                </div>
                <div>
                  <p>Materias en el {{}}</p>
                </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 "
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { START_LOCATION } from "node_modules/vue-router/dist/vue-router";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "ContenidoSemestre",
  props: {
    nombre: String,
    nombrePromocional: String,
    descripcion: String,
    materias: String,
    foto: String,
  },
  setup(props) {
    const computedFoto = computed(() => {
      return props.foto || require("./../../assets/img/logo-utmach.png");
    });
    return { computedFoto };
  },
});
</script>
