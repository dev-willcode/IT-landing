<template>
  <section class="px-5">
    <h4 class="font-bold">{{ listTitle }}</h4>
    <ul>
      <li v-for="item in items" :key="item.text">
        <a
          :href="item.link"
          class="font-thin transition duration-500 cursor-pointer hover:text-secondary hover:font-semibold "
        >
          <i class="fas fa-chevron-right" />
          {{ item.text }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterList",
  components: {},
  props: {
    listTitle: {
      type: String,
      required: true
    },
    items: {
      type: Array
    }
  },
  setup() {
    return {};
  }
});
</script>
