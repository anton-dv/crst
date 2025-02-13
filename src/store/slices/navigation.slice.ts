import { createSlice } from '@reduxjs/toolkit';
import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/es/breadcrumb/Breadcrumb';

export type NavigationItems = Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[] | undefined;

interface INavigationState {
    items: NavigationItems;
}

const initialState: INavigationState = {
    items: undefined,
} 

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
})

export const { setItems } = navigationSlice.actions;
export default navigationSlice.reducer;