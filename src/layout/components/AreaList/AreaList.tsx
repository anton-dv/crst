import { FC } from "react";
import { AreaCard } from "../AreaCard/AreaCard";

import classes from "./area-list.module.scss";
import { Col, Row } from "antd";

import { areasData } from "../../../data/areasData";
import { useLocale } from "../../../hooks/useLocale";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { Locale } from "../../../types/Locale";

export const AreaList: FC = () => {
  const locale = useLocale();

  return (
    <>
      {areasData.map((area) => (
        <div key={area.id}>
          <SectionHeader title={area.group[locale.current]} />
          <Row
            gutter={[16, 16]}
            className={classes["area-list__row"]}
            style={
              locale.current === Locale.AR
                ? { flexDirection: "row-reverse" }
                : undefined
            }
          >
            {area.items.map((item) => (
              <Col key={item.id} span={24} md={12} lg={8}>
                <AreaCard id={item.id} name={item.name[locale.current]} />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
};
