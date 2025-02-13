import { useMemo } from "react";
import { areasData } from "../data/areasData";

export const useArea = (id?: string) => {

    return useMemo(() => {
        if (!id) return null;
        let findId = id;
        const sep = id.indexOf(":");
        if (~sep) findId = id.slice(0, sep);

        const group = areasData.find((areas) =>
            areas.items.some((item) => item.id === findId)
        );

        if (!group) return null;
        return group.items.find((item) => item.id === findId) || null;
    }, [id]);
}