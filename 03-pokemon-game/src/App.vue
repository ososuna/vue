<template>
<div>
  <PokemonPage />
  <PokemonPicture
    :pokemonId="7"
    :showPokemon="true" />
  <PokemonOptions />
</div>
</template>

<script>
import PokemonPage from './pages/PokemonPage.vue'
import PokemonPicture from './components/PokemonPicture.vue'
import PokemonOptions from './components/PokemonOptions.vue'

export default {
  name: 'App',
  components: {
    PokemonPage,
    PokemonPicture,
    PokemonOptions
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
