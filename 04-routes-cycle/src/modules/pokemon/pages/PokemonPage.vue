<template>
    <div>
        <h1>Pokemon: <span>#{{ id }}</span></h1>
        <div v-if="pokemon">
            <img
              :src="pokemon.sprites.front_default"
              :alt="pokemon.name">
        </div>
    </div>
</template>

<script>
export default {
    
    props: {
        id: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            // id: null
            pokemon: null
        }
    },

    created() {
        
/*      const { id } = this.$route.params
        console.log( id )
        this.id = id */
        this.getPokemon()

    }, 

    methods: {
        async getPokemon() {
            
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then( r => r.json() )
                this.pokemon = pokemon
                console.log( this.pokemon )
            } catch ( error ) {
                this.$router.push('/')
                console.log('Nothing to do')
            }
            
        }
    },

    watch: {
        id() {
            this.getPokemon()
        }
    }
}
</script>