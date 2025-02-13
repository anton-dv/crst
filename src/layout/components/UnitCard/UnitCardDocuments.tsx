import { FC } from "react";
import { Standard } from "../../../types/Standard";
import { TextSecondary } from "../../ui/Text/TextSecondary";
import { useLocale } from "../../../hooks/useLocale";
import { TextPrimary } from "../../ui/Text/TextPrimary";
import { unitCardDocumentsLocales } from "./unitCardLocales";

export type UnitCardDocumentsProps = {
  value: Standard | Standard[] | null;
};

export const UnitCardDocuments: FC<UnitCardDocumentsProps> = ({ value }) => {
  const locale = useLocale();

  const documents = value
    ? (value as Standard[]).length
      ? (value as Standard[])
      : [value as Standard]
    : null;

  if (!documents) return null;

  return (
    <div>
      <TextSecondary block>{unitCardDocumentsLocales[locale.current]}:</TextSecondary>
      {documents.map((document, index) => (
        <TextPrimary key={index} block>
          <a style={{display: "block"}} href={document[locale.currentER].href}>
            {document[locale.currentER].name}
          </a>
        </TextPrimary>
      ))}
    </div>
  );
};

