<template>
  <h1>Cards</h1>
  <Card
    v-for="item in cards"
    :key="item.id"
    :content="item.content"
    :date="item.date"
  />
</template>

<script>
import Card from '@/components/Card.vue';
import CardsServices from '@/services/CardsServices';

export default {
  name: 'Home',
  components: {
    Card,
  },

  data() {
    return {
      cards: [],
    };
  },

  created() {
    CardsServices.getEvents()
      .then((res) => {
        this.cards = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
