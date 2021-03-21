<template>
  <section
    class="h-full max-w-5xl gap-5 bg-white shadow-md text-primary-dark rounded-xl"
  >
    <div class="flex justify-center">
      <img
        class="max-w-full"
        :src="computedFoto"
        :alt="semestres.nombre_promocional"
      />
    </div>
    <article
      class="flex flex-col items-center justify-around gap-5 p-3 text-justify"
    >
      <h4 class="p-1 text-2xl font-bold">
        {{ semestres.nombre_promocional }}
      </h4>
      <p class="p-1 font-thin">{{ semestres.descripcion }}</p>
      <primary-button @click="mostrarSemestre()">
        Ver más sobre este semestre...
      </primary-button>
    </article>
    <section>
      <Modal v-model="verSemestreDetalle">
        <ContenidoMalla :semestres="semestres" />
      </Modal>
    </section>
  </section>
</template>

<script lang="ts">
import { getURL } from "@/connection/repository";
import { defineComponent, ref, computed } from "vue";
import PrimaryButton from "@/components/utilities/PrimaryButton.vue";
import ContenidoMalla from "@/components/malla/ContenidoMalla.vue";
import Modal from "@/components/utilities/Modal.vue";

export default defineComponent({
  name: "ItemMalla",
  props: {
    semestres: Object
  },
  components: { Modal, ContenidoMalla, PrimaryButton },
  setup(props) {
    const verSemestreDetalle = ref(false);
    const computedFoto = computed(() => {
      return (
        getURL(props.semestres?.imagen?.url) ||
        require("./../../assets/img/logo-utmach.png")
      );
    });

    const mostrarSemestre = function() {
      verSemestreDetalle.value = !verSemestreDetalle.value;
    };

    return { verSemestreDetalle, mostrarSemestre, computedFoto };
  }
});
</script>
