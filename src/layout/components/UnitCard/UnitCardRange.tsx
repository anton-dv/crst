import { FC } from "react";
import { TextSecondary } from "../../ui/Text/TextSecondary";
import { TextPrimary } from "../../ui/Text/TextPrimary";
import { useLocale } from "../../../hooks/useLocale";
import { Range } from "../../../data/unitsData";
import { unitCardRangeLocales } from "./unitCardLocales";

export type UnitCardRangeProps = {
  value: Range | null;
};

export const UnitCardRange: FC<UnitCardRangeProps> = ({ value }) => {
  const locale = useLocale();

  if (!value) return null;

  return (
    <div>
      <TextSecondary block>{unitCardRangeLocales[locale.current]}:</TextSecondary>
      <TextPrimary block>{value[locale.currentER]}</TextPrimary>
    </div>
  );
};
