<template>
  <div id="nav">
    <router-link to="/">Cards</router-link> |
    <router-link to="/create">Create</router-link> |
    <router-link to="/multiroot">Multiroot</router-link>
  </div>
  <router-view/>
</template>

<style lang="sass">
@import 'styles/index'
#nav
  padding: 30px
</style>
