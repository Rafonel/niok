<template>
  <h1>Cards</h1>
  <button @click="justActiveCards = false">Pick all cards</button>
  <button @click="justActiveCards = true">Pick active cards</button>
  <br/>
  <Card
    v-for="item in cards"
    :key="item.id"
    :content="item.content"
    :date="item.date"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions, mapGetters } from 'vuex';
import Card from '../components/Card.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {
      justActiveCards: false,
    };
  },

  computed: {
    ...mapState(['allCards']),
    ...mapGetters(['activeCards']),
    cards() {
      if (this.justActiveCards) {
        return this.activeCards;
      }
      return this.allCards;
    },
  },
  methods: {
    ...mapActions({ handlePickAllCards: 'getCards' }),
  },

  mounted() {
    this.handlePickAllCards();
  },
});
</script>
