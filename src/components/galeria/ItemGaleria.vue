<template>
  <section class="relative" @click="mostrarGaleria()">
    <img
      class="shadow-md w-128 h-128 rounded-xl"
      :src="computedFoto"
      :alt="galeria.ubicacion_interna + galeria.ubicacion_externa"
    />
    <div
      class="flex flex-col items-center justify-center gap-5 shadow-md cursor-pointer select-none image-overlay rounded-xl"
    >
      <h3 class="text-2xl font-semibold lg:text-xl">
        {{ galeria.ubicacion_externa }}
      </h3>
      <p class="font-thin text-md">{{ galeria.ubicacion_interna }}</p>
    </div>
  </section>
  <section>
    <Modal v-model="verGaleriaDetalle"
      ><ContenidoGaleria :galeria="galeria"
    /></Modal>
  </section>
</template>

<script lang="ts">
import Repository from "@/connection/repository";
import { defineComponent, ref, computed } from "vue";
import ContenidoGaleria from "@/components/galeria/ContenidoGaleria.vue";
import Modal from "@/components/utilities/Modal.vue";

export default defineComponent({
  name: "ItemGaleria",
  props: {
    galeria: Object
  },
  components: { Modal, ContenidoGaleria },
  setup(props) {
    const { URL_BASE } = new Repository();
    const verGaleriaDetalle = ref(false);

    const computedFoto = computed(() => {
      return (
        URL_BASE + props.galeria?.imagen?.url ||
        require("./../../assets/img/logo-utmach.png")
      );
    });

    const mostrarGaleria = function() {
      verGaleriaDetalle.value = !verGaleriaDetalle.value;
    };

    return { verGaleriaDetalle, mostrarGaleria, computedFoto };
  }
});
</script>

<style>
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  opacity: 0;
  transition: opacity 0.25s;
}
.image-overlay > * {
  transform: translateY(20px);
  transition: transform 0.25s;
}

.image-overlay:hover {
  opacity: 1;
}

.image-overlay:hover > * {
  transform: translateY(0);
}
</style>
