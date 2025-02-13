import { FC } from "react";
import { Standard } from "../../../types/Standard";
import { TextSecondary } from "../../ui/Text/TextSecondary";
import { useLocale } from "../../../hooks/useLocale";
import { TextPrimary } from "../../ui/Text/TextPrimary";
import { unitCardMethodsLocales } from "./unitCardLocales";

export type UnitCardMethodsProps = {
  value: Standard | Standard[];
};

export const UnitCardMethods: FC<UnitCardMethodsProps> = ({ value }) => {
  const locale = useLocale();

  const methods = (value as Standard[]).length
    ? (value as Standard[])
    : [value as Standard];

  return (
    <div>
      <TextSecondary block>{unitCardMethodsLocales[locale.current]}:</TextSecondary>
      {methods.map((method, index) => (
        <TextPrimary key={index} block>
          <a style={{display: "block"}} href={method[locale.currentER].href}>
            {method[locale.currentER].name}
          </a>
        </TextPrimary>
      ))}
    </div>
  );
};

