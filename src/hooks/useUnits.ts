import { useMemo } from "react";
import { unitsData } from "../data/unitsData";

export const useUnits = (id: string) => {
  return useMemo(() => {
    if(!id) return [];
    let findId = id;
    const sep = id.indexOf(":");
    if(~sep) findId = id.slice(sep + 1);

    return unitsData.filter((unit) => unit.id.startsWith(findId + ":"));
  }, [id]);
}
