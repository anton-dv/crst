import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setTheme, Theme } from "../store/slices/theme.slice";

export const useTheme = () => {
    const dispatch = useAppDispatch();
    const current = useAppSelector(state => state.theme.current);

    const blue = () => dispatch(setTheme(Theme.Blue));
    const dark = () => dispatch(setTheme(Theme.Dark));

    return {
        current,
        blue,
        dark,
        switch: (value: boolean) => {
            if (value) blue();
            else dark();
        }
    }
}