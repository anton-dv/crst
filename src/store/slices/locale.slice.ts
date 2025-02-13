import { createSlice } from '@reduxjs/toolkit';
import { Locale } from '../../types/Locale';

interface IThemeState {
    current: Locale;
}

const saved = localStorage.getItem("locale-id");

const initialState: IThemeState = {
    current: saved as Locale || Locale.AR,
} 

export const localeSlice = createSlice({
    name: 'locale',
    initialState,
    reducers: {
        setLocale: (state, action) => {
            state.current = action.payload;
        },
    },
})

export const { setLocale } = localeSlice.actions;
export default localeSlice.reducer;