<template>
    <div>
        <h1>Who's that pokemon?</h1>
        <PokemonPicture
            :pokemonId="251"
            :showPokemon="true" />
        <PokemonOptions
          :pokemons="pokemonArr" />
   </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return {
            pokemonArr: []
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            console.log( this.pokemonArr )
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>
