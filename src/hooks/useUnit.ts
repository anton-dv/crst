import { useMemo } from "react";
import { unitsData } from "../data/unitsData";

export const useUnit = (id?: string) => {
  return useMemo(() => {
    if(!id) return null;
    return unitsData.find((item) => item.id === id) || null;
  }, [id]);
}
