import { type ERLocale } from "../types/Locale";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setLocale } from "../store/slices/locale.slice";
import { Locale } from "../types/Locale";

export type LocaleResult = {
    current: Locale,
    currentER: ERLocale,
    set: (locale: Locale) => void;
}

const localeId = "locale-id";

export const useLocale = (): LocaleResult => {
    const dispatch = useAppDispatch();
    const current = useAppSelector(state => state.locale.current);

    return {
        current,
        currentER: current === Locale.RU ? Locale.RU : Locale.EN,
        set: (locale: Locale) => {
            localStorage.setItem(localeId, locale);
            dispatch(setLocale(locale));
        }
    }
}