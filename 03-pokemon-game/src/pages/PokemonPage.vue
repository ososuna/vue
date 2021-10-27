<template>
    <div>
        <h1>Who's that pokemon?</h1>
        <PokemonPicture
            :pokemonId="251"
            :showPokemon="true" />
        <PokemonOptions />
   </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    }
}
</script>
