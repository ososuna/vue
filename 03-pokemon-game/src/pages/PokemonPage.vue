<template>

    <div>
        <h1 v-if="!pokemon">Loading...</h1>

        <div v-else>
            <h1>Who's that pokemon?</h1>
            <PokemonPicture
                :pokemonId="pokemon.id"
                :showPokemon="showPokemon" />
            <PokemonOptions
                :pokemons="pokemonArr"
                @selection="checkAnswer" />
        </div>
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
            pokemonArr: [],
            pokemon: null,
            showPokemon: false
        }
    },
    methods: {
        async mixPokemonArray() {
            
            this.pokemonArr = await getPokemonOptions()
            
            const randomInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ randomInt ]

        },
        checkAnswer( pokemonId ) {
            this.showPokemon = true
            console.log( pokemonId )
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>
