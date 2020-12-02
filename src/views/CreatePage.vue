<template>
  <h1>Create a card</h1>
  <Create
    v-model:content.capitalize="form.content"
    v-model:date.dateFormat="form.date"
  />
  <h3>Preview: </h3>
  <Card
    :content="form.content"
    :date="form.date"
  />
</template>

<script>
import { reactive } from 'vue';
import Create from '@/components/Create.vue';
import Card from '@/components/Card.vue';

export default {
  components: {
    Create,
    Card,
  },

  props: {
  },

  setup() {
    const form = reactive({
      content: '',
      date: '',
    });

    return { form };
  },
};

</script>
