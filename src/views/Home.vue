<template>
  Home
    <Card
      v-for="item in cards"
      :key="item.id"
      :card="item"
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
