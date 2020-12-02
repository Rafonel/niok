<template>
  <div class="card">
    <p>{{ 1 }}</p>
    <p>{{ content }}</p>
    <p>{{ date }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    content: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '00/00',
    },
  },
});
</script>
