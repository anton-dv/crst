import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { NavigationItems, setItems } from "../store/slices/navigation.slice";
import { useLocale } from "./useLocale";

export const useBreadcrumb = (items: NavigationItems) => {
    const dispatch = useAppDispatch();
    const locale = useLocale();
    
    useEffect(() => {
        dispatch(setItems(items));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale]);
}