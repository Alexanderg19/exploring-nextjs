import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon, }
}

// const getInititalState = (): PokemonsState => {

//   if ( typeof localStorage === 'undefined' ) return {};

//   const favorites = JSON.parse( localStorage.getItem('Favorites-pokemons') ?? '{}' )
//   return favorites
// }

const initialState: PokemonsState = {
  favorites: {},
  // ...getInititalState()
  // '1': { id: '1', name: 'bulbasaur' },
  // '2': { id: '2', name: 'ivysaur' },
  // '3': { id: '3', name: 'venusaur' },
}

const pokemonsSlice = createSlice({
  name: 'Pokemons',
  initialState,
  reducers: {

    setFavoritePokemon( state, action: PayloadAction<{ [key: string]: SimplePokemon }> ) {
      state.favorites = action.payload
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon

      if ( !!state.favorites[id] ) {
        delete state.favorites[id];
        //return;
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem('Favorites-pokemons', JSON.stringify( state.favorites ) )
    }

  }
});

export const { toggleFavorite, setFavoritePokemon } = pokemonsSlice.actions

export default pokemonsSlice.reducer