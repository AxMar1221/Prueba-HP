import { createSlice } from '@reduxjs/toolkit';

export const charaterSlice = createSlice({
    name: ' charater',
    initialState: {
        favoriteCharater: [],
    },
    reducers: {
        setFavoriteCharater: ( state, action ) => {
            if ( state.favoriteCharater.length < 5 ) {
                let addFavorite = [ ...state.favoriteCharater ];
                addFavorite.push( action.payload );
                return {
                    ...state,
                    favoriteCharater: addFavorite,
                };
            }
        },
    },
});

export const { setFavoriteCharater } = charaterSlice.actions;

export default charaterSlice.reducer;

export const addCharater = ( personaje ) => ( dispatch ) => {
    dispatch( setFavoriteCharater( personaje ));
    console.log( personaje )
};