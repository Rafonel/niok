import { createStore } from 'vuex';
import apiCards from '../services/apiCards';

export default createStore({
  state: {
    loading: false,
    allCards: [],
  },
  mutations: {
    SET_LOAD(state, status) {
      state.loading = status;
    },
    SET_CARDS(state, cards) {
      state.allCards = cards;
    },
  },
  actions: {
    async getCards(context) {
      context.commit('SET_LOAD', true);
      await apiCards.get('/cards')
        .then((res) => {
          context.commit('SET_LOAD', false);
          context.commit('SET_CARDS', res.data);
        });
    },
  },
  modules: {
  },
  getters: {
    activeCards: (state) => (
      state.allCards.filter((card) => card.active)
    ),
  },
});
