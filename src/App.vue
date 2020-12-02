<template>
  <div id="nav">
    <router-link to="/">Cards</router-link> |
    <router-link to="/create">Create</router-link>
  </div>
  <router-view/>
</template>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
  &.router-link-exact-active
    color: #42b983
.card
  width: 400px
  background-color: #393939
  color: #a0a0a0
  display: flex
  align-items: center
  justify-content: space-between
  padding: 10px
  border-radius: 14px
  box-shadow: 4px 0px 10px rgba(0,0,0,.5)
  margin: 10px auto
input
  margin: 10px 5px
  padding: 4px 5px
  border-radius: 5px
  border: 2px solid #555
</style>
