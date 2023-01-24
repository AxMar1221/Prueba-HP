import { createSlice } from '@reduxjs/toolkit';

export const charaterSlice = createSlice({
    name: 'charater',
    initialState: {
        favoriteCharater: [],
    },
    reducers: {
        setFavoriteCharater: ( state, action ) => {
            const charaterIndex = state.favoriteCharater.findIndex(
                ( item ) => item.name === action.payload.name
            );
            if ( state.favoriteCharater.length < 5  && charaterIndex === -1) {
                let addFavorite = [ ...state.favoriteCharater ];
                addFavorite.push( action.payload );
                return {
                    ...state,
                    favoriteCharater: addFavorite,
                };
            }
        },
        setRemoveFavorite: ( state, action ) => {
            const foundCharater = state.favoriteCharater.find(
                ( item ) => item.name === action.payload
            );
            if ( foundCharater ) {
                state.favoriteCharater.splice(
                    state.favoriteCharater.indexOf( foundCharater, 1 )
                );
            }
        }
    },
});

export const { setFavoriteCharater, setRemoveFavorite } = charaterSlice.actions;

export default charaterSlice.reducer;

export const addCharater = ( personaje ) => ( dispatch ) => {
    dispatch( setFavoriteCharater( personaje ));
};

export const removeCharater = ( name ) => ( dispatch ) => {
    dispatch( setRemoveFavorite( name ));
}