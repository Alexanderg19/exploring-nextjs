import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const LocalStorageMiddleware = (state: MiddlewareAPI) => {
    return ( next: Dispatch ) => ( action: Action ) => {
        next(action)

        if ( action.type === "Pokemons/toggleFavorite" ) {
            const { pokemons } = state.getState() as RootState;
            localStorage.setItem( 'Favorites-pokemons', JSON.stringify( pokemons ) );
            return;
        }
    }
}