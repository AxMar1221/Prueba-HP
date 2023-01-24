import { configureStore } from '@reduxjs/toolkit';
import favoriteCharater from './slice/charaters/charater';

export default configureStore({
    reducer: {
        favoriteCharater,
    }
})