<template>

    <div>
        <h1 v-if="!pokemon">Loading...</h1>

        <div v-else>
            <h1>Who's that pokemon? (para mi polola Andy uwu)</h1>
            <PokemonPicture
                :pokemonId="pokemon.id"
                :showPokemon="showPokemon" />
            <PokemonOptions
                :pokemons="pokemonArr"
                @selection="checkAnswer" />

            <template v-if="showAnswer">
                <h2 class="fade-in">{{ message }}</h2>
                <button @click='newGame'>New Game</button>
                <br><br>
            </template>
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
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            
            this.pokemonArr = await getPokemonOptions()
            
            const randomInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ randomInt ]

        },
        checkAnswer( selectedId ) {
            
            this.showPokemon = true
            this.showAnswer  = true

            if ( selectedId === this.pokemon.id ) {
                this.message = `Correct, ${ this.pokemon.name }!`
            } else {
                this.message = `Incorrect, was ${ this.pokemon.name }`
            }
        },
        newGame() {
            this.showPokemon = false
            this.showAnswer  = false
            this.pokemon     = null
            this.pokemonArr  = []
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>
