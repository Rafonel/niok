<template>
  <h1>Cards</h1>
  <button @click="handlePickAllCards">Pick all cards</button>
  <button @click="handlePickActiveCards">Pick active cards</button>
  <br/>
  <input type="number" v-model="search">
  <button @click="handleSearchCard">Search by ID</button>
  <p> Disabled cards: {{ lengthUnactiveCards }} </p>
  <br/>
  <Card
    v-for="item in actualCards"
    :key="item.id"
    :content="item.content"
    :date="item.date"
    :id="item.id"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions, mapGetters } from 'vuex';
import Card from '../components/Card.vue';
// eslint-disable-next-line no-unused-vars
import { TypeCard } from '../types';

export default defineComponent({
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {
      actualCards: [] as Array<TypeCard>,
      search: 0 as number,
    };
  },

  computed: {
    ...mapState(['allCards']),
    ...mapGetters(['activeCards', 'lengthUnactiveCards', 'idCard']),
    cards: {
      get(): Array<TypeCard> {
        return this.actualCards;
      },
      set(value: string): void {
        if (value === 'all') {
          this.actualCards = this.allCards;
        } else if (value === 'active') {
          this.actualCards = this.activeCards;
        } else {
          this.actualCards = this.idCard;
        }
      },
    },
  },
  methods: {
    ...mapActions(['getCards']),
    handlePickAllCards() {
      this.cards = this.allCards;
    },
    handlePickActiveCards() {
      this.cards = this.activeCards;
    },
    handleSearchCard() {
      this.cards = this.idCard(this.search);
    },
  },

  mounted() {
    this.getCards();
    this.cards = this.allCards;
  },
});
</script>
