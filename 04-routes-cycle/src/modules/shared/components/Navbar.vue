<template>
  <div>
<!--       <router-link :to="{ name: 'home' }">Pokemon List</router-link>
      <router-link :to="{ name: 'pokemon-id', params: { id: 151 } }">Pokemon by id</router-link>
      <router-link :to="{ name: 'about' }">About</router-link> -->
      <CustomLink
        v-for="link in links"
        :key="link.to"
        :link="link"
      />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {

  data() {
    return {
      links: [
        { to: '/home', name: 'Pokemons' },
        { to: '/pokemonid/50', name: 'By Id' },
        { to: '/about', name: 'About' },
        { to: 'https://google.com', name: 'Google' }
      ]
    }
  },

  components: {
    CustomLink: defineAsyncComponent( () => import('./CustomLink') )
  }
}
</script>

<style scoped>

div {
  padding: 0 30px;
}

div a {
  color: #2c3e50;
  font-weight: bold;
  margin: 0 10px;
}

/* a.router-link-exact-active {
  color: #42b983;
} */

</style>