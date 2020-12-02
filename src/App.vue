<template>
  <div id="nav">
    <router-link to="/">Cards</router-link> |
    <router-link to="/create">Create</router-link> |
    <router-link to="/multiroot">Multiroot</router-link>
  </div>
  <div id="loading" v-if="loading">
    <p>LOADING</p>
  </div>
  <router-view/>
</template>
<script>
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  computed: {
    ...mapState(['loading']),
  },
});
</script>
<style lang="sass">
@import 'styles/index'
#nav
  padding: 30px
#loading
  width: 100vw
  height: 100vh
  position: fixed
  top: 0
  lef: 0
  background-color: rgba(0,0,0,.6)
  font-size: 2rem
  font-weight: 600
  display: flex
  align-items: center
  justify-content: center
  p
    color: white
    display: flex
    align-items: center
    justify-content: center
    min-width: 300px
    background-color: red
    height: 160px
    border-radius: 4px

</style>
