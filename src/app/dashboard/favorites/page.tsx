import { PokemonGrid, PokemonsReponse, SimplePokemon } from "@/pokemons";
import { Metadata } from "next";


const metadata: Metadata = {
    title: 'Favoritos',
    description: 'lorem'
}



export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokémons Favoritos<small className="text-blue-500 ml-2">Global State</small></span>
      
      <PokemonGrid pokemons={ [] } />

    </div>
  );
}