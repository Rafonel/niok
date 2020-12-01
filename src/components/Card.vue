<template>
  <div class="card">
    <p>{{ card.id }}</p>
    <p>{{ card.content }}</p>
    <p>{{ card.date }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>

</style>
