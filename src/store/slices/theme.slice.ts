import { createSlice } from '@reduxjs/toolkit';

export enum Theme {
    Dark = "dark",
    Blue = "blue",
}

interface IThemeState {
    current: Theme;
}

const initialState: IThemeState = {
    current: Theme.Dark,
} 

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.current = action.payload;
        },
    },
})

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;